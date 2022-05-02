import { DisheDetails } from '@/components';
import Image from 'next/image';
import Stylus from './dishe.module.css';

export function Dishe() {
  return (
    <div className={Stylus.dishe}>
      <div className={Stylus.wrapper}>
        <Image
          src='https://storage.googleapis.com/onfood/peperoni.jpg'
          alt='Plate'
          width={592}
          height={312}
          layout='responsive'
        />
      </div>
      <div>
        <div>
          <h2>Nome do Produto</h2>
        </div>
        <div className={Stylus.details}>
          <DisheDetails type='reviews' title='(201)' subtitle='4.5' />
          <DisheDetails type='category' title='Category' />
          <DisheDetails type='delivery' title='30 - 40 min' />
        </div>
      </div>
    </div>
  );
}
