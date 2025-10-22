import { motion } from 'framer-motion';
import * as S from './PageSection.stles';

export type PageSectionProps = {
  title: string;
  image: string;
  bgColor?: string;
  children?: React.ReactNode;
};

export const PageSection = ({
  title,
  image,
  bgColor = '#E8B341',
  children,
}: PageSectionProps) => {
  return (
    <>
      <S.SectionWrapper>
        {/* --- Lado esquerdo com título --- */}
        <S.Left bgColor={bgColor}>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 2.5, // mais tempo = mais lento
              ease: 'easeOut', // suaviza o final
              delay: 0.5,
            }}
          >
            {title}
          </motion.h1>
        </S.Left>

        {/* --- Lado direito com imagem animada --- */}
        <S.Right>
          <motion.img
            src={image}
            alt={title}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 60,
              damping: 18,
              delay: 0.2, // entra logo depois do título
            }}
          />
        </S.Right>
      </S.SectionWrapper>

      {/* --- Conteúdo abaixo (children) com fade-up --- */}
      {children && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 18,
            delay: 0.3,
          }}
        >
          <S.Content>{children}</S.Content>
        </motion.div>
      )}
    </>
  );
};
