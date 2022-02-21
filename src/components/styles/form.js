import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;
  height:100vh;
  background-color:#ededed;
  
`;
const Background = styled.div` 

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color:white;
padding:30px;

border-radius: 12px;
box-shadow: 2px 2px 8px rgba(0, 0, 0,0.6);

p{
  cursor:pointer;
  color:#424242;
  font-weight: bold;
  :hover{
    color:#41EF7B;
  }
}
`

const Form = styled.form`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  p{
    color:white;

  }
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;

  width: 90%;
  color: #000;
  background: #FFFFFF;
  border-radius: 5px;
  ::placeholder {
    color: #424242;
    padding-left: 40px;
    font-weight: bold;
  }

  background-color: white;
  background-image: ${props=>props.backgroundIcon};
  background-position: 10px 10px;
  background-repeat: no-repeat;

  padding: 15px 0 15px 40px;

  background-size: 22px;

  border-bottom:1px solid rgba(0, 0, 0, 0.2);

  

`;

const Button = styled.button`
  color:white;
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  padding: 12px;
  
  background: #424242;
  border-radius: 5px;
  color:white;


  :hover{
    background-color:#41EF7B;
  }
`;

const Title = styled.h1` 
font-family: 'Pacifico';
font-size:40px;
font-weight:bold;

img{
  width:35px;
  height:35px;

 margin:30px;
}
`

export {
  Container,
  Form,
  Input,
  Button,
  Title,
  Background
}