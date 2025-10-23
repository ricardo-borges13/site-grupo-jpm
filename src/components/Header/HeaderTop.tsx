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
          {phone}
        </div>
        <div>
          <AiOutlineMail />
          {email}
        </div>
      </S.Container>
    </S.Header>
  );
};
