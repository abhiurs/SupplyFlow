import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      localStorage.setItem(
  "isLoggedIn",
  "true"
);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Invalid Credentials");

    }

  };

  

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >

        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-sm">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-1"
          >
            Register
          </Link>

        </p>

      </form>

    </div>

  );

};

export default Login;