import logo from '../../MovieHub.png';
import './navbar.css';

import RegisterButton from '../register/registerButton';

function Navbar({ setRegister, register }) {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="Movie Hub Logo"/>
        </div>
        <div className="list">
            <ul>
                <li className="register-button">
                    <RegisterButton setRegister={setRegister} register={register} />
                </li>
                <li className="user-name">
                    Username
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;