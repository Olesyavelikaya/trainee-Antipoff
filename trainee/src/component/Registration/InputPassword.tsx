import { useDispatch, useSelector } from "react-redux";
import {
  setUserPassword,
  AppDispatch,
  selectUser,
} from "../../context/context";
import "./registration.css";

type InputPasswordProps = {
  error: string;
};

export function InputPassword(props: InputPasswordProps) {
  const { error } = props;
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectUser);

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserPassword(event.target.value));
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
        style={{ borderColor: error ? "red" : "" }}
        required
      />
      {error && <p style={{ color: "red", fontSize: "10px" }}>{error}</p>}
    </>
  );
}
