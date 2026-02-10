import { FormContact } from '../FormContact/FormContact';
import * as S from './SectionContactUs.styles';
import { MdEmail } from 'react-icons/md';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import type { ContactInfo } from '../../types/contact';
import { MotionReveal } from '../Motion/MotionReveal/MotionReveal';

export const SectionsContactus = ({ phone, phone2, email }: ContactInfo) => {
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`;
  const phoneHref2 = `tel:${phone2.replace(/[^\d+]/g, '')}`;
  const emailHref = `mailto:${email}`;
  return (
    <S.Container>
      <S.Content>
        <S.InfoArea>
          <MotionReveal delay={0.2}>
          <h2>Fale Conosco</h2>
          <p>Ficou com alguma dúvida?</p>
          <p> Entre em contato conosco</p>
          <FaArrowAltCircleRight size={28} />
          </MotionReveal>
          <div className="contact">
             <MotionReveal delay={0.6}>
            <p>
              <FaPhone />
              <a href={phoneHref}>{phone}</a>
            </p>
            <p>
              <FaPhone />
              <a href={phoneHref2}>{phone2}</a>
            </p>
            <p>
              <MdEmail />
              <a href={emailHref}>{email}</a>
            </p>
            </MotionReveal>
          </div>
        </S.InfoArea>

        <S.FormWrapper>
          <FormContact />
        </S.FormWrapper>
      </S.Content>
    </S.Container>
  );
};
