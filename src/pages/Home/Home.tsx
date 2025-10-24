import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CarouselComponent } from '../../components/Carousel/Carousel';
import { CategoryBar } from '../../components/CategoryBar/CategoryBar';
import image1 from '../../assets/images/TecnicoEletrica.jpg';
import image2 from '../../assets/images/tubos-de-construcao2-freepik.jpg';
import image3 from '../../assets/images/fioeletrico.jpg';
import image4 from '../../assets/images/mangueira1.jpg';
import image5 from '../../assets/images/manutencao1.jpg';
import image6 from '../../assets/images/automação2-freepik.jpg';
import { SectionInfo } from '../../components/SectionsSobre/SectionInfo';
import type { SectionInfoProps } from '../../components/SectionsSobre/SectionInfo';
import { ProductGroup } from '../../components/ProductGroup/ProdutctGroup';
import * as S from './Home.styles';
import { ClientsCarousel } from '../../components/ClientsCarousel/ClientsCarousel';
import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';
import { SEO } from '../../components/SEO/Seo';

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
  path: '/empresa',
};

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'produtos') {
      const section = document.getElementById('produtos');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <SEO
        title="GRUPO JPM Borrachas e Materiais Elétricos"
        description="Especialista em borrachas, materiais elétricos e automação industrial desde 1997. Soluções completas para manutenção e produção em diversos setores."
      />

      <S.ContainterCarousel>
        <CarouselComponent />
      </S.ContainterCarousel>
      <CategoryBar />
      <SectionInfo {...sobreData} />
      <section id="produtos">
        <ProductGroup
          title="Nossos Produtos"
          image1={image3}
          image2={image4}
          image3={image6}
          image4={image5}
        />
      </section>

      <SectionsContactus />
      <S.CarouselParceiros>
        <h2>Parceiros</h2>
        <ClientsCarousel />
      </S.CarouselParceiros>
    </>
  );
};


