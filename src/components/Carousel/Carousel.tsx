import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import video from '../../../public/videos/file.mp4';
import banner3 from '../../assets/images/BannerPrincipal-EmBranco.jpg';
import bannerEletrica from '../../assets/images/Banner-Eletrica-Borracha.jpg';
import * as S from './Carousel.styles';

export function CarouselComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 490);
    handleResize(); // executa uma vez ao montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Carousel interval={8000} fade>
      {/* --- SLIDE 1 --- */}
      {!isMobile && (
        <Carousel.Item>
          <Link to="/contato">
            <img
              className="d-block w-100"
              src={banner3}
              alt="Primeiro Slide"
              style={{ objectFit: 'cover', height: '410px' }}
            />
            <S.Caption1>
              <h1>Soluções que impulsionam a indústria brasileira</h1>
              <h3>
                Especialista em borrachas e materiais elétricos sob medida para
                sua empresa
              </h3>
              <h4>Entre em Contato</h4>
            </S.Caption1>
          </Link>
        </Carousel.Item>
      )}

      {/* --- SLIDE 2 (vídeo) — sempre aparece --- */}
      <Carousel.Item interval={10000}>
        <video
          className="d-block w-100"
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: 'cover', height: '410px' }}
        >
          <source src={video} type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>

        <S.Caption2>
          <h1>
            {isMobile
              ? 'Soluções JPM'
              : 'Sua Indústria Conectada à Experiência JPM'}
          </h1>
          <h4>
            {isMobile
              ? 'Mais de 25 anos em soluções elétricas e borrachas industriais'
              : 'Há mais de 25 anos fornecendo soluções completas em materiais elétricos e borrachas industriais.'}
          </h4>
        </S.Caption2>
      </Carousel.Item>

      {/* --- SLIDE 3 --- */}
      {!isMobile && (
        <Carousel.Item interval={8000}>
          <img
            className="d-block w-100"
            src={bannerEletrica}
            alt="Terceiro Slide"
            style={{ objectFit: 'cover', height: '410px' }}
          />
          <S.Caption3>
            <h1>Suprimentos Industriais</h1>
            <h4>Borrachas & Materiais Elétricos.</h4>
          </S.Caption3>
        </Carousel.Item>
      )}
    </Carousel>
  );
}
