import css from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'home'}>Home</NavLink>
            <NavLink to={'cars'}>Car</NavLink>
        </div>
    );
};

export {Header};