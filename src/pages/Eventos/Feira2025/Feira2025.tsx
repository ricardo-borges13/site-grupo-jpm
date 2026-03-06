import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageSection } from '../../../components/PageSection/PageSection';
import * as S from './Feira2025.syles';
import feira2025Banner from '../../../assets/images/eventos/2025/Banner-Pages-Feira2025.jpg';

//Lightbox com zoom ao clicar npm install yet-another-react-lightbox
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { SEO } from '../../../components/SEO/Seo';

// 🔹 Carrega automaticamente todas as imagens da pasta 2025 (exceto o banner)
// a imagem tem que iniciar com o nome foto-Evento-(numero).jpg
const imagens = import.meta.glob<string>(
  '../../../assets/images/eventos/2025/foto-Evento-*.jpg',
  { eager: true, import: 'default' }
);

// 🔹 Cria um array com as imagens (ordenadas por nome)
const fotos2025: string[] = Object.values(imagens).sort();

export const Feira2025 = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <SEO
        title="Expo Usipa 2025 - Participação da JPM Borrachas e Materiais Elétricos"
        description="A JPM marcou presença na 35ª Expo Usipa, uma das maiores feiras industriais de Minas Gerais, apresentando soluções em materiais elétricos, borrachas e automação para diversos segmentos da indústria."
        image="https://www.grupojpm.com.br/images/expo-usipa-2025.jpg"
        url="https://www.grupojpm.com.br/eventos/expousipa-2025"
        keywords="Expo Usipa 2025, feira industrial Ipatinga, JPM, materiais elétricos, borrachas industriais, automação industrial, feira Minas Gerais, indústria, networking empresarial"
        noindex={false}
        nofollow={false}
      />

      <PageSection
        title="EXPO USIPA 2025"
        subTitle="Conectando indústrias com soluções em materiais elétricos e borrachas industriais"
        image={feira2025Banner}
        bgColor="#E8B341"
      >
        <S.Container>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <header>
              <h1>Participação da JPM na 35ª Expo Usipa</h1>

              <p>
                Em julho de 2025, a{' '}
                <strong>JPM Borrachas & Materiais Elétricos</strong> marcou
                presença na
                <strong> 35ª edição da Expo Usipa</strong>, uma das maiores
                feiras industriais do interior de Minas Gerais, realizada em{' '}
                <strong>Ipatinga (MG)</strong>. O evento reuniu milhares de
                visitantes e mais de 300 expositores, consolidando-se como um
                dos principais espaços de negócios, inovação e relacionamento
                entre{' '}
                <strong>
                  indústrias, fornecedores e prestadores de serviços
                </strong>
                .
              </p>

              <p>
                Durante os três dias de feira, a JPM apresentou seu amplo
                portfólio de
                <strong>
                  {' '}
                  materiais elétricos, borrachas técnicas, mangueiras, correias
                  e plásticos industriais
                </strong>
                , produtos que contribuem para o{' '}
                <strong>
                  desempenho, a segurança e a eficiência operacional
                </strong>{' '}
                de diversos segmentos da indústria.
              </p>

              <p>
                A participação da empresa reforçou seu compromisso em{' '}
                <strong>oferecer soluções completas e de qualidade </strong>
                para manutenção e automação industrial, além de fortalecer
                parcerias com clientes e fornecedores de toda a região.
              </p>

              <p>
                A <strong>Expo Usipa</strong> se destacou também por suas
                <strong>
                  {' '}
                  rodadas de negócios, palestras técnicas e networking
                  empresarial
                </strong>
                , que movimentaram o setor produtivo e impulsionaram novas
                oportunidades de crescimento para a economia do Vale do Aço.
              </p>
            </header>
          </motion.div>

          {/* --- GALERIA DE FOTOS --- */}
          <S.Gallery>
            {fotos2025.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Foto ${i + 1} da feira 2025`}
                loading="lazy"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              />
            ))}
          </S.Gallery>

          {/* --- LIGHTBOX COM ZOOM --- */}
          <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={fotos2025.map(src => ({ src }))}
            plugins={[Zoom]}
          />

          <S.Divider />

          {/* --- TEXTO INTRODUTÓRIO DO VÍDEO --- */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ textAlign: 'center', marginTop: '2rem' }}
          >
            Confira também o registro em vídeo da participação da JPM na Expo
            Usipa 2025, destacando os principais momentos da feira e a presença
            da empresa no evento.
          </motion.div>

          <S.VideoWrapper>
            <iframe
              loading="lazy"
              src="https://www.instagram.com/reel/DO6YOn6jbz3/embed"
              width="100%"
              height="720"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
              title="Vídeo Expo Usipa 2025 - JPM"
            ></iframe>
          </S.VideoWrapper>
        </S.Container>
      </PageSection>
    </>
  );
};
