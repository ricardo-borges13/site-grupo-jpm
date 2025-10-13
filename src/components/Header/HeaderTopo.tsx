import * as S from './HeaderTopo.styles';
import { LiaPhoneAltSolid } from 'react-icons/lia';
import { AiOutlineMail } from 'react-icons/ai';

export type HeaderProps = {
  text: string;
  phone: string;
  email: string;
};

type HeaderTopoProps = {
  info: HeaderProps;
};

export const HeaderTopo = ({ info }: HeaderTopoProps) => {
  return (
    <S.Header>
      <S.Container>
        <div>
          <p>{info.text}</p>
        </div>
        <div>
          <LiaPhoneAltSolid />
          <p>{info.phone}</p>
        </div>
        <div>
          <AiOutlineMail />
          <p>{info.email}</p>
        </div>
      </S.Container>
    </S.Header>
  );
};
