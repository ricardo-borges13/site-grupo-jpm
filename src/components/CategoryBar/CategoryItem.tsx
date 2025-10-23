import * as S from './CategoryBar.styles';
import type { ReactNode } from 'react';

type CatItemProps = {
  icon: ReactNode;
  label: string;
  path: string;
};

export const CategoryItem = ({ icon, label, path }: CatItemProps) => {
  return (
    <S.Item>
      <S.StyledLink to={path}>
        <S.Icon>{icon}</S.Icon>
        <S.Label>{label}</S.Label>
      </S.StyledLink>
    </S.Item>
  );
};
