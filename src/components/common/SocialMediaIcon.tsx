import { cn } from '../../lib';

interface SocialMediaIconProps {
  name: string;
  link: string;
  color: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  size?: number;
  className?: string;
}

export const SocialMediaIcon = ({
  name,
  link,
  color,
  Icon,
  size = 26,
  className,
}: SocialMediaIconProps) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit our ${name} page`}
    className={cn(
      'flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-100',
      color,
      className,
    )}
  >
    <Icon size={size} />
  </a>
);

export default SocialMediaIcon;
