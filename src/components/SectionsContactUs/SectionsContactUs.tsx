import { FormContact } from '../FormContact/FormContact';
import * as S from './SectionContactUs.styles';
import { MdEmail } from 'react-icons/md';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import type { ContactInfo } from "../../types/contact";


export const SectionsContactus = ({phone,email}:ContactInfo) => {
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
              <FaPhone />
              <a href="tel:+553132924650"> {phone} </a>
            </p>
            <p>
              <MdEmail />
              <a href="mailto:sac@grupojpm.com.br">{email}</a>
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
