import { useDispatch, useSelector } from "react-redux";
import { setUserEmail, AppDispatch, selectUser } from "../../context/context";
import "./registration.css";


type InputEmailProps = {
  error: string;
};

export function InputEmail(props: InputEmailProps) {
  const { error } = props;

  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectUser);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserEmail(event.target.value));
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
        style={{ borderColor: error ? "red" : "" }}
        required
      />
      {error && <p style={{ color: "red", fontSize: "10px" }}>{error}</p>}
    </>
  );
}
