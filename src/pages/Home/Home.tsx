import { CarouselComponent } from '../../components/Carousel/Corousel';
import { CategoryBar } from '../../components/CategoryBar/CategoryBar';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="global-container">
        <CarouselComponent />
      </div>    
        <CategoryBar /> 

      <Button
        text="Clientes"
        onClick={() => navigate('/clientes')}
        variant="primary"
      />
    </div>
  );
};
