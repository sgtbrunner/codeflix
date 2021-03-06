import React from 'react';
import { BannerMain } from '../../components/BannerMain/BannerMain.component';
import { Carousel } from '../../components/Carousel/Carousel.component';
import { DefaultPage } from '../../components/DefaultPage/DefaultPage.component';
import dummyData from '../../data/dummyData.json';

export const Home = () => (
  <div style={{ background: '#414141' }}>
    <DefaultPage>
      <BannerMain
        videoTitle={dummyData.categorias[0].videos[0].titulo}
        url={dummyData.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />
      <Carousel ignoreFirstVideo category={dummyData.categorias[0]} />
      <Carousel category={dummyData.categorias[1]} />
      <Carousel category={dummyData.categorias[2]} />
      <Carousel category={dummyData.categorias[3]} />
      <Carousel category={dummyData.categorias[4]} />
      <Carousel category={dummyData.categorias[5]} />
    </DefaultPage>
  </div>
);
