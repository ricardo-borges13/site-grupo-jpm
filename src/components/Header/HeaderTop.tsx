import * as S from './HeaderTopo.styles';
import { LiaPhoneAltSolid } from 'react-icons/lia';
import { AiOutlineMail } from 'react-icons/ai';
import type { ContactInfo } from '../../types/contact'



export const HeaderTop = ({ text, phone, email }: ContactInfo) => {
  return (
    <S.Header>
      <S.Container>
        <div>{text}</div>
        <div>
          <LiaPhoneAltSolid />
          <a href="tel:+553132924650"> {phone} </a>
        </div>
        <div>
          <AiOutlineMail />
          <a href="mailto:sac@grupojpm.com.br">{email}</a>
        </div>
      </S.Container>
    </S.Header>
  );
};
