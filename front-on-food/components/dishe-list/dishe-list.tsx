import Stylus from './dishe-list.module.css';
import { Dishe } from '@/components';

export function DisheList() {
  return (
    <div className={Stylus.list}>
      <Dishe />
      <Dishe />
      <Dishe />
      <Dishe />
      <Dishe />
    </div>
  );
}
