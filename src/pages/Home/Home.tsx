import { CarouselComponent } from '../../components/Carousel/Corousel';
import { CategoryBar } from '../../components/CategoryBar/CategoryBar';
import image1 from '../../assets/images/TecnicoEletrica.jpg';
import image2 from '../../assets/images/rolo-borracha.jpg';
import image3 from '../../assets/images/fioeletrico.jpg';
import image4 from '../../assets/images/mangueira1.jpg';
import image5 from '../../assets/images/manutencao1.jpg';
import image6 from '../../assets/images/automacao.jpg';
import { SectionInfo } from '../../components/Sections/SectionInfo';
import type { SectionInfoProps } from '../../components/Sections/SectionInfo';
import { ProductGroup } from '../../components/ProductGroup/ProdutctGroup';
import * as S from './Home.styles';
import { ClientsCarousel } from '../../components/ClientsCarousel/ClientsCarousel';
import { FormContact } from '../../components/FormContact/FormContact';

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
      <S.ContainterCarousel>
        <CarouselComponent />
      </S.ContainterCarousel>
      <CategoryBar />
      <SectionInfo {...sobreData} />
      <ProductGroup
        title="Nossos Produtos"
        image1={image3}
        image2={image4}
        image3={image6}
        image4={image5}
      />
      <S.CarouselParceiros>
        <h2>Parceiros</h2>
        <ClientsCarousel />
      </S.CarouselParceiros>
      <FormContact />
    </div>
  );
};
