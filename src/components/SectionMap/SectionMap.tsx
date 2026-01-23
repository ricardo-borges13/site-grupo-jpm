import * as S from './SectionMap.styles';
import { Map } from '../Map/Map';
import { MapPin } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4615.034071868553!2d-44.0275298!3d-19.9399544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695ddfc04acf5%3A0x96f561304947f411!2sR.%20Soares%20Nogueira%2C%2010%20-%20Camargos%2C%20Belo%20Horizonte%20-%20MG%2C%2030520-330!5e1!3m2!1spt-BR!2sbr!4v1761091685265!5m2!1spt-BR!2sbr';
export const SectionMap = () => (
  <S.Container>
    <header>
      <h2>Localização</h2>
      <p>
        Nossa sede está situada em um ponto de fácil acesso em Belo Horizonte.
        Venha nos visitar ou entre em contato por um de nossos canais de
        atendimento.
      </p>
    </header>

    <Map src={MAP_SRC} />
    <a
      href="https://maps.app.goo.gl/2YxC9MiYygGzm2zR6"
      target="_blank"
      rel="noopener noreferrer"
      className="map-link"
    >
      <MapPin size={16} />
      Ver rotas no Google Maps
      <ArrowRight size={14} />
    </a>
  </S.Container>
);
