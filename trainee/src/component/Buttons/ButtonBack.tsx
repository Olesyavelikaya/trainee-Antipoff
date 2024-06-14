import { useEffect, useState } from "react";
import "./Button.css";

export function ButtonBack() {
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

  return (
    <>
      {isMobile ? (
        <button>
          <img
            src="../public/back.png"
            alt="exit"
            className="button-header_mobile"
          />
        </button>
      ) : (
        <button className="button-header btn-back">Назад</button>
      )}
    </>
  );
}
