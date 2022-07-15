import styled from 'styled-components';

export const Container = styled.div`
  background: #160d6e;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  height: 50vh;
  width: clamp(250px, 50%, 900px);
  justify-content: flex-start;
  align-items: center;
  padding: 50px 0px;
  gap: 55px;
`;

export const MainText = styled.text`
  color: #acf100;
  font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  font-size: 16pt;
  font-weight: 700;
  display: flex;
  text-align: center;
`;

export const InputLabel = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const BinaryNumberInput = styled.input`
  height: 40px;
  width: 250px;
  font-size: 12pt;
  background: #e6e6e6;
  color: #10002e;
  cursor: pointer;
  border-radius: 5px;
  padding-left: 5px;
  border: solid 2px rgba(1, 1, 1, 0);

  &:focus{
    background: #fff;
    border: solid 2px #acf100;
  }

`;

export const ConverterButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;

`;

export const ResultText = styled.div`
  width: 50%;
  height: 50vh;
  background: red;
`;