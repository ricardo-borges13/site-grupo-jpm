import * as S from './HeaderTopo.styles';
import { LiaPhoneAltSolid } from 'react-icons/lia';
import { AiOutlineMail } from 'react-icons/ai';
import type { ContactInfo } from '../../types/contact';

export const HeaderTop = ({ text, phone, phone2, email }: ContactInfo) => {
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`;
  const phoneHref2 = `tel:${phone2.replace(/[^\d+]/g, '')}`;
  const emailHref = `mailto:${email}`;
  return (
    <S.Header>
      <S.Container>
        <div>{text}</div>
        <div>
          <LiaPhoneAltSolid />
          <a href={phoneHref}>{phone}</a>
        </div>
        <span>/</span>
        <div>
          <LiaPhoneAltSolid />
          <a href={phoneHref2}>{phone2}</a>
        </div>
        <div>
          <AiOutlineMail />
          <a href={emailHref}>{email}</a>
        </div>
      </S.Container>
    </S.Header>
  );
};
