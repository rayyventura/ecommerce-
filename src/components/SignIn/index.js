
import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import UserContext from '../../contexts/UserContext';
import UserLogo from '../../assets/user.png';
import {
  Container,
  Form,
  Input,
  Button,
  Title,
  Background
} from '../styles/form';
import EmailIcon from '../../assets/email.png'
import PasswordIcon from '../../assets/padlock.png'

export default function SignIn() {
const navigate = useNavigate();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const {setInfo}=useContext(UserContext);
const BaseURL = 'https://back-pixels.herokuapp.com';



function submitForm(event){

  const user={
    email,
    password
  }
// console.log(user);
event.preventDefault();

axios.post(`${BaseURL}/signin`,user).then(res=>{
  setInfo(res.data);
  localStorage.setItem('userData',JSON.stringify(res.data));
  navigate(-1);
}).catch(res=>{
  console.log(res);
  alert("Login Falhou");
  
})
}
const alert = (text) => toast.error(`${text}`, {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});
  return (
  
     <Container >
          <Background>
              <Title>
                 <img src={UserLogo} alt="Icone de usuário" />
              </Title>
            <Form onSubmit={submitForm}>
              <Input backgroundIcon={`url(${EmailIcon})` } placeholder='E-mail' type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              <Input backgroundIcon={`url(${PasswordIcon})` } type="password" placeholder='Senha' value={password} onChange={(e)=>setPassword(e.target.value)} required />
              <Button type='submit' > Entrar </Button>
            </Form>

            <p onClick={()=>navigate("/signup")}>Primeira vez? Cadastre-se</p>
           </Background>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
      </Container>
    
   
  )
}