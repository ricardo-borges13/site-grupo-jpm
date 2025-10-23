import * as S from './ProductCategory.styles';

type ProductCategoryProps = {
  image: string;
  title: string;
  items: string[];
};

export function ProductCategory({ image, title, items }: ProductCategoryProps) {
  return (
    <S.Card>
      <S.ImageWrapper>
        <img src={image} alt={title} />
      </S.ImageWrapper>
      <S.Content>
        <h3>{title}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </S.Content>
    </S.Card>
  );
}
