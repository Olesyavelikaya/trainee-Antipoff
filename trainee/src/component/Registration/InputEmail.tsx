import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail, AppDispatch, selectUser } from "../../context/context";
import "./registration.css";

export function InputEmail() {
  const [errorEmail, setErrorEmail] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectUser);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserEmail(event.target.value));
  };

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

  return (
    <>
      <label htmlFor="email"> Электронная почта</label>
      <input
        type="email"
        name="email"
        id="email"
        className="input-registration"
        onChange={handleChangeEmail}
        value={currentUser.userEmail}
        onBlur={validEmail}
        style={{ borderColor: errorEmail ? "red" : "" }}
        required
      />
      {errorEmail && (
        <p style={{ color: "red", fontSize: "10px" }}>{errorEmail}</p>
      )}
    </>
  );
}
