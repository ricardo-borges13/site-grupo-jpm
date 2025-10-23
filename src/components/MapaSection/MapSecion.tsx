import * as S from './MapSection.styles';

export function MapSection() {
  return (
    <S.Container>
      <S.MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4615.034071868553!2d-44.0275298!3d-19.9399544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695ddfc04acf5%3A0x96f561304947f411!2sR.%20Soares%20Nogueira%2C%2010%20-%20Camargos%2C%20Belo%20Horizonte%20-%20MG%2C%2030520-330!5e1!3m2!1spt-BR!2sbr!4v1761091685265!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa da empresa"
        />
      </S.MapWrapper>
    </S.Container>
  );
}
