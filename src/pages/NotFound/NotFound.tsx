import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';
import image from '../../assets/images/Banner-Pages-Erro404.png';

import * as S from './NotFound.styles';
import { PageSection } from '../../components/PageSection/PageSection';

export const NotFound = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // pequena animação de entrada via CSS transition
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageSection title="PÁGINA NÃO ENCONTRADA" image={image}>
      <S.Container>
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 overflow-hidden">
          <div
            className={`flex flex-col items-center transform transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
            }`}
          >
            <AlertTriangle size={56} className="text-red-500 w-20 h-20 mb-4" />
            <h1 >404</h1>
            <h1 >
              Página não encontrada
            </h1>
            <p>
              O endereço que você tentou acessar não existe ou foi movido.
              Verifique o link ou volte à página inicial.
            </p>

            <Link to="/">
              Voltar para a Home
            </Link>
          </div>
        </div>
      </S.Container>
    </PageSection>
  );
};
