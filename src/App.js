import React from 'react';
import Menu from './componets/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componets/BannerMain';
import VideoCardGroup from './componets/Carousel';
import Footer from './componets/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <VideoCardGroup
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <VideoCardGroup
        category={dadosIniciais.categorias[1]}
      />

      <VideoCardGroup
        category={dadosIniciais.categorias[2]}
      />      

      <VideoCardGroup
        category={dadosIniciais.categorias[3]}
      />      

      <VideoCardGroup
        category={dadosIniciais.categorias[4]}
      />      

      <VideoCardGroup
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default App;