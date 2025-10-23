import { FormContact } from '../FormContact/FormContact';
import * as S from './SectionContactUs.styles';
import { MdEmail } from 'react-icons/md';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

export const SectionsContactus = () => {
  return (
    <S.Container>
      <S.Content>
        <S.InfoArea>
          <h2>Fale Conosco</h2>
          <p>Ficou com alguma dúvida?</p>
          <p> Entre em contato conosco</p>
          <FaArrowAltCircleRight size={28} />
          <div className="contact">
            <p>
              <FaPhone /> (31) 3292-4650
            </p>
            <p>
              <MdEmail /> sac@grupojpm.com.br
            </p>
          </div>
        </S.InfoArea>

        <S.FormWrapper>
          <FormContact />
        </S.FormWrapper>
      </S.Content>
    </S.Container>
  );
};
