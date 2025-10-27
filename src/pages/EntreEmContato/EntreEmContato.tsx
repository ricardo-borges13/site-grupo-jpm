import { PageSection } from '../../components/PageSection/PageSection';
import * as ST from './EntreEmContato.styles';
import image from '../../assets/images/Banner-PagesEntreContato.jpg';
import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';
import { MapSection } from '../../components/MapaSection/MapSecion';
import { SEO } from '../../components/SEO/Seo';

 export const EntreEmContato = () => {
  return (
    <>
      <SEO
        title="Fale Conosco - JPM Borrachas e Materiais Elétricos"
        description="Entre em contato com a JPM. Solicite orçamentos, tire dúvidas e fale com nossa equipe de atendimento em Belo Horizonte."
      />

      <PageSection title="ENTRE EM CONTATO" image={image}>
        <ST.Container>
          <header>
            <h2>Envie sua mensagem</h2>
            <p>
              Quer tirar dúvidas, solicitar um orçamento ou falar com nossa
              equipe? Preencha o formulário abaixo ou utilize um dos canais
              disponíveis. Teremos prazer em responder o mais breve possível.
            </p>
          </header>
        </ST.Container>

        <ST.Form>
          <SectionsContactus />
        </ST.Form>
        <ST.Divider />
        <ST.Container>
          <header>
            <h1>Localização</h1>
            <p>
              Nossa sede está situada em um ponto de fácil acesso em Belo
              Horizonte. Venha nos visitar ou entre em contato por um de nossos
              canais de atendimento.
            </p>
          </header>
        </ST.Container>
        <MapSection />
      </PageSection>
    </>
  );
};


