import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "../../../FireBaseConfig";
import MyContext from "../../../context/MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateLoginStatus } = useContext(MyContext);

  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    let loggedIn = await signInWithEmailAndPassword(email, password);

    if (loggedIn && loggedIn.uid) {
      updateLoginStatus(true);
      toast.success("Logged in successfully!", {
        position: "top-center",
        autoClose: 1500,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Invalid Credentials!", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });
    }
  };

  return (
    <>
    <Navbar />
      <div className="loginPage-wrapper">
        <form className="loginPage-form" onSubmit={handleSignIn}>
          <h3>Welcome Back</h3>
          <p>Please login to your account</p>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
          <Link to="/signup" className="newUser">
            Don't have an account? <span>Signup</span>
          </Link>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default LoginPage;
