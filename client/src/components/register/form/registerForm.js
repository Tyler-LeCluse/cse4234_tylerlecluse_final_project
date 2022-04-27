// import "./registerFrom.css";
import { useState } from "react";
import Axios from 'axios';

function RegisterForm() {
  const [newUser, setNewUser] = useState({ first: '', last: '', email: '', password: '' });

  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser(values => ({...values, [name]: value}));
  }

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleNewUser();
    if (newUser === null) {
      setError(true);
    } else {
      Axios.post('http://localhost:5000/users/singUp', newUser)
        .then(res => {
          console.log(res)
        })
        .catch(e => console.log(e));
      setSubmitted(true);
      setError(false);
    }
  };
  console.log(newUser);
  return (
    <div>
      {error ? (
        <h1>Error Submitting form</h1>
      ) : submitted ? (
        <h1>Success!!</h1>
      ) : (
        <form>
          <label>First:</label>
          <input name="first" value={newUser.first || ''} onChange={handleChange} placeHolder='First Name'/>
          <br />
          <label>Last:</label>
          <input name="last" value={newUser.last || ''} onChange={handleChange} placeHolder='Last Name'/>
          <br />
          <label>email:</label>
          <input
            value={newUser.email || ''}
            onChange={handleChange}
            type='email'
            placeHolder='example@address.com'
            name="email"
          />
          <br />
          <label>password:</label>
          <input
            value={newUser.password || ''}
            placeHolder='********'
            onChange={handleChange}
            name="password"
          />
          <br />
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default RegisterForm;
