import React from 'react';
import './App.css';
import Slides from './component/slides';

function App() {
  
  const imgs = [
    {
        number: '1',
        image: 'https://img.elo7.com.br/product/zoom/1C340F5/quadro-tela-paisagens-natureza-praia-coqueiro-mar-areia-004-quadro-tela.jpg',
        text: 'Praia bonita',
    },
    {
        number: '2',
        image: 'https://college.canon.com.br/static/img/tutorial/c6424436-4b9f-45a6-8c6f-066e7d9b9345.jpg',
        text: 'outra Praia bonita'
    },
    {
        number: '3',
        image: 'https://http2.mlstatic.com/papel-de-parede-grande-cachoeira-paisagens-3d-natureza-gg212-D_NQ_NP_696060-MLB27263720790_042018-F.jpg',
        text: 'lagoa'
    },
  ];

  let copy = imgs.slice();
  copy.push({number: '4',
            image: 'https://www.vistasba.com.br/site/wp-content/uploads/2018/04/paisagens-do-chile.jpg',
            text: 'Nova'}
  );
  
  console.log(imgs);
  console.log(copy);

  return (
    <div className="App">
      <Slides images={imgs}/>
      <h1>Hello</h1>
      <Slides images={copy}/>
    </div>
  );
}

export default App;
