import Carousel from 'react-bootstrap/Carousel';
import video from '../../../public/videos/file.mp4';
import bannerEletrica from '../../assets/images/Banner-Eletrica-Borracha.png';
import banner3 from '../../assets/images/BannerPrincipal.jpg';
import { Link } from 'react-router-dom';
import * as S from './Carousel.styles';

export function CarouselComponent() {
  return (
    <Carousel interval={8000} fade>
      {/* --- SLIDE 1 --- */}

      <Carousel.Item>
        <Link to="/contato">
          <img
            className="d-block w-100"
            src={banner3}
            alt="Terceiro Slide"
            style={{ objectFit: 'cover', height: '410px' }}
          />
          <Carousel.Caption>
            <S.Caption3>
              <h4>Entre em Contato</h4>
            </S.Caption3>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      {/* --- SLIDE 2 COM VÍDEO --- */}
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

        <Carousel.Caption>
          <S.Caption1>
            <h1>Sua Indústria Conectada à Experiência JPM</h1>
            <h4>
              Há mais de 25 anos fornecendo soluções completas em materiais
              elétricos e borrachas industriais.
            </h4>
          </S.Caption1>
        </Carousel.Caption>
      </Carousel.Item>

      {/* --- SLIDE 3 --- */}

      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={bannerEletrica}
          alt="Segundo Slide"
          style={{ objectFit: 'cover', height: '410px' }}
        />
        <Carousel.Caption>
          <S.Caption2>
            <h1>Suprimentos Industriais</h1>
            <h4>Borrachas & Materiais Elétricos.</h4>
          </S.Caption2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
