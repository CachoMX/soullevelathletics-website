export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  details: string[];
  forWhom: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: 'strength-conditioning',
    title: 'Strength & Conditioning',
    shortTitle: 'Strength',
    icon: '💪',
    description:
      'Build explosive strength, increase your vertical, and develop the physical foundation that separates elite athletes from the rest.',
    details: [
      'Explosive strength development',
      'Vertical jump training',
      'Speed and agility work',
      'Core stability and power',
      'Functional movement training',
      'Basketball-specific conditioning',
    ],
    forWhom: 'All athletes looking to build a stronger, faster, more explosive body.',
    slug: 'strength-conditioning',
  },
  {
    id: 'athletic-performance',
    title: 'Athletic Performance Training',
    shortTitle: 'Performance',
    icon: '⚡',
    description:
      'Sharpen your acceleration, footwork, and reaction time with training designed to make you faster and more agile on the court.',
    details: [
      'Acceleration and deceleration mechanics',
      'Change of direction and cutting',
      'Footwork and balance drills',
      'Reaction time training',
      'Game-speed conditioning',
      'Sport-specific movement patterns',
    ],
    forWhom: 'Athletes ready to take their speed, agility, and on-court movement to the next level.',
    slug: 'athletic-performance',
  },
  {
    id: 'injury-prevention',
    title: 'Injury Prevention & Recovery',
    shortTitle: 'Prevention',
    icon: '🛡️',
    description:
      'Stay on the court longer with training focused on mobility, joint stability, and corrective movements that keep your body healthy.',
    details: [
      'Mobility and flexibility work',
      'Joint stability exercises',
      'Muscle balance assessment',
      'Corrective movement patterns',
      'Return-to-play training protocols',
      'Pre-game and post-game routines',
    ],
    forWhom: 'Athletes recovering from injury or looking to stay healthy throughout the season.',
    slug: 'injury-prevention',
  },
  {
    id: 'film-study',
    title: 'Film Study & Basketball IQ',
    shortTitle: 'Film Study',
    icon: '🎬',
    description:
      'Elevate your game intelligence with film breakdown sessions that sharpen your decision-making and court awareness.',
    details: [
      'Game film breakdown and analysis',
      'Decision-making under pressure',
      'Defensive positioning and rotations',
      'Spacing and off-ball movement concepts',
      'Situational awareness development',
      'Opponent scouting preparation',
    ],
    forWhom: 'Serious players who want to think the game at a higher level.',
    slug: 'film-study',
  },
  {
    id: 'private-training',
    title: 'Private Basketball Skill Training',
    shortTitle: 'Skill Training',
    icon: '🏀',
    description:
      'One-on-one sessions focused on elite ball handling, shooting mechanics, footwork, and finishing — built for game situations.',
    details: [
      'Ball handling under pressure',
      'Shooting mechanics and consistency',
      'Footwork and finishing at the rim',
      'Scoring moves and counter moves',
      'Game-speed repetitions',
      'Position-specific skill development',
    ],
    forWhom: 'Players of all levels who want focused, personalized skill development.',
    slug: 'private-training',
  },
  {
    id: 'live-action',
    title: 'Live Action Training',
    shortTitle: 'Live Action',
    icon: '🔥',
    description:
      'Competitive live runs and situational basketball that put your skills to the test under real game pressure.',
    details: [
      'Competitive live-game runs',
      'Situational basketball scenarios',
      'Decision-making under real pressure',
      'Leadership development on the court',
      'Game-like intensity and physicality',
      'Team play and communication',
    ],
    forWhom: 'Athletes who want to test their skills in a competitive, game-like environment.',
    slug: 'live-action',
  },
];
