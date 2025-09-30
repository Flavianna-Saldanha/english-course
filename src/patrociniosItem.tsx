import Image from 'next/image';
import { patrocinios } from '@/data/patrocinios';

export const PatrociniosItem = () => {
  return (
    <div className="mt-20 flex flex-wrap justify-around items-center md:w-3/5 md:m-auto md:mt-20">
      {patrocinios.map((patro) => (
        <div key={patro.index}>
          <Image
            src={patro.url}
            alt={`Patrocínio ${patro.index}`}
            width={80}
            height={80}
          />
        </div>
      ))}
    </div>
  );
};
