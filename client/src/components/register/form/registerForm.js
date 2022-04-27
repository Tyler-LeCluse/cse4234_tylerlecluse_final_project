// import "./registerFrom.css";
import { useState } from "react";
// import { useDispatch } from "react-redux";

// import { signUp } from '../../../actions/users';

function RegisterForm() {
  // const [first, setFirst] = useState(null);
  // const [last, setLast] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [email, setEmail] = useState(null);
  const [newUser, setNewUser] = useState({ first: '', last: '', email: '', password: '' });

  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // const dispatch = useDispatch();

  // function handleFirst(e) {
  //   setFirst(e.target.value);
  // }

  // function handleLast(e) {
  //   setLast(e.target.value);
  // }

  // function handlePassword(e) {
  //   setPassword(e.target.value);
  // }

  // function handleEmail(e) {
  //   setEmail(e.target.value);
  // }

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  // async function handleNewUser() {
  //   await setNewUser({
  //     username: `${first} ${last}`,
  //     email: email,
  //     password: password
  //   });
  // }

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleNewUser();
    console.log(newUser);
    if (newUser === null) {
      setError(true);
    } else {
      // dispatch(signUp(newUser));
      setSubmitted(true);
      setError(false);
    }
  };

  return (
    <div>
      {error ? (
        <h1>Error Submitting form</h1>
      ) : submitted ? (
        <h1>Success!!</h1>
      ) : (
        <form>
          <label>First:</label>
          <input value={newUser.first ? newUser.first : "First Name"} onChange={handleChange} />
          <br />
          <label>Last:</label>
          <input value={newUser.last ? newUser.last : "Last Name"} onChange={handleChange} />
          <br />
          <label>email:</label>
          <input
            value={newUser.email ? newUser.email : "example@address.com"}
            onChange={handleChange}
            type='email'
          />
          <br />
          <label>password:</label>
          <input
            value={newUser.password ? newUser.password : "********"}
            onChange={handleChange}
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
