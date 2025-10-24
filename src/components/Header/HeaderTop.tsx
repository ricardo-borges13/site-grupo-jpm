import * as S from './HeaderTopo.styles';
import { LiaPhoneAltSolid } from 'react-icons/lia';
import { AiOutlineMail } from 'react-icons/ai';

export type HeaderProps = {
  text: string;
  phone: string;
  email: string;
};

export const HeaderTop = ({ text, phone, email }: HeaderProps) => {
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
