import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CarouselComponent } from '../../components/Carousel/Carousel';
import { CategoryBar } from '../../components/CategoryBar/CategoryBar';
import image1 from '../../assets/images/Sobre-Eletrica.jpg';
import image2 from '../../assets/images/Sobre-Borracha2.jpg';
import image3 from '../../assets/images/fioeletrico.jpg';
import image4 from '../../assets/images/mangueira.jpg';
import image5 from '../../assets/images/manutencao.jpg';
import image6 from '../../assets/images/AutomacaoFREEPIK.jpg';
import { SectionInfo } from '../../components/SectionsSobre/SectionInfo';
import type { SectionInfoProps } from '../../components/SectionsSobre/SectionInfo';
import { ProductGroup } from '../../components/ProductGroup/ProdutctGroup';
import * as S from './Home.styles';
import { ClientsCarousel } from '../../components/ClientsCarousel/ClientsCarousel';
import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';
import { SEO } from '../../components/SEO/Seo';
import { contactData } from '../../components/Header';
import { SectionCarousel } from '../../components/SectionCarousel/SectionCarousel';

const sobreData: SectionInfoProps = {
  title: 'Sobre a JPM',
  description: `
      <p>
    A <strong>JPM Borrachas e Materiais Elétricos</strong> é especializada no
    fornecimento de <strong>insumos industriais</strong>, oferecendo soluções em
    <strong> materiais elétricos, borrachas e automação</strong>.
  </p>
  <p>
    Com sede em <strong>Belo Horizonte (MG)</strong>, atua desde
    <strong> 1997</strong>, atendendo grandes indústrias brasileiras com um
    portfólio amplo, qualidade reconhecida e atendimento técnico ágil.
  </p>
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
        title="Materiais Elétricos e Borrachas em BH | JPM"
        description="Fornecedor de materiais elétricos, borrachas industriais e automação em Belo Horizonte. Soluções completas para manutenção e produção industrial."
        image="https://www.grupojpm.com.br/images/home.jpg"
        url="https://www.grupojpm.com.br"
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
      <SectionsContactus {...contactData} />

      <SectionCarousel title="Parceiros">
        <ClientsCarousel />
      </SectionCarousel>
    </>
  );
};
