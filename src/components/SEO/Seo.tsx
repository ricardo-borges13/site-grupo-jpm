import { Title, Meta } from 'react-head';

type SEOProps = {
  title: string;
  description: string;
};

export const SEO = ({ title, description }: SEOProps) => (
  <>
    <Title>{title}</Title>
    <Meta name="description" content={description} />
  </>
);
