export interface Campaign {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  imageUrl: string;
  videoUrl?: string; // For mock custom showreel or player
  duration?: string;
  client?: string;
  role?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyCard {
  id: string;
  title: string;
  description: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
}
