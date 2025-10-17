
import { Button } from '../Button/Button';
import * as S from './CardProduct.styles';

type CardProdutoProps = {
  image: string;
  title: string;
  side?: 'left' | 'right'; // controla o formato arredondado
};

export const CardProduto = ({ image, title, side = 'left' }: CardProdutoProps) => {
  return (
    <S.Card side={side}>
      <img src={image} alt={title} />
      <S.Content>
        <h3>{title}</h3>
        <Button text='Ver mais' paddingHeight="small"  />
      </S.Content>
    </S.Card>
  );
};
