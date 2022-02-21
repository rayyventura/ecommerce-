import styled from 'styled-components';

const Container = styled.div` 
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
height:100vh;
position: relative;

div{
    cursor:pointer;
}

background-color:#f2f2f2;


img{
    width:20px;
}

.top{
    display:flex;
    flex-direction:column;
    
    width:260px;
    
    margin-bottom: 20px;
    padding:12px;
    
    background-color:white;
    border-radius:14px;

    h1{
     font-size:16px;
     font-weight:bold;
     
     padding-bottom:9px;

    }
    p{
        font-weight:normal;
        font-size:12px;
        word-wrap:break-word;
    }
    .address{
        width:60%;
       display:flex;
       justify-content: flex-start;
       align-items: center;
    }

    img{
        margin-right: 12px;
    }

}
.flex{
    background-color:white;
    border-radius:14px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:10px;

    margin-bottom: 20px;

    width:260px;
    img{
        cursor:pointer;

        :hover{
            width:17px;
        }
    }

    p{
        font-size:16px;
        font-weight:bold;
        }
}



`
const Title = styled.h1` 
font-size:26px;
font-weight:bold;

margin-bottom: 26px;;
`

const AccountContainer = styled.div`
    padding: 26px;
`;

export{
    Container,
    Title,
    AccountContainer
}