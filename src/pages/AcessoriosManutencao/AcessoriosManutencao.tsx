import { PageSection } from '../../components/PageSection/PageSection';
import * as S from './AcessoriosManutencao.styles';
import image from '../../assets/images/Banner-PagesAcessorios.jpg';
import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';
import { SEO } from '../../components/SEO/Seo';
import { contactData } from '../../components/Header'

export const AcessoriosManutencao = () => {
  return (
    <>
      <SEO
        title="Acessórios para Manutenção - JPM Borrachas e Materiais Elétricos"
        description="Vedação, rodas, rodízios e acessórios industriais de manutenção com alta durabilidade e qualidade."
      />

      <PageSection title="ACESSÓRIOS PARA MANUTENÇÃO INDUSTRIAL" image={image}>
        <S.Container>
          <header>
            <h2>Suprimentos e Acessórios Industriais</h2>
            <p>
              Além de um amplo mix de <strong>produtos elétricos</strong>, itens
              para <strong>automação</strong> e
              <strong> borrachas industriais</strong>, a <strong>JPM</strong>{' '}
              oferece uma linha completa de
              <strong> acessórios para manutenção industrial</strong>, com as
              mais diversas marcas, especificações técnicas e alto padrão de
              qualidade.
            </p>
          </header>

          <section>
            <h3>Acessórios Industriais</h3>
            <ul>
              <li>Correntes de elo</li>
              <li>Correntes de transmissão</li>
              <li>Cintas de elevação</li>
              <li>Conexões</li>
              <li>Rodas e rodízios</li>
              <li>Rolamentos</li>
              <li>Retentores</li>
              <li>Pregos e grampos (martelo pneumático)</li>
              <li>Manômetros</li>
              <li>Fitas adesivas</li>
              <li>Plástico bolha</li>
              <li>Lonas e encerados</li>
            </ul>
          </section>

          <section>
            <h3>Vedações</h3>
            <p>
              Precisa de <strong>acessórios de vedação</strong>? A{' '}
              <strong>JPM</strong> oferece
              <strong> juntas</strong>, <strong>gaxetas</strong>,{' '}
              <strong>retentores</strong>,<strong> anéis orings</strong>,{' '}
              <strong>papelão hidráulico</strong> e muito mais.
              <strong> Solicite seu orçamento conosco.</strong>
            </p>
          </section>
        </S.Container>
        <S.Divider />
        <SectionsContactus {...contactData} />
      </PageSection>
    </>
  );
};


