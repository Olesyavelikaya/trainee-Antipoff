import { useDispatch, useSelector } from "react-redux";
import { setUserName, AppDispatch, selectUser } from "../../context/context";
import "./registration.css";

type InputNameProps = {
  error: string;
};

export function InputName(props: InputNameProps) {
  const { error } = props;

  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectUser);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(event.target.value));
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
        value={currentUser.userName}
        style={{ borderColor: error ? "red" : "" }}
        required
      />
      {error && <p style={{ color: "red", fontSize: "10px" }}>{error}</p>}
    </>
  );
}
