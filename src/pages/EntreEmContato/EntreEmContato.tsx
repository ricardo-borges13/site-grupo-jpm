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
          <h1>Fale Conosco</h1>
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
         <S.Container>
          <header>
          <h1>Localização</h1>
          <p>
           Nossa sede está localizada em um ponto de fácil acesso em
           Belo Horizonte. Venha nos visitar ou entre em contato pelos
           nossos canais de atendimento.
          </p>
        </header>

         </S.Container>
      <MapSection />
    </PageSection>
  );
};
