import { PageSection } from '../../components/PageSection/PageSection';
import * as S from './MateriaisEletricos.styles';
import image from '../../assets/images/Banner-PagesEletrica.png';
import { dataProductEletric } from './dataProductEletric';
import { ProductCategory } from '../../components/ProductCategory/ProductCategory';
import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';

export const MateriaisEletricos = () => {
  return (
    <PageSection
      title="MATERIAIS ELETRICOS"
      subTitle="Soluções integradas em infraestrutura elétrica e sistemas de energia"
      image={image}
    >
      <S.Container>
        <header>
          <h2>Produtos Elétricos</h2>

          <p>
            A <strong>JPM</strong> oferece uma linha completa de materiais e
            componentes elétricos para instalações <strong>industriais</strong>,
            <strong> comerciais</strong> e <strong>prediais</strong>.
          </p>

          <p>
            Nossas soluções abrangem <strong>iluminação</strong>,{' '}
            <strong>reatores</strong>,<strong>eletrodutos</strong>, painéis e
            comandos, cabos e conexões, sempre com foco em{' '}
            <strong> segurança</strong>, <strong>eficiência</strong> e
            <strong> confiabilidade</strong>.
          </p>

          <p>
            Também fornecemos sistemas de <strong>ventilação</strong>,{' '}
            <strong>eletro blindados</strong>, bandejamento para condutores,
            postes de iluminação e aparelhos de sinalização, garantindo uma
            infraestrutura elétrica moderna, organizada e de
            <strong> alto desempenho</strong>.
          </p>
        </header>

        <S.ContainerProduct>
          {dataProductEletric.map((category, index) => (
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
