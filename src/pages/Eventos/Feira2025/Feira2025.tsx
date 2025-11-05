import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageSection } from '../../../components/PageSection/PageSection';
import * as S from './Feira2025.syles';
import feira2025Banner from '../../../assets/images/eventos/2025/Banner-Pages-Feira2025.jpg';

//Lightbox com zoom ao clicar npm install yet-another-react-lightbox
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

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
    <PageSection
      title="Feira Industrial 2025"
      subTitle="Participação da empresa na maior feira do setor"
      image={feira2025Banner}
      bgColor="#E8B341"
    >
      <S.Container>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Em 2025, a empresa marcou presença na Feira Industrial Nacional,
          apresentando soluções em radiocomunicação e automação para diversos
          segmentos da indústria. Confira abaixo alguns momentos registrados
          durante o evento:
        </motion.p>

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
          slides={fotos2025.map((src) => ({ src }))}
          plugins={[Zoom]}
        />
      </S.Container>
    </PageSection>
  );
};
