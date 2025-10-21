import * as S from './SectionInfo.styles';
import { Button } from '../Button/Button';

export type SectionInfoProps = {
  title: string;
  description: string;
  image1: string;
  image2?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export const SectionInfo = ({
  title,
  description,
  image1,
  image2,
  buttonText,
  onButtonClick,
}: SectionInfoProps) => {
  return (
    <S.Container>
      <S.TextArea>
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        {buttonText && (
          <Button onClick={onButtonClick} text={buttonText} variant="primary" />
        )}
      </S.TextArea>

      <S.ImagesArea>
        <img src={image1} alt="" />
        {image2 && <img src={image2} alt="" />}
      </S.ImagesArea>
    </S.Container>
  );
};
