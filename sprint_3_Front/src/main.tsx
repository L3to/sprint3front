import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import Error from './routes/Error/index.tsx';
import Home from './routes/Home/index.tsx';
import NossaEquipe from './routes/NossaEquipe/index.tsx';

const routes = createBrowserRouter([
  // {(este atributo representa a raiz do projeto o qual deve ser marcado como /, pois vamos associar com o componente principal da aplicação que vai integrar todos os demais componentes)path:"/",(este atributo deve receber a declaração do componente em si)element:<App/>,(Aqui devemos colocar o componente que será carregado caso seja digitada uma rota incorreta/inexistente abaixo)errorElement:<Error/>,(Aqui de fato vamos criar o array de objetos com dois atributos onde, vamos associar os componentes de rotas que foram criados.)children:[ {path:"/",element:<Home/>},{...}]}
  {
    path: "/", element: <App />, errorElement: <Error />, children: [
      { path: "/", element: <Home /> },
      { path: "/nossaequipe", element: <NossaEquipe /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)




