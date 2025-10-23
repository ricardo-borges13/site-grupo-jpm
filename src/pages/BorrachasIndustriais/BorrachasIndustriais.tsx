import { PageSection } from '../../components/PageSection/PageSection';
import * as S from './BorrachasIndustriais.styles';
import image from '../../assets/images/Banner-PagesBorracha.png';
import { dataProductRubber } from './dataProductRubber';
import { ProductCategory } from '../../components/ProductCategory/ProductCategory';
import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';

export const BorrachasIndustriais = () => {
  return (
    <PageSection
      title="BORRACHAS"
      subTitle="Materiais industriais para vedação, isolamento e transmissão de força."
      image={image}
    >
      <S.Container>
        <header>
          <h2>Borracha e Plástico Industrial</h2>
          <p>
            A <strong>JPM</strong> oferece uma ampla linha de
            <strong> borrachas e plásticos industriais</strong>, desenvolvidos
            para atender às mais diversas aplicações em
            <strong> manutenção</strong>,<strong> vedação</strong>,
            <strong> isolamento</strong> e <strong>transmissão de força</strong>
            .
          </p>

          <p>
            Trabalhamos com <strong>correias</strong>,
            <strong> plásticos técnicos</strong>,
            <strong> lençóis de borracha</strong> e
            <strong> mangueiras industriais</strong>, garantindo
            <strong> qualidade</strong>, <strong>durabilidade</strong> e
            <strong> desempenho</strong> em diferentes segmentos da indústria.
          </p>

          <p>
            Nossos produtos seguem rigorosos padrões de fabricação, assegurando
            <strong> resistência</strong>, <strong>flexibilidade</strong> e
            <strong> precisão</strong> em cada projeto.
          </p>
        </header>

        <S.ContainerProduct>
          {dataProductRubber.map((category, index) => (
            <ProductCategory
              key={index}
              image={category.image}
              title={category.title}
              items={category.items}
            />
          ))}
        </S.ContainerProduct>
      </S.Container>
      <S.Divider />
      <SectionsContactus />
    </PageSection>
  );
};
