import { CardProduto } from '../CardProduct/CardProduct';
import * as S from './ProductGroup.styles';

type ProductProps = {
  title: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
};

export const ProductGroup = ({
  title,
  image1,
  image2,
  image3,
  image4,
}: ProductProps) => {
  return (
    <S.wrapper>
      <h2>{title}</h2>
      <S.ImagesArea>
        <CardProduto image={image1} title="Materiais Elétricos" side="left" path='/produtos/eletricos' />
        <CardProduto image={image2} title="Borrachas" side="right" path='/produtos/borrachas' />
        <CardProduto image={image3} title="Automação Industrial" side="left" path='/produtos/automacao' />
        <CardProduto
          image={image4}
          title="Acessórios de Manutenção"
          side="right"
          path='/produtos/acessorios'
        />
      </S.ImagesArea>
    </S.wrapper>
  );
};
