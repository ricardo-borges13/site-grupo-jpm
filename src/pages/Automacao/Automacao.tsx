import { PageSection } from '../../components/PageSection/PageSection';
import * as S from './Automacao.styles';
import image from '../../assets/images/Banner-PagesAutomacao.png';
import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';

export const Automacao = () => {
  return (
    <PageSection
      title="AUTOMAÇÃO"
      subTitle="Soluções em controle, desempenho e integração de sistemas industriais"
      image={image}
    >
      <S.Container>
        <header>
          <h2>Automação Industrial</h2>
          <p>
            A automação é o caminho para aumentar a produtividade, reduzir
            custos e garantir mais segurança nos processos industriais.
          </p>
          <p>
            A JPM oferece uma linha completa de{' '}
            <strong>Automação Industrial</strong>, com equipamentos de alto
            desempenho como{' '}
            <strong>
              {' '}
              módulos de expansão, interfaces, IHMs, fontes de alimentação,
              cartões de memória, CPUs, inversores, chaves de partida, PLCs e
              acionamentos.
            </strong>
          </p>
          <p>
            Nossos produtos são projetados para proporcionar{' '}
            <strong>
              {' '}
              confiabilidade, precisão e facilidade de integração
            </strong>
            , assegurando que sua operação alcance o máximo desempenho com o
            suporte e a qualidade que só a JPM oferece.
          </p>

          <h3>Aplicações da Automação</h3>
          <ul>
            <li>Controle de processos industriais</li>
            <li>Automação de linhas de montagem</li>
            <li>Monitoramento de máquinas e sensores</li>
            <li>Integração com sistemas supervisórios</li>
          </ul>
        </header>
      </S.Container>
      <SectionsContactus />
    </PageSection>
  );
};
