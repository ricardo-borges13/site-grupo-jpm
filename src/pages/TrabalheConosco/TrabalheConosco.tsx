import { PageSection } from '../../components/PageSection/PageSection';
import * as S from './TrabalheConosco.styles';
import image from '../../assets/images/Banner-TrabalheConosco.png';
import { SEO } from '../../components/SEO/Seo';

const TrabalheConosco = () => {
  return (
    <>
      <SEO
        title="Trabalhe Conosco - GRUPO JPM Borrachas e Materiais Elétricos"
        description="Faça parte do Grupo JPM! Envie seu currículo e junte-se a uma equipe com mais de 25 anos de experiência em soluções industriais e compromisso com a excelência."
      />

      <PageSection title="TRABALHE CONOSCO" image={image}>
        <S.Container>
          <header>
            <h1>Trabalhe Conosco</h1>
            <p>
              Seja bem-vindo(a) à página de oportunidades do{' '}
              <strong>Grupo JPM</strong>! Desde 1997 atuando com excelência no
              fornecimento de insumos industriais e soluções integradas,
              conectamos materiais elétricos, componentes em borracha / plástico
              e automação industrial. Com sede em
              <strong> Belo Horizonte (MG)</strong>, estamos comprometidos com a
              inovação, a qualidade no atendimento e o desenvolvimento dos
              nossos times.
            </p>
          </header>

          <section>
            <h2>Por que trabalhar conosco</h2>
            <ul>
              <li>
                <strong>Histórico sólido:</strong> mais de 25 anos no mercado
                industrial, com estrutura jurídica e reputação consolidadas.
              </li>
              <li>
                <strong>Portfólio diversificado:</strong> atuamos em manutenção
                industrial, processos automatizados e fornecimento de
                componentes elétricos e de borracha, proporcionando desafios e
                oportunidades de crescimento.
              </li>
              <li>
                <strong>Cultura de equipe:</strong> valorizamos o trabalho
                colaborativo, o respeito pelas pessoas e a construção contínua
                de conhecimento. Cada colaborador faz a diferença.
              </li>
              <li>
                <strong>Localização estratégica:</strong> nossa sede está em
                Belo Horizonte (MG), no bairro Camargos — de fácil acesso para
                quem reside ou deseja atuar na região.
              </li>
            </ul>
          </section>

          <section>
            <h2>O que buscamos</h2>
            <p>
              Procuramos profissionais que se identifiquem com a missão e os
              valores do
              <strong> Grupo JPM</strong> e que estejam dispostos a contribuir
              para:
            </p>
            <ul>
              <li>atender segmentos industriais exigentes com excelência;</li>
              <li>
                oferecer soluções integradas que envolvem elétrica,
                borracha/plástico e automação;
              </li>
              <li>
                participar de processos de melhoria contínua, inovação e
                atendimento ágil ao cliente.
              </li>
            </ul>
          </section>

          <section>
            <h2>Como se candidatar</h2>
            <p>
              Envie seu currículo atualizado para
              <strong> sac@grupojpm.com.br</strong> com o assunto
              <em>“Trabalhe no Grupo JPM”</em>, informando:
            </p>
            <ul>
              <li>Nome completo</li>
              <li>Área ou função de interesse</li>
              <li>Breve descrição do seu perfil e experiência</li>
              <li>Disponibilidade de início ou localidade</li>
            </ul>
            <p>
              Após a análise e havendo uma vaga disponível, entraremos em
              contato para as próximas etapas do processo.
            </p>
          </section>

          <section>
            <h2>Nossa promessa a você</h2>
            <p>
              No <strong>Grupo JPM</strong>, você encontrará um ambiente onde o
              desenvolvimento profissional é estimulado, o trabalho tem impacto
              e cada conquista é valorizada. Queremos que você cresça junto com
              a gente.
            </p>
          </section>
        </S.Container>
      </PageSection>
    </>
  );
};

export default TrabalheConosco;
