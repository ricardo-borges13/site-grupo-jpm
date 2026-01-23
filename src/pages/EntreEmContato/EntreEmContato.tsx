import { PageSection } from '../../components/PageSection/PageSection';
import * as ST from './EntreEmContato.styles';
import image from '../../assets/images/Banner-PagesEntreContato.jpg';
import { SectionsContactus } from '../../components/SectionsContactUs/SectionsContactUs';

import { SEO } from '../../components/SEO/Seo';
import { contactData } from '../../components/Header';
import { SectionMap } from '../../components/SectionMap/SectionMap';

export const EntreEmContato = () => {
  return (
    <>
      <SEO
        title="Fale Conosco - JPM Borrachas e Materiais Elétricos"
        description="Entre em contato com a JPM. Solicite orçamentos, tire dúvidas e fale com nossa equipe de atendimento em Belo Horizonte."
        image="https://www.grupojpm.com.br/images/contato.jpg"
        url="https://www.grupojpm.com.br/contato"
        keywords="contato JPM, orçamento industrial, atendimento comercial, fale conosco"
      />

      <PageSection title="ENTRE EM CONTATO" image={image}>
        <ST.Container>
          <header>
            <h2>Envie sua Mensagem</h2>
            <p>
              Quer tirar dúvidas, solicitar um orçamento ou falar com nossa
              equipe? Preencha o formulário abaixo ou utilize um dos canais
              disponíveis. Teremos prazer em responder o mais breve possível.
            </p>
          </header>
        </ST.Container>

        <ST.Form>
          <SectionsContactus {...contactData} />
        </ST.Form>
        <ST.Divider />
        <SectionMap />
      </PageSection>
    </>
  );
};
