
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import * as S from './CardProduct.styles';

type CardProdutoProps = {
  image: string;
  title: string;
  path: string;
  side?: 'left' | 'right'; // controla o formato arredondado
};

export const CardProduto = ({ image, title, path, side = 'left' }: CardProdutoProps) => {
  const navigate = useNavigate();
  return (
    <S.Card side={side}>
      <img src={image} alt={title} />
      <S.Content>
        <h3>{title}</h3>
        <Button text='Ver mais' paddingHeight="small" onClick={() => navigate(`${path}`)} />
      </S.Content>
    </S.Card>
  );
};
