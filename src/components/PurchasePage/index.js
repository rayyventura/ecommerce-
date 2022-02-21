import React, {useEffect,useState, useMemo,useContext} from 'react'
import axios from 'axios';
import UserContext from '../../contexts/UserContext';
import { Container,
    Button,
    Header,
    Details,
    Purchase,
    PurchaseContainer
  }from '../styles/styles';
  import dayjs from 'dayjs';
  import { Link, useNavigate } from 'react-router-dom';
  import CartIcon from '../../assets/add-to-cart.png';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import BottomBar from '../BottomBar';
  

export default function Purchases() {
    const BaseURL = 'https://back-pixels.herokuapp.com';
    const {info}=useContext(UserContext);
    const [ purchases, setPurchases ] = useState();
    const navigate = useNavigate();
 
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
    axios.get(`${BaseURL}/purchase`,config).then(res=>setPurchases(res.data))
   },[config])

    function HistoricModel(){
      return (
        purchases.map(purchase => {
          return (
            <Link to={'/historic'} state={purchase} key={purchase._id}>
              <Purchase>
                <div className='value'>
                  <div>
                    <p  className="description">Data da compra {dayjs(purchase.date).format('DD/MM/YYYY')}</p>
                    <p className="price">{purchase.items.length} itens</p>
                  </div>
                  <Details>
                    <div className="delivered">
                    entregue em:
                    </div>
                    <div className="address">
                      {info.address}
                      </div>
                      </Details>
                </div>
              </Purchase>
            </Link>
          );
        })
      );
    }
      
      return (
      <Container align={"center"}>
      <Header> 
        <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}></ion-icon>
        Minhas Compras 
      </Header>
         {
        purchases? 

        <PurchaseContainer>
            <HistoricModel></HistoricModel>
        </PurchaseContainer>
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