import { Link, useRouteError } from "react-router-dom";
import './error.css'
import '../component/Buttons/Button.css'

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="errorPage">
      <div >
        <h2>Упс!</h2> Что-то пошло не так!
        <i>
          {(error as { statusText: string }).statusText ||
            (error as Error).message}
        </i>
      </div>
      <Link to={"/"}>
        <button className="button-header">Вернуться на главную</button>
      </Link>
    </div>
  );
}

export { ErrorPage };
