
import Carousel from 'react-bootstrap/Carousel';

export function CarouselComponent() {
  return (
       <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/123/1200/400"
          alt="Primeiro Slide"
        />
        <Carousel.Caption>
          <h3>Primeiro Slide</h3>
          <p>Texto opcional do primeiro slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/456/1200/400"
          alt="Segundo Slide"
        />
        <Carousel.Caption>
          <h3>Segundo Slide</h3>
          <p>Texto opcional do segundo slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

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
