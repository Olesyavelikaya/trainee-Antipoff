import { useDispatch, useSelector } from "react-redux";
import {
  setUserRepeatPassword,
  AppDispatch,
  selectUser,
} from "../../context/context";
import "./registration.css";


type InputRepeatPasswordProps = {
  error: string;
};

export function InputRepeatPassword(props: InputRepeatPasswordProps) {
  const { error } = props;
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectUser);

  const handleChangeRepeatPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(setUserRepeatPassword(event.target.value));
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
        style={{ borderColor: error ? "red" : "" }}
        required
      />
      {error && <p style={{ color: "red", fontSize: "10px" }}>{error}</p>}
    </>
  );
}
