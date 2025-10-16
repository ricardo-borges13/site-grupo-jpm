import { CarouselComponent } from '../../components/Carousel/Corousel';
import { CategoryBar } from '../../components/CategoryBar/CategoryBar';
import image1 from '../../assets/images/TecnicoEletrica.jpg';
import image2 from '../../assets/images/automacao.jpg';
import { SectionInfo } from '../../components/Sections/SectionInfo';
import type { SectionInfoProps } from '../../components/Sections/SectionInfo';

const sobreData: SectionInfoProps = {
  title: 'Sobre o Grupo JPM',
  description: `
      A <strong>JPM Borrachas e Materiais Elétricos</strong>, integrante do Grupo JPM,
      é especializada no fornecimento de insumos industriais. <br><br>
      Com sede em Belo Horizonte (MG), atua desde 1997, atendendo múltiplos setores da indústria
      com um <strong>portfólio que inclui materiais elétricos, borrachas e plásticos industriais</strong>.
    `,
  image1,
  image2,
  buttonText: 'Saiba mais',
  onButtonClick: () => console.log('Clique em Saiba mais!'),
};

export const Home = () => {
  return (
    <div>
      <div className="global-container">
        <CarouselComponent />
      </div>
      <CategoryBar />
      <SectionInfo {...sobreData} />
    </div>
  );
};
