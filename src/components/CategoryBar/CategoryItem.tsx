import * as S from "./CategoryBar.styles";
import type { ReactNode } from "react";  

type CatItemProps = {
    icon: ReactNode;
    label: string;
}

export const CategoryItem = ({icon,label}: CatItemProps) => {
    return(
        <S.Item>
            <S.Icon>{icon}</S.Icon>
            <S.Label>{label}</S.Label>
        </S.Item>
    )
}