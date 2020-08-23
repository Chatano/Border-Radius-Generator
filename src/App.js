import React, { useState } from 'react';

import * as S from './styles.js'

function App() {

  const [ topLeft, setTopLeft ] = useState(0)
  const [ topRight, setTopRight ] = useState(0)
  const [ bottomLeft, setBottomLeft ] = useState(0)
  const [ bottomRight, setBottomRight ] = useState(0)

  return (
    <S.container>
      <h1>Border-Radius Generator</h1>
      <S.inputsContainer>
        <input type="number" onChange={e=>setTopLeft(e.target.value)} placeholder="Digite aqui a medida" />
        <input type="number" onChange={e=>setTopRight(e.target.value)} placeholder="Digite aqui a medida" />
      </S.inputsContainer>

      <S.box topLeft={topLeft} topRight={topRight} bottomLeft={bottomLeft} bottomRight={bottomRight} />

      <S.inputsContainer>
        <input type="number" onChange={e=>setBottomLeft(e.target.value)} placeholder="Digite aqui a medida" />
        <input type="number" onChange={e=>setBottomRight(e.target.value)} placeholder="Digite aqui a medida" />
      </S.inputsContainer>
    </S.container>
  )
}

export default App;
