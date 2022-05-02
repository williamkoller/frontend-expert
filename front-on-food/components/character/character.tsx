import Image from 'next/image';
import Stylus from './character.module.css';

export function Character() {
  return (
    <div className={Stylus.container}>
      <div className={Stylus.device}>
        <Image
          src='/images/home/Device.png'
          width={145}
          height={283}
          alt='Telefone'
        />
      </div>
      <div className={Stylus.bubble}>
        <Image
          src='/images/home/Speech.png'
          width={64}
          height={71}
          alt='Balao'
        />
      </div>
      <div className={Stylus.character}>
        <Image
          src='/images/home/Character.png'
          width={183}
          height={246}
          alt='Personagem'
        />
      </div>
      <div className={Stylus.background}>
        <Image
          src='/images/home/Background.png'
          width={328}
          height={318}
          alt='Background'
        />
      </div>
      <hr />
    </div>
  );
}
