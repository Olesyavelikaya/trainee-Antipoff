import { ButtonExit } from "../Buttons/ButtonExit";
import "./Header.css";

export function Header() {
  return (
    <>
      <div className="main-container_header">
        <div className="btn-header">
          <ButtonExit />
        </div>
        <div className="container-header">
          <div className="container-text_header">
            <h1 className="title-header">Наша команда</h1>
            <p className="text-header">
              Это опытные специалисты, хорошо разбирающиеся во всех задачах,
              которые ложатся на их плечи, и умеющие находить выход из любых,
              даже самых сложных ситуаций.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
