import './register.css';

function RegisterButton({ setRegister, register }) {
    return (
        <div>
            <button onClick={() => setRegister(!register)} className="r-btn" type="button">Register</button>
        </div>
    );
  }
  
  export default RegisterButton;