import { Title, Meta, Link } from 'react-head';

type SEOProps = {
  title: string;
  description: string;
  image?: string; // para Open Graph e compartilhamento
  url?: string; // URL da página atual
  keywords?: string; // opcional, ajuda no SEO on-page
  noindex?: boolean;
  nofollow?: boolean;
};

export const SEO = ({
  title,
  description,
  image = 'https://www.grupojpm.com.br/og-banner.jpg',
  url = 'https://www.grupojpm.com.br/',
  keywords,
  noindex,
  nofollow,
}: SEOProps) => (
  <>
    {/* Título e descrição principais */}
    <Title>{title}</Title>
    <Meta name="description" content={description} key="desc" />
    {keywords && <Meta name="keywords" content={keywords} key="keywords" />}

    {/* Canonical */}
    <Link rel="canonical" href={url} key="canonical" />

    {/* Open Graph (Facebook / WhatsApp / LinkedIn) */}
   <Meta property="og:type" content="website" key="og:type" />
    <Meta property="og:title" content={title} key="og:title" />
    <Meta property="og:description" content={description} key="og:desc" />
    <Meta property="og:image" content={image} key="og:image" />
    <Meta property="og:url" content={url} key="og:url" />
    <Meta property="og:locale" content="pt_BR" key="og:locale" />

    {/* Twitter Card (mantém compatibilidade com outras redes) */}
    <Meta name="twitter:card" content="summary_large_image" key="tw:card" />
    <Meta name="twitter:title" content={title} key="tw:title" />
    <Meta name="twitter:description" content={description} key="tw:desc" />
    <Meta name="twitter:image" content={image} key="tw:image" />

    {/* Robots (SEO flags) */}
    {(noindex || nofollow) && (
      <Meta
        name="robots"
        content={`${noindex ? 'noindex' : ''}${noindex && nofollow ? ', ' : ''}${nofollow ? 'nofollow' : ''}`}
        key="robots"
      />
    )}
  </>
);
