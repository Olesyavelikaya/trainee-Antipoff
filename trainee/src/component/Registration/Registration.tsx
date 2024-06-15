import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../context/context";
import { InputName } from "./InputName";
import { InputEmail } from "./InputEmail";
import { InputPassword } from "./InputPassword";
import { InputRepeatPassword } from "./InputRepeatPassword";
import "./registration.css";

export function Registration() {
  const currentUser = useSelector(selectUser);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Cookies.set("name", currentUser.userName);
    navigate(0);
  };

  return (
    <>
      <div className="main-container">
        <h2 className="title-registration">Регистрация</h2>
        <form className="form-registration" onSubmit={handleSubmit}>
          <InputName />
          <InputEmail />
          <InputPassword />
          <InputRepeatPassword />
          <button type="submit" className="button-registration">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </>
  );
}
