export interface GamesetGeneratorSchema {
  name: string;
  series: string;
  size: 'core' | 'large' | 'medium' | 'small' | 'promo';
}
