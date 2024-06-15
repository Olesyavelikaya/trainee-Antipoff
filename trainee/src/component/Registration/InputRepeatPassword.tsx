import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setUserRepeatPassword,
  AppDispatch,
  selectUser,
} from "../../context/context";
import "./registration.css";

export function InputRepeatPassword() {
  const [errorRepeatPassword, setErrorRepeatPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectUser);

  const handleChangeRepeatPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(setUserRepeatPassword(event.target.value));
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

  const chekingRepeatPassword = () => {
    validRepeatPassword();
    convergePassword();
  };

  return (
    <>
      <label htmlFor="repeatPassword">Подтвердите пароль</label>
      <input
        type="password"
        name="repeatPassword"
        id="repeatPassword"
        className="input-registration"
        onChange={handleChangeRepeatPassword}
        value={currentUser.userRepeatPassword}
        style={{ borderColor: errorRepeatPassword ? "red" : "" }}
        onBlur={chekingRepeatPassword}
        required
      />
      {errorRepeatPassword && (
        <p style={{ color: "red", fontSize: "10px" }}>{errorRepeatPassword}</p>
      )}
    </>
  );
}
