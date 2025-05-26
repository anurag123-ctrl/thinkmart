import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { registerWithEmailAndPassword } from "../../../FireBaseConfig";
import "react-toastify/dist/ReactToastify.css";
import "./SignupPage.css";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

const SignupPage = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!displayName || !email || !password) {
      toast.error("All fields are required!", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });
      return;
    }

    try {
      const signUp = await registerWithEmailAndPassword(displayName, email, password);
      if (signUp?.uid) {
        toast.success("Registration successful!", {
          position: "top-center",
          autoClose: 1500,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error("Registration failed!", {
          position: "top-center",
          autoClose: 1500,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="signupPage-wrapper">
        <form className="signupPage-form" onSubmit={handleRegister}>
          <h2>Create Account</h2>

          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            placeholder="Your full name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="signupPage-submit">Sign Up</button>

          <p className="signupPage-loginLink">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default SignupPage;
