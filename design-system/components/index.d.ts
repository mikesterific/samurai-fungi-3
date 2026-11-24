// Samurai Fungi — component props (documentation; loaded as window.SamuraiFungi)
type IconName = 'mushroom' | 'flask' | 'ultrasound' | 'sprout' | 'brain' | 'target' | 'lotus' | 'leaf' | 'gear' | 'book' | 'people' | 'culture-dish' | 'dropper' | 'droplet' | 'no-grain' | 'search' | 'cart' | 'arrow-right' | 'chevron-down' | 'minus' | 'plus';
interface IconItem { icon: IconName; label: string }

export interface IconProps { name: IconName; size?: number; strokeWidth?: number; title?: string; className?: string }
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'outline' | 'band' | 'link'; size?: 'sm' | 'md' | 'lg';
  icon?: IconName; iconAfter?: IconName; href?: string; block?: boolean; children: React.ReactNode }
export interface QuantityStepperProps { value?: number; defaultValue?: number; min?: number; max?: number; label?: string; onChange?: (value: number) => void }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { label?: string; options: Array<string | { value: string; label: string }> }
export interface SiteHeaderProps { logoSrc?: string; logoSrcInverse?: string; links: Array<{ label: string; href?: string; active?: boolean }>; cartCount?: number; cartHref?: string; homeHref?: string; onSearch?: () => void }
export interface SectionHeadingProps { title: React.ReactNode; size?: 'xl' | 'display' | 'l' | 'm'; eyebrow?: string; lede?: React.ReactNode; align?: 'left' | 'center'; as?: string; brush?: boolean; tone?: 'paper' | 'band' }
export interface BrushRuleProps { width?: number; className?: string }
export interface FeatureRowProps { items: IconItem[]; iconSize?: number; tone?: 'paper' | 'band' }
export interface BenefitGridProps { items: Array<{ icon: IconName; title: string; text: string }> }
export interface IngredientListProps { items: Array<{ label: string; image?: string; icon?: IconName }> }
export interface ImageCardProps { image: string; title: string; icon?: IconName; alt?: string; href?: string }
export interface CategoryCardProps { image: string; title: string; icon?: IconName; tagline?: string; linkLabel?: string; href?: string }
export interface ProductCardProps { image: string; name: string; price: number | string; subtitle?: string; href?: string; ctaLabel?: string; soldOut?: boolean; imageAlt?: string }
export interface PriceProps { amount: number | string; size?: 'm' | 'l'; currency?: string; compareAt?: string }
export interface ProductGalleryProps { images: Array<{ src: string; alt: string; thumb?: string }>; defaultIndex?: number }
export interface ProductSummaryProps { name: string; price: number | string; subtitle?: string; tagline?: string; features?: IconItem[]; ctaLabel?: string; onAddToCart?: (quantity: number) => void }
export interface InkBandProps { title: React.ReactNode; children?: React.ReactNode; eyebrow?: string; cta?: { label: string; href?: string }; pillars?: IconItem[]; image?: string; imageSide?: 'left' | 'right'; seed?: number }
export interface DisclaimerProps { children?: React.ReactNode }
