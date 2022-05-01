import Stylus from './dishe-details.module.css';
import { DisheDetailsProps } from './types';
import { IconDelivery, IconCategory, IconReviews } from '@/icons';

export function DisheDetails({ type, subtitle, title }: DisheDetailsProps) {
  const Icon =
    type === 'delivery'
      ? IconDelivery
      : type === 'category'
      ? IconCategory
      : IconReviews;
  return (
    <div className={Stylus.detail}>
      <div className={Stylus.icon}>
        <Icon />
      </div>
      {subtitle && <span>{subtitle}</span>}
      {title}
    </div>
  );
}
