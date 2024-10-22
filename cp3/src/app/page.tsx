import imgLogo from '@/img/logo-fiap.png'
import Image from 'next/image';
export default function Home() {
  return (
    <div>
      <Image src={imgLogo} alt="Logo Fiap" width={150} />
    </div>
  );
}
