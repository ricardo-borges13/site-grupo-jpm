import { PageSection } from '../../components/PageSection/PageSection';
import * as S from './EntreEmContato.styles';
import image from '../../assets/images/Banner-EntreContato.png';
import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';
import { MapSection } from '../../components/MapaSection/MapSecion';

export const EntreEmContato = () => {
  return (
    <PageSection title="ENTRE EM CONTATO" image={image}>
      <S.Container>
        <header>
          <h2>Envie sua mensagem</h2>
          <p>
            Quer tirar dúvidas, solicitar um orçamento ou falar com nossa
            equipe? Preencha o formulário abaixo ou utilize um dos canais
            disponíveis. Teremos prazer em responder o mais breve possível.
          </p>
        </header>
      </S.Container>

      <S.Form>
        <SectionsContactus />
      </S.Form>
      <S.Divider />
      <S.Container>
        <header>
          <h1>Localização</h1>
          <p>
            Nossa sede está situada em um ponto de fácil acesso em Belo
            Horizonte. Venha nos visitar ou entre em contato por um de nossos
            canais de atendimento.
          </p>
        </header>
      </S.Container>
      <MapSection />
    </PageSection>
  );
};
