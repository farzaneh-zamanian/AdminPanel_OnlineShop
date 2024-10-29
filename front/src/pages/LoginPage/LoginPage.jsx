import React, { useState } from "react";
import loginPagestyles from "./LoginPage.module.css";
import formStyles from "../form.module.css"; //SHARED FOR REGISTER AND LOGIN
import { useLogin } from "../../hooks/mutation";
import { setCookie } from "../../utils/cookie";
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();

  //STATE -FORM
  const [form, setForm] = useState({
    username: "",
    password: "",
  });


  // ACTION - MUTATION
  const { mutateAsync } = useLogin(); // Use mutateAsync for async/await

  //ACTION - ONcHANGE INPUT VALUE
  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };
  const handleClick = () => {
    navigate('/registration');
  };

  //ACTION- LOGIN SUBMIT
  const loginHandler = async (event) => {
    event.preventDefault();
 

    if (!form.username || !form.password)
      return alert("User  or password is necessary");

    try {
      const response = await mutateAsync(form); 
      console.log("Login successful:", response.token); 
      setCookie("token", response?.token);
      navigate("/admin");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
      alert(
        "Login failed: " + (error.response?.data?.message || "Unknown error")
      );
    }
  };

  return (
    <main>
      <form
        onSubmit={loginHandler}
        className={loginPagestyles.containerLoginPage}
      >
        <span className={formStyles.containerLoginPage__logo}>
          <img src="./src/assets/images/logo-main.svg" alt="Company Logo" />
        </span>
        <h2 className={formStyles.containerLoginPage__title}>فرم ورود</h2>
        <div className={formStyles.containerLoginPage__inputGroup}>
          <input
            type="text"
            placeholder="نام کاربری"
            name="username"
            value={form.username}
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="رمز عبور"
            name="password"
            value={form.password}
            onChange={changeHandler}
          />
        </div>
        <button className={formStyles.containerLoginPage__entranceBtn}>
          ورود
        </button>
        <p className={formStyles.containerLoginPage__accountCreation}  onClick={handleClick}>
         ایجاد حساب کاربری؟
        </p>
      </form>
    </main>
  );
}

export default LoginPage;
