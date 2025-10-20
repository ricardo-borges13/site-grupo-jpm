import Carousel from 'react-bootstrap/Carousel';
import video from '../../../public/videos/file.mp4';
import banner1 from '../../assets/images/BannerJPM1.jpg'
import * as S from './Carousel.styles'

export function CarouselComponent() {
  return (
    <Carousel fade>
      {/* --- SLIDE 1 COM VÍDEO --- */}
      <Carousel.Item>
        <video
          className="d-block w-100"
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: 'cover', height: '390px' }}
        >
          <source src={video} type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>

        <Carousel.Caption>
          <S.Caption>
          <h1>Suprimentos Industriais</h1>
          <h4>Borrachas & Materiais Elétricos.</h4>
          </S.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      {/* --- SLIDE 2 --- */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Segundo Slide"
        />
        <Carousel.Caption>
          <h3>Segundo Slide</h3>
          <p>Texto opcional do segundo slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* --- SLIDE 3 --- */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/678/1200/400"
          alt="Terceiro Slide"
        />
        <Carousel.Caption>
          <h3>Terceiro Slide</h3>
          <p>Texto opcional do terceiro slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



// import Carousel from 'react-bootstrap/Carousel';

// export function CarouselComponent() {
//   return (
//        <Carousel fade>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://picsum.photos/id/123/1200/400"
//           alt="Primeiro Slide"
//         />
//         <Carousel.Caption>
//           <h3>Primeiro Slide</h3>
//           <p>Texto opcional do primeiro slide.</p>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://picsum.photos/id/456/1200/400"
//           alt="Segundo Slide"
//         />
//         <Carousel.Caption>
//           <h3>Segundo Slide</h3>
//           <p>Texto opcional do segundo slide.</p>
//         </Carousel.Caption>
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://picsum.photos/id/678/1200/400"
//           alt="Terceiro Slide"
//         />
//         <Carousel.Caption>
//           <h3>Terceiro Slide</h3>
//           <p>Texto opcional do terceiro slide.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// export function CarouselComponent() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex: number) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img src="https://picsum.photos/id/678/1200/400" alt="" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src="https://picsum.photos/id/123/1200/400" alt="" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src="https://picsum.photos/id/456/1200/400" alt="" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }
