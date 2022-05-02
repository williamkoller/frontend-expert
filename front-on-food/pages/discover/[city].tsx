import { useRouter } from 'next/router';
import { PageTemplate, Dishe } from 'components';
import Stylus from '../../styles/discovery.module.css';

export default function Discover() {
  const router = useRouter();
  const city = router.query.city;

  return (
    <PageTemplate>
      <div className={Stylus.content}>
        <h1>Opções na regiao de {city}</h1>
        <p>Encontramos x opções</p>
        <div className={Stylus.items}>
          <Dishe />
          <Dishe />
          <Dishe />
          <Dishe />
        </div>
      </div>
    </PageTemplate>
  );
}
