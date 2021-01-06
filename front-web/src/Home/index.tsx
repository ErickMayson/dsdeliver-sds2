import './styles.css';
import {ReactComponent as Logo} from "./logo.svg";
import {ReactComponent as MainImage} from "./main.svg";
function Navbar() {
    return (
       <div className="home-container">
           <div className="home-content">
               <div className="home-actions">
                <h1 className="home-title">
                Faça seu pedido <br /> que entregamos pra você!!!
                </h1>
                <h3 className="home-subtitle">
                Escolha o seu pedido e em poucos minutos <br /> levaremos na sua porta
                </h3>
               </div>
                <a href="orders" className="home-btn-order">
                    FAZER PEDIDO
                </a>

           </div>
           <div className="home-image">
            <MainImage />
           </div>
       </div>
    )
}

export default Navbar;