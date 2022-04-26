import './App.css';
import Navbar from './components/navbar/navbar';
import RegisterForm from './components/register/form/registerForm';
// import { Carousel } from 'react-responsive-carousel';
// import Axios from 'axios';
import { useState, useEffect } from 'react';
import Movies from "./components/content/cards/movies";
import { useDispatch } from "react-redux";
import { getMovies } from './actions/movies';

function App() {
  const [register, setRegister] = useState(false);
  // const [movies, setMovies] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    // Axios.get('http://localhost:5000/movies/getMovies')
    //   .then(res => {
    //     setMovies(res.data);
    //   })
    //   .catch(e => console.log(e));
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar setRegister={setRegister} register={register} />
      {
        register ?
          <RegisterForm /> :
          <Movies />

      }
    </div>
  );
}

export default App;
