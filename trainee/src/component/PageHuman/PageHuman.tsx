import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ButtonExit } from "../Buttons/ButtonExit";
import { ButtonBack } from "../Buttons/ButtonBack";
import { selectCardInfo } from "../../context/context";
import "./PageHuman.css";

export function PageHuman() {
  const { cardId } = useParams();
  const CardList = useSelector(selectCardInfo);
  const updateArrCard = CardList.dataPageOne.concat(CardList.dataPageTwo);
  const index = Number(cardId) - 1;
  const user = updateArrCard[index];

  return (
      <div>
        <div className="header-page_human">
          <div className="header-page_buttons">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <ButtonBack />
            </Link>

            <ButtonExit />
          </div>
          <div className="container-header_page-human">
            <img
              src={user?.avatar}
              alt={user?.last_name}
              className="img-avatar"
            />
            <div className="container-name">
              <p className="name-page_human">
                <span>{user?.first_name}</span>
                <span>{user?.last_name}</span>
              </p>
              <p className="profesion-page_human">Партнер</p>
            </div>
          </div>
        </div>
        <div className="body-page_human">
          <div className="text-page_human">
            <p>
              Клиенты видят в нем эксперта по вопросам разработки комплексных
              решений финансовых продуктов, включая такие аспекты, как
              организационная структура, процессы, аналитика и ИТ-компоненты. Он
              помогает клиентам лучше понимать структуру рисков их бизнеса,
              улучшать процессы за счет применения новейших технологий и
              увеличивать продажи, используя самые современные аналитические
              инструменты. .
            </p>
            <p>
              В работе с клиентами недостаточно просто решить конкретную
              проблему или помочь справиться с трудностями. Не менее важно
              уделять внимание обмену знаниями: "Один из самых позитивных
              моментов — это осознание того, что ты помог клиенту перейти на
              совершенно новый уровень компетентности, уверенность в том, что
              после окончания проекта у клиента есть все необходимое, чтобы
              дальше развиваться самостоятельно".
            </p>
            <p>
              Помимо разнообразных проектов для клиентов финансового сектора,
              Сорин ведет активную предпринимательскую деятельность. Он является
              совладельцем сети клиник эстетической медицины в Швейцарии,
              предлагающей инновационный подход к красоте, а также инвестором
              других бизнес-проектов
            </p>
          </div>
          <div className="contact_page-human">
            <p className="number-phone_page-human">
              {" "}
              <span>
                <img src="/foto/phone.png" alt="phone" />
              </span>
              +7 (954) 333-44-55
            </p>
            <p className="email_page-human">
              <span>
                <img src="/foto/mail.png" alt="mail" className="img-mail" />{" "}
              </span>
              {user?.email}{" "}
            </p>
          </div>
        </div>
      </div>
  );
}
