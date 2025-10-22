import { PageSection } from '../../components/PageSection/PageSection';
import * as S from './AcessoriosManutencao.styles';
import image from '../../assets/images/Banner-PagesAcessorios.png';
import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';

export const AcessoriosManutencao = () => {
  return (
    <PageSection title="ACESSÓRIOS PARA MANUTENÇÃO INDUSTRIAL" image={image}>
      <S.Container>
        <header>
          <h1>Diversos</h1>
          <p>
            Além de um mix completo de produtos elétricos, produtos para
            automação e borrachas industriais, a JPM conta com os mais variados
            suprimentos, marcas e especificações técnicas.
          </p>
        </header>

        <section>
          <h2>Acessórios Industriais</h2>
          <ul>
            <li>
              <strong>Correntes de elo</strong>
            </li>
            <li>
              <strong>Correntes de transmissão</strong>
            </li>
            <li>
              <strong>Cintas de elevação</strong>
            </li>
            <li>
            <strong>Conexões</strong>
            </li>
            <li>
              <strong>Rodas e rodízios</strong>
            </li>
            <li>
              <strong>Rolamentos</strong>
            </li>
            <li>
              <strong>Retentores</strong>
            </li>
            <li>
              <strong>Pregos/Grampos(martelo pneumático)</strong>
            </li>
            <li>
              <strong>Manômetros</strong>
            </li>
            <li>
              <strong>Fitas adesivas</strong>
            </li>
            <li>
              <strong>Plástico bolha</strong>
            </li>
            <li>
              <strong>Lonas/Encerados</strong>
            </li>
          </ul>
        </section>

        <section>
          <h1>Vedações</h1>
          <p>
           Precisando de acessórios de vedação? A JPM tem juntas, gaxetas, retentores, anéis orings,
           papelão hidráulico e muito mais. <strong> Solicite seu orçamento conosco.</strong>
          </p>
        </section>
      </S.Container>
      <SectionsContactus />
    </PageSection>
  );
};
