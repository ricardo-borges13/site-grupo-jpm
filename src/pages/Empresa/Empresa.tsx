import { PageSection } from '../../components/PageSection/PageSection';
import produtosImg from '../../assets/images/Banner-PagesA-Empresa.jpg';
import * as S from './Empresa.styles';
import { SEO } from '../../components/SEO/Seo';

export const Empresa = () => {
  return (
    <>
      <SEO
        title="A Empresa - JPM Borrachas e Materiais Elétricos"
        description="A JPM atua desde 1997 no fornecimento de insumos industriais. Referência em materiais elétricos, borrachas e automação, com foco em qualidade e atendimento técnico."
      />

      <PageSection title="A EMPRESA" image={produtosImg}>
  <S.Container>
    <header>
      <h1>Sobre a JPM</h1>
      <p>
        Fundada em <strong>24 de junho de 1997</strong>, a
        <strong> JPM Borrachas e Materiais Elétricos</strong> é especializada na
        <strong> revenda de insumos industriais</strong>, atendendo empresas de
        diversos segmentos com soluções em <strong>materiais elétricos</strong>,
        <strong> borrachas industriais</strong>, <strong>automação</strong> e
        <strong> manutenção</strong>. Com sede em
        <strong> Belo Horizonte (MG)</strong>, atua em todo o território nacional,
        oferecendo atendimento técnico e logístico ágil, com foco na eficiência e
        na confiabilidade das operações de seus clientes.
      </p>
    </header>

    <section>
      <h2>Áreas de atuação</h2>
      <p>Principais linhas e produtos comercializados:</p>
      <ul>
        <li>
          <strong>Materiais Elétricos:</strong> iluminação, cabos, painéis de
          comando, conexões e dispositivos industriais.
        </li>
        <li>
          <strong>Borrachas e Plásticos Industriais:</strong> correias,
          mangueiras, lençóis e perfis técnicos.
        </li>
        <li>
          <strong>Automação Industrial:</strong> IHMs, PLCs, inversores, fontes,
          módulos de interface e CPUs.
        </li>
        <li>
          <strong>Acessórios de Manutenção:</strong> produtos para vedação,
          rodas, rodízios e componentes de suporte industrial.
        </li>
      </ul>
    </section>

    <section>
      <h2>Parceiros e Clientes</h2>
      <p>
        Ao longo de quase três décadas, a JPM construiu uma sólida reputação de
        confiança, fornecendo para <strong>grandes empresas da indústria nacional</strong>,
        entre elas <strong>Usiminas</strong>, <strong>ArcelorMittal</strong>,
        <strong> Belgo Arames</strong>, <strong>Alvoar Lácteos</strong> e
        <strong> CSN (Companhia Siderúrgica Nacional)</strong>.
      </p>
      <p>
        Essas parcerias refletem o compromisso da JPM com
        <strong> qualidade, pontualidade e suporte técnico especializado</strong>,
        valores que sustentam sua presença constante em importantes cadeias
        produtivas dos setores <strong>siderúrgico, automotivo, alimentício e de mineração</strong>.
      </p>
    </section>

    <section>
      <h2>Compromisso</h2>
      <ul>
        <li>
          Fornecer <strong>soluções industriais completas</strong> que combinem
          estoque amplo, atendimento personalizado e agilidade logística.
        </li>
        <li>
          Garantir a <strong>máxima eficiência operacional</strong> e a
          <strong> confiabilidade</strong> nas operações de nossos clientes.
        </li>
        <li>
          Manter um relacionamento próximo e transparente, com foco em
          <strong>atendimento técnico especializado</strong>.
        </li>
      </ul>
    </section>

    <section>
      <h2>Dados institucionais</h2>
      <dl>
        <dt>Fundação</dt>
        <dd>24 de junho de 1997</dd>

        <dt>Endereço</dt>
        <dd>
          Rua Soares Nogueira, nº 10 – Bairro Camargos, Belo Horizonte, Minas Gerais
        </dd>

        <dt>CNPJ</dt>
        <dd>01.952.213/0001-86</dd>
      </dl>
    </section>
  </S.Container>
</PageSection>

    </>
  );
};
