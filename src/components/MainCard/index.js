import React, { useState } from 'react';

import { Container, MainText, InputLabel, BinaryNumberInput, ConverterButton, ResultText } from './styles';

function MainCard() {
  const [binaryNumber, setbinaryNumber] = useState();
  const [decimalNumber, setdecimalNumber] = useState();
  const [ErrorMessage, setErrorMessage] = useState();

  const onFormSubmit = e => {
    e.preventDefault()

  if (binaryNumber.match(/^[0-1]+$/g) === null) {
    setErrorMessage('Digite apenas 0 ou 1')
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
      <MainText>Informe um número binário para conversão</MainText>
      <InputLabel>
      {ErrorMessage && <span style={{ color: 'red' }}>{ErrorMessage}</span>}
          <BinaryNumberInput 
            type="number" 
            placeholder='Adicione apenas 0 ou 1' 
            value={binaryNumber} 
            onChange={(e) => setbinaryNumber(e.target.value)}>
          </BinaryNumberInput>
        <ConverterButton onClick={onFormSubmit}>Converter</ConverterButton>
      </InputLabel> 
      <ResultText>
          O Valor de {binaryNumber} em decimal é {decimalNumber}
      </ResultText>  
    </Container>
    );
}

export default MainCard;