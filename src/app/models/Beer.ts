export interface Beer {
  id: number;
  name?: string;
  tagline?: string;
  description?: string;
  image_url?: string;
  abv?: number;
  ph?: number;
  attenuation_level?: number;
  brewers_tips?: string;
  contributed_by?: string;
  first_brewed?: string;
  food_pairing?: string[];
  volume?: Volume;
}

export interface Volume {
  value: number;
  unit: string;
}