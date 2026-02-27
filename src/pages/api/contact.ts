import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';

export const prerender = false;

// Handle OPTIONS request for CORS preflight
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    // Validate SendGrid API key
    const apiKey = import.meta.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error('SENDGRID_API_KEY is not configured in environment variables');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    sgMail.setApiKey(apiKey);

    // Parse JSON data
    const body = await request.json();
    const name = body.name as string;
    const email = body.email as string;
    const phone = body.phone as string;
    const service = body.service as string;
    const preferredTime = body.preferred_time as string;
    const message = body.message as string;

    // Validate required fields
    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email content
    const emailContent = `
New Contact Form Submission from Soul Level Athletics

Name: ${name}
Email: ${email}
Phone: ${phone}
Service of Interest: ${service || 'Not specified'}
Preferred Time: ${preferredTime || 'Not specified'}

Message:
${message || 'No message provided'}

---
This email was sent from the Soul Level Athletics contact form.
    `.trim();

    // Send email
    const msg = {
      to: ['coachchrisjohnson1@gmail.com', 'caragon@me.com'],
      from: 'noreply@soullevelathletics.com', // Must be verified in SendGrid
      subject: `New Contact Form: ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
            From Soul Level Athletics Website
          </p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f8f8f8;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Name</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background-color: #f8f8f8;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
              <td style="padding: 12px; border: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Service Interest</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${service || '<em>Not specified</em>'}</td>
            </tr>
            <tr style="background-color: #f8f8f8;">
              <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Time</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${preferredTime || '<em>Not specified</em>'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f8f8f8; border-left: 4px solid #D4AF37;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; color: #666;">${message || '<em>No message provided</em>'}</p>
          </div>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            This email was sent from the Soul Level Athletics contact form at soullevelathletics.com
          </p>
        </div>
      `,
      replyTo: email, // Allow direct reply to the customer
    };

    await sgMail.send(msg);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('SendGrid error:', error);

    // More detailed error logging
    if (error.response) {
      console.error('SendGrid response error:', error.response.body);
    }

    return new Response(
      JSON.stringify({
        error: 'Failed to send email',
        details: error.message
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
