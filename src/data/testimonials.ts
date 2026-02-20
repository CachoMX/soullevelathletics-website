export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marcus T.',
    role: 'Parent of High School Athlete',
    text: "Coach Chris has completely transformed my son's game. His professional experience shows in every drill and every session. My son's confidence on the court has skyrocketed since training with Soul Level Athletics.",
    rating: 5,
  },
  {
    id: 2,
    name: 'David R.',
    role: 'College Athlete',
    text: "Training with someone who's actually played at the professional level makes all the difference. Coach Chris doesn't just teach drills — he teaches you how to think the game. My basketball IQ has gone to another level.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Angela M.',
    role: 'Parent of Youth Player',
    text: "My daughter has been training with Coach Chris for 6 months and the improvement is incredible. He's patient with younger athletes but still pushes them to be their best. Highly recommend for any serious young player.",
    rating: 5,
  },
  {
    id: 4,
    name: 'James K.',
    role: 'High School Varsity Player',
    text: "The strength and conditioning program changed my game completely. I'm faster, more explosive, and I don't get tired in the 4th quarter anymore. Coach Chris knows what it takes to compete at the highest level.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Sandra L.',
    role: 'Parent of Middle School Athlete',
    text: "What sets Coach Chris apart is his real-world experience. He's played professionally around the world and brings that knowledge to every session. My son looks forward to training every week.",
    rating: 5,
  },
];
