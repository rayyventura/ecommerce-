import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Container,
    Form,
    Input,
    Button,
    Title,
    Background
  } from '../styles/form';
import NameIcon from '../../assets/id-card.png';
import PasswordIcon from '../../assets/padlock.png';
import EmailIcon from '../../assets/email.png';
import AddressIcon from '../../assets/location.png';
import UserIcon from '../../assets/edit.png';


export default function SignUp() {
const navigate = useNavigate();
const [email,setEmail]=useState('');
const [name,setName]=useState('');
const [password,setPassword]=useState('');
const [address,setAddress]=useState('');

const BaseURL = 'https://back-pixels.herokuapp.com';




function submitForm(event){
  
event.preventDefault();

const user = {
  email,
  name,
  password,
  address
}

axios.post(`${BaseURL}/signup`,user).then((()=>{
  navigate('/signin');
})).catch(()=>{alert("Cadastro falhou")});
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
                  <img src={UserIcon} alt="Ícone de cadastro"/>
              </Title>
            <Form onSubmit={submitForm}>
              <Input backgroundIcon={`url(${NameIcon})` } type="text" placeholder='Nome' value={name} onChange={(e)=>setName(e.target.value)} required />
              <Input backgroundIcon={`url(${EmailIcon})` } placeholder='E-mail' type="E-mail"  value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              <Input backgroundIcon={`url(${PasswordIcon})` } type="password" placeholder='Senha'  value={password} onChange={(e)=>setPassword(e.target.value)} required/>
              <Input backgroundIcon={`url(${AddressIcon})` } type="text" placeholder='Endereço'  value={address} onChange={(e)=>setAddress(e.target.value)} required/>
              <Button type='submit' > Cadastrar </Button>
            </Form>

            <p onClick={()=>navigate('/signin')}>Já tem uma conta? Entre agora!</p>
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

