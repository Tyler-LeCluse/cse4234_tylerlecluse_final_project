import "./App.css";
import Navbar from "./components/navbar/navbar";
import RegisterForm from "./components/register/form/registerForm";
// import { Carousel } from 'react-responsive-carousel';
import Axios from "axios";
import { useState, useEffect } from "react";
import Movies from "./components/content/cards/movies";
import CookieConsent from "react-cookie-consent";

function App() {
  const [register, setRegister] = useState(false);
  const [genreList, setGenreList] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:5000/movies/getGenreList")
      .then((res) => {
        setGenreList(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="app">
      <Navbar setRegister={setRegister} register={register} />
      {register ? (
        <RegisterForm />
      ) : genreList ? (
        <Movies genres={genreList} />
      ) : null}
      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("Cookies Accepted");
          } else {
            alert("Cookies Accepted");
          }
        }}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>Accept my cookies with a glass of milk :O</span>
      </CookieConsent>
    </div>
  );
}

export default App;
