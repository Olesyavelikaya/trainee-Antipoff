import { Link, useRouteError } from "react-router-dom";
import "./error.css";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="errorPage">
      <div>
        <h2>Упс!</h2> <br /> Что-то пошло не так!
        <br />
        <i>
          {(error as { statusText: string }).statusText ||
            (error as Error).message}
        </i>
      </div>
      <br />
      <Link to={"/"}>
        <button className="button-error">
          Вернуться <br /> на главную
        </button>
      </Link>
    </div>
  );
}

export { ErrorPage };
