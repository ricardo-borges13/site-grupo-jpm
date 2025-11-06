import { PageSection } from '../../components/PageSection/PageSection';
import * as S from './AcessoriosManutencao.styles';
import { dataAcessoriosManut } from './dataAcessoriosManut';
import image from '../../assets/images/Banner-PagesAcessorios.jpg';
import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';
import { SEO } from '../../components/SEO/Seo';
import { contactData } from '../../components/Header';
import { ProductCategory } from '../../components/ProductCategory/ProductCategory';

export const AcessoriosManutencao = () => {
  return (
    <>
      <SEO
        title="Acessórios para Manutenção - JPM Borrachas e Materiais Elétricos"
        description="Vedação, rodas, rodízios e acessórios industriais de manutenção com alta durabilidade e qualidade. Encontre tudo com a JPM."
        image="https://www.grupojpm.com.br/images/acessorios-industrial.jpg"
        url="https://www.grupojpm.com.br/produtos/acessorios"
        keywords="corrente de elo, corrente de transmissão, cintas de elevação, conexões, retentores, martelo pneumático,manômetros, fitas adesivas, plásticos bolha, lonas, JPM"
      />

      <PageSection title="ACESSÓRIOS PARA MANUTENÇÃO INDUSTRIAL" image={image}>
        <S.Container>
          <header>
            <h2>Suprimentos e Acessórios Industriais</h2>
            <p>
              A <strong>JPM</strong> oferece uma linha completa de{' '}
              <strong>produtos elétricos</strong>, itens para{' '}
              <strong>automação</strong>, <strong>vedação</strong> e
              <strong> manutenção industrial</strong>, reunindo marcas
              reconhecidas no mercado e alto padrão de qualidade.
            </p>

            <p>
              Com soluções versáteis e duráveis, atendemos às mais diversas
              demandas da indústria, sempre com foco em{' '}
              <strong>eficiência</strong> e <strong>confiabilidade</strong>.
            </p>
          </header>

          <S.ContainerProduct>
            {dataAcessoriosManut.map((category, index) => (
              <ProductCategory
                key={index}
                image={category.image}
                title={category.title}
                items={category.items}
              />
            ))}
          </S.ContainerProduct>
          <section>
            <h3>Precisa de um item específico?</h3>
            <p>
              A JPM possui uma ampla linha de vedações e acessórios sob medida.{' '}
              <br />
              <strong>Entre em contato e solicite seu orçamento.</strong>
            </p>
          </section>
        </S.Container>
        <S.Divider />
        <SectionsContactus {...contactData} />
      </PageSection>
    </>
  );
};
