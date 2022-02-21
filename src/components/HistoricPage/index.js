import React,{useState, useEffect,useContext, useMemo} from 'react';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';
import CartIcon from '../../assets/add-to-cart.png'
import { Container,
  Button,
  Header,
  Details,
  Purchase,
  PurchaseContainer
}from '../styles/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomBar from '../BottomBar';


export default function HistoricPage() {

   const navigate = useNavigate();
   const location = useLocation();
   const purchase = location.state;
   const {info} = useContext(UserContext);
   const [items,setItems]=useState();
   const BaseURL = 'https://back-pixels.herokuapp.com';

   const alert = (text) => toast.error(`${text}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const config = useMemo(() => {
    const data = {
        headers: {
            "Authorization": `Bearer ${info.token}`
        }
    }
    return data;
  }, [info.token]);

  useEffect(()=>{
    axios.post(`${BaseURL}/purchase`, {items: purchase.items},config).then(res=>setItems(res.data))
   },[config, purchase.items])

    function HistoricModel(){
      return(
        items.map(item => {
          return (
            <Purchase key={item._id}>
            <div className='value'>
           <div className="address">{item.length} X</div>
            <img src={item.image} alt={item.description} />
            <div>
            <p  className="description">{item.description}</p>
            <p className="price">{item.value}</p>
            </div>
            <Details>
              <div className="delivered">
                entregue em:
              </div>
              <div className="address">
                {item.address}
              </div>
             
            </Details>
        </div>
            </Purchase>
            );
    })
      )
    }
 
  return (
    <Container align={"center"}>
            <Header> 
              <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}></ion-icon>
              Minhas Compras 
            </Header>
            {
        items? 
        <PurchaseContainer>
              <HistoricModel></HistoricModel>
        </PurchaseContainer>
        // <></>
        :
       <div className="empty">
         <img src={CartIcon} alt='Ícone de compra' />
         <p>Você ainda não tem nenhuma compra</p>
         <Button onClick={()=>navigate('/')}>Comecar a comprar</Button>
    </div>
      }
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
            <BottomBar></BottomBar>
    </Container>
  )
}
