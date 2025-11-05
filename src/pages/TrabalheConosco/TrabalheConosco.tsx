import { PageSection } from '../../components/PageSection/PageSection';
import * as S from './TrabalheConosco.styles';
import image from '../../assets/images/Banner-TrabalheConosco.jpg';
import { SEO } from '../../components/SEO/Seo';

export const TrabalheConosco = () => {
  return (
    <>
      <SEO
        title="Trabalhe Conosco - JPM Borrachas e Materiais Elétricos"
        description="Faça parte da JPM! Envie seu currículo e junte-se a uma equipe com mais de 25 anos de experiência em soluções industriais e compromisso com a excelência."
        image="https://www.grupojpm.com.br/images/trabalhe-conosco.jpg"
        url="https://www.grupojpm.com.br/trabalheconosco"
        keywords="vagas JPM, trabalhar na JPM, envio de currículo, oportunidades"
      />

      <PageSection title="TRABALHE CONOSCO" image={image}>
        <S.Container>
          <header>
            <h1>Faça parte da nossa equipe</h1>
            <p>
              Seja bem-vindo(a) à página de oportunidades da{' '}
              <strong>JPM</strong>! Desde 1997, atuamos com excelência no
              fornecimento de insumos industriais e soluções integradas,
              conectando materiais elétricos, componentes em borracha/plástico e
              automação industrial. Com sede em{' '}
              <strong>Belo Horizonte (MG)</strong>, mantemos o compromisso com a
              inovação, a qualidade no atendimento e o desenvolvimento contínuo
              dos nossos times.
            </p>
          </header>

          <section>
            <h2>Por que trabalhar conosco</h2>
            <ul>
              <li>
                <strong>Histórico sólido:</strong> mais de 25 anos de atuação no
                mercado industrial, com estrutura consolidada e reputação de
                confiança.
              </li>
              <li>
                <strong>Portfólio diversificado:</strong> trabalhamos com
                manutenção industrial, processos automatizados e fornecimento de
                componentes elétricos e de borracha, criando oportunidades
                constantes de aprendizado e crescimento profissional.
              </li>
              <li>
                <strong>Cultura de equipe:</strong> valorizamos o trabalho
                colaborativo, o respeito pelas pessoas e o compartilhamento de
                conhecimento. Cada colaborador é parte essencial do nosso
                sucesso.
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
              valores da <strong>JPM</strong> e que estejam dispostos a
              contribuir para:
            </p>
            <ul>
              <li>atender segmentos industriais exigentes com excelência;</li>
              <li>
                oferecer soluções integradas em elétrica, borracha/plástico e
                automação;
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
              <em> “Trabalhe na JPM”</em>, informando:
            </p>
            <ul>
              <li>Nome completo</li>
              <li>Área ou função de interesse</li>
              <li>Breve descrição do seu perfil e experiência</li>
              <li>Disponibilidade de início e localidade</li>
            </ul>
            <p>
              Após análise, e havendo uma vaga compatível, entraremos em contato
              para as próximas etapas do processo.
            </p>
          </section>

          <section>
            <h2>Nossa promessa a você</h2>
            <p>
              Na <strong>JPM</strong>, você encontrará um ambiente onde o
              <strong> desenvolvimento profissional</strong> é estimulado, o
              trabalho tem impacto real e cada conquista é reconhecida. Queremos
              que você cresça junto com a gente.
            </p>
          </section>
        </S.Container>
      </PageSection>
    </>
  );
};
