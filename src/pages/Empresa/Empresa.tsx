import { PageSection } from "../../components/PageSection/PageSection"
import produtosImg from "../../assets/images/Banner-PagesA-Empresa.png";
import * as S from './Empresa.styles'



export const Empresa = () => {
    return(
      <PageSection title="A EMPRESA" image={produtosImg}>
      <S.Container>
      <header>
        <h1>Sobre o Grupo JPM</h1>
        <p>
          A <strong>JPM Borrachas e Materiais Elétricos</strong>, integrante do
          Grupo JPM, é especializada na revenda de insumos industriais diversos.
          Com sede em <strong>Belo Horizonte (MG)</strong>, atua desde{" "}
          <strong>1997</strong>, oferecendo soluções para múltiplos setores da
          indústria.
        </p>
      </header>

      <section>
        <h2>Áreas de atuação</h2>
        <p>Principais linhas e produtos comercializados:</p>
        <ul>
          <li>
            <strong>Materiais Elétricos:</strong> iluminação, reatores, cabos,
            painéis de comando e conexões industriais.
          </li>
          <li>
            <strong>Borrachas Industriais:</strong> correias, mangueiras,
            lençóis de borracha e plásticos industriais.
          </li>
          <li>
            <strong>Automação Industrial:</strong> módulos de interface, IHMs,
            fontes, CPUs, inversores, PLCs e outros dispositivos de automação.
          </li>
          <li>
            <strong>Acessórios de Manutenção:</strong> produtos para vedação,
            rodas, rodízios e outros itens de suporte à manutenção industrial.
          </li>
        </ul>
      </section>

      <section>
        <h2>Destaques</h2>
        <ul>
          <li>
            Atende diversos segmentos industriais com um portfólio bem diverso e
            especializado.
          </li>
          <li>
            Combina componentes elétricos, peças em borracha/plástico e soluções
            de automação — útil tanto para manutenção quanto para operações
            automatizadas.
          </li>
          <li>
            Sede e canal de comunicação claros, indicando boa presença local e
            foco em atendimento direto ao cliente.
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
            Rua Soares Nogueira, nº 10 – Bairro Camargos, Belo Horizonte, Minas
            Gerais
          </dd>

          <dt>Situação jurídica</dt>
          <dd>
            Empresa com estrutura jurídica ativa, capital social de R$
            250.000,00 e quadro societário formado por quatro sócios. Regime de
            tributação: lucro presumido.
          </dd>
        </dl>
      </section>
    </S.Container>

    </PageSection>






    )
}
