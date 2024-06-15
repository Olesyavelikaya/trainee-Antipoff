import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setUserPassword,
  AppDispatch,
  selectUser,
} from "../../context/context";
import "./registration.css";

export function InputPassword() {
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectUser);
  const [errorPassword, setErrorPassword] = useState("");

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserPassword(event.target.value));
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

  return (
    <>
      <label htmlFor="password">Пароль</label>
      <input
        type="password"
        name="password"
        id="password"
        className="input-registration"
        onChange={handleChangePassword}
        value={currentUser.userPassword}
        onBlur={validPassword}
        style={{ borderColor: errorPassword ? "red" : "" }}
        required
      />
      {errorPassword && (
        <p style={{ color: "red", fontSize: "10px" }}>{errorPassword}</p>
      )}
    </>
  );
}
