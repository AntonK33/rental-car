 import { NavLink } from "react-router-dom";
// import { useAuth } from "hooks/useAuth";
import css from './Header.module.css';
import Logo from "../../assets/RentalCar.svg"

export const Header = () => {
   
  
    return (
        <header className={css.header}>
            <div className={css.headerContainer}>
            <div className={css.logoBox}>
            <img src={Logo} alt="RentalCar Logo" width='104px' height='16px' />
                </div> 
                <div className={css.navBox}>
                <nav>
      <NavLink className={css.linkCastom} to="/">
        Home
      </NavLink>
     
        <NavLink className={css.link} to="/catalog">
          Catalog
        </NavLink>
    
    </nav>
                </div>
            </div>
            
      </header>
    );
  };