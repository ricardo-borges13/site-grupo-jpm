import * as S from './HeaderTopo.styles';
import { LiaPhoneAltSolid } from 'react-icons/lia';
import { AiOutlineMail } from 'react-icons/ai';

export type HeaderProps = {
  text: string;
  phone: string;
  email: string;
};


export const HeaderTop = ( {text, phone, email} : HeaderProps) => {
  return (
    <S.Header>
      <S.Container>
        <div>
          <p>{text}</p>
        </div>
        <div>
          <LiaPhoneAltSolid />
          <p>{phone}</p>
        </div>
        <div>
          <AiOutlineMail />
          <p>{email}</p>
        </div>
      </S.Container>
    </S.Header>
  );
};
