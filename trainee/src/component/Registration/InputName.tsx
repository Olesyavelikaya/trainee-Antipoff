import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setUserName, AppDispatch, selectUser } from "../../context/context";
import "./registration.css";


export function InputName() {
  const [errorName, setErrorName] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectUser);
  const namePattern = /^[А-Яа-яЁё\s]+$/;

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(event.target.value));
  };

  const validName = () => {
    let isValid = true;
    if (!namePattern.test(currentUser.userName)) {
      setErrorName("Имя может содержать только русские буквы");
      isValid = false;
    } else {
      setErrorName("");
    }
    return isValid;
  };

  return (
    <>
      <label htmlFor="name">Имя </label>
      <input
        type="text"
        name="name"
        id="name"
        className="input-registration"
        onChange={handleChangeName}
        onBlur={validName}
        value={currentUser.userName}
        style={{ borderColor: errorName ? "red" : "" }}
        required
      />
      {errorName && (
        <p style={{ color: "red", fontSize: "10px" }}>{errorName}</p>
      )}
    </>
  );
}
