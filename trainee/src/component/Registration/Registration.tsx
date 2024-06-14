import { useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectUser } from "../../context/context";
import { InputName } from "./InputName";
import { InputEmail } from "./InputEmail";
import { InputPassword } from "./InputPassword";
import { InputRepeatPassword } from "./InputRepeatPassword";
import "./registration.css";

export function Registration() {
  const currentUser = useSelector(selectUser);
  const navigate = useNavigate();

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRepeatPassword, setErrorRepeatPassword] = useState("");
  const [errorName, setErrorName] = useState("");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[А-Яа-яЁё\s]+$/;

  const validEmail = () => {
    let isValid = true;
    if (!emailPattern.test(currentUser.userEmail)) {
      setErrorEmail("Неправильный формат электронной почты");
      isValid = false;
    } else {
      setErrorEmail("");
    }
    return isValid;
  };

  const validName = () => {
    let isValid = true;
    if (!namePattern.test(currentUser.userName)) {
      setErrorName("Имя может содержать только буквы");
      isValid = false;
    } else {
      setErrorName("");
    }
    return isValid;
  };

  const validPassword = () => {
    let isValid = true;
    if (currentUser.userPassword.toString().length < 6) {
      setErrorPassword("Пароль должен содержать минимум 6 символов");
      isValid = false;
    } else {
      setErrorPassword("");
    }
    return isValid;
  };

  const validRepeatPassword = () => {
    let isValid = true;
    if (currentUser.userRepeatPassword.toString().length < 6) {
      setErrorRepeatPassword("Пароль должен содержать минимум 6 символов");
      isValid = false;
    } else {
      setErrorRepeatPassword("");
    }
    return isValid;
  };

  const convergePassword = () => {
    let isValid = true;
    if (currentUser.userRepeatPassword !== currentUser.userPassword) {
      setErrorRepeatPassword("Пароли должны совпадать");
      isValid = false;
    } else {
      setErrorRepeatPassword("");
    }
    return isValid;
  };

  const validateForm = () => {
    if (
      validEmail() &&
      validName() &&
      validPassword() &&
      validRepeatPassword() &&
      convergePassword() === true
    ) {
      return true;
    }
  };


 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      Cookies.set("name", currentUser.userName);
      navigate(0);
    }
  };

  return (
    <>
      <div className="main-container">
        <h2 className="title-registration">Регистрация</h2>
        <form className="form-registration" onSubmit={handleSubmit}>
          <InputName error={errorName} />
          <InputEmail error={errorEmail} />
          <InputPassword error={errorPassword} />
          <InputRepeatPassword error={errorRepeatPassword} />
          <button type="submit" className="button-registration">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </>
  );
}
