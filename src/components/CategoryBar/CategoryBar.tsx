import * as S from './CategoryBar.styles';
import { FaPlug, FaTools } from 'react-icons/fa';
import { GiTrafficCone } from 'react-icons/gi';
import { MdOutlineSensors } from 'react-icons/md';
import { CategoryItem } from './CategoryItem';

export const CategoryBar = () => {
  return (
    <S.Container className="containerPrincipal">
      <S.Inner>
        <CategoryItem icon={<FaPlug />} label="Materiais Elétricos" path='/produtos/eletricos'/>
        <S.Divider />
        <CategoryItem icon={<GiTrafficCone />} label="Borrachas Industriais" path='/produtos/borrachas' />
        <S.Divider />
        <CategoryItem icon={<MdOutlineSensors />} label="Automação" path='/produtos/automacao' />
        <S.Divider />
        <CategoryItem icon={<FaTools />} label="Acessórios de Manutenção" path='/produtos/acessorios' />
      </S.Inner>
    </S.Container>
  );
};
