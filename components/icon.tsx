import { IconProps } from '@/types';

export default function Icon({ icon: Icon, className }: IconProps) {
  return <Icon strokeWidth={2} size={24} className={className} />;
}
