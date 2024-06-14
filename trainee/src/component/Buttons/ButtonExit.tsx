import "./Button.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { userReset, AppDispatch } from "../../context/context";

export function ButtonExit() {
  const dispatch = useDispatch<AppDispatch>();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleExit = () => {
    Cookies.remove("name");
    dispatch(userReset());
    window.location.reload();
  };

  return (
    <>
      {isMobile ? (
        <button onClick={handleExit}>
          <img
            src="../public/exit.png"
            alt="exit"
            className="button-header_mobile"
          />
        </button>
      ) : (
        <button className="button-header" onClick={handleExit}>
          Выход
        </button>
      )}
    </>
  );
}
