import React, { useState } from "react";
import RegistrationPagestyles from "./RegistrationPage.module.css";
import formStyles from "../form.module.css"; //SHARED FOR REGISTER AND LOGIN
import { useRegister } from "../../hooks/mutation";
import { useNavigate } from "react-router-dom";
function RegistrationPage() {
  //STATE -FORM
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmedPassword: "",
  });

  const navigate = useNavigate();

  const { mutateAsync } = useRegister();
  const clickHandler = () => {
    navigate("/login");
  };

  const registerHandler = async (event) => {
    event.preventDefault();
    const { username, password, confirmedPassword } = form;

    // validation error
    if (!form.username || !form.password)
      return alert("User  or password is necessary");
    if (form.password !== form.confirmedPassword)
      return alert("Passwords do not match");

    try {
      const response = await mutateAsync({ username, password }); // Use mutateAsync for async/await
      console.log("Registration successful:", response.message); // Access the response data
      navigate("/login");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data?.message || error.message
      );
      alert(
        "Registration failed: " +
          (error.response?.data?.message || "Unknown error")
      );
    }
  };
  //ACTION - ONcHANGE INPUT VALUE
  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };

  return (
    <main>
      <form
        onSubmit={registerHandler}
        className={RegistrationPagestyles.containerRegistrationPage}
      >
        <span className={formStyles.containerLoginPage__logo}>
          <img src="./src/assets/images/logo-main.svg" alt="Company Logo" />
        </span>
        <h2 className={formStyles.containerLoginPage__title}>فرم ثبت نام</h2>
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
          <input
            type="password"
            placeholder="تکرار رمز عبور"
            name="confirmedPassword"
            value={form.confirmedPassword}
            onChange={changeHandler}
          />
        </div>
        <button
          type="submit"
          className={formStyles.containerLoginPage__entranceBtn}
        >
          ثبت نام
        </button>
        <p
          onClick={clickHandler}
          className={formStyles.containerLoginPage__accountCreation}
        >
          حساب کاربردی دارید؟
        </p>
      </form>
    </main>
  );
}

export default RegistrationPage;
