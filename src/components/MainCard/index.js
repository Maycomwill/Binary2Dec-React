import React, { useState } from 'react';

import { Container, MainCardArea, ErrorMessageText, MainText, InputLabel, BinaryNumberInput, ConverterButton, ResultArea, TextResultArea, Credits } from './styles';

function MainCard() {
  const [binaryNumber, setbinaryNumber] = useState();
  const [decimalNumber, setdecimalNumber] = useState();
  const [ErrorMessage, setErrorMessage] = useState();

  const onFormSubmit = e => {
    e.preventDefault()

  if (binaryNumber.match(/^[0-1]+$/g) === null) {
    setErrorMessage('Número inválido')
    setbinaryNumber('')
    setdecimalNumber('')
    return
  }
  setErrorMessage('') 


  const reversedBinaryText = binaryNumber
      .split('')
      .map(Number)
      .reverse()

  const result = reversedBinaryText.reduce(
    (accumulator, currentValue, i) =>
      accumulator + currentValue * Math.pow(2, i)
  )
  setdecimalNumber(result)

  }


  return (
    <Container>
      <MainCardArea>
        <MainText>Informe um número binário para conversão</MainText>
        <InputLabel>
          <ErrorMessageText> 
            <span style={{ color: '#a0a0aa', textAlign: "center" }}>
            {ErrorMessage}
            </span>
          </ErrorMessageText>
            <BinaryNumberInput 
              type="number" 
              placeholder='Digite apenas 0 ou 1' 
              value={binaryNumber} 
              onChange={(e) => setbinaryNumber(e.target.value)}>
            </BinaryNumberInput>
          <ConverterButton onClick={onFormSubmit}>Converter</ConverterButton>
        </InputLabel> 
        <ResultArea>
            <p>Número convertido</p>
            <TextResultArea
            type="text"
            value={decimalNumber}
            disabled />
        </ResultArea>  
      </MainCardArea>
      <Credits>
        <p>Desenvolvido por Maycom Willams</p>
      </Credits>
    </Container>
    );
}

export default MainCard;