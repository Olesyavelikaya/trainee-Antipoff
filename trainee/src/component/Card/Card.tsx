import { Link } from "react-router-dom";
import "./Card.css";

export interface CardElementProps {
  cardId?: number;
  avatar: string;
  name: string;
  surname: string;
  isFavorits?: boolean | undefined;
}

export function Card(CardProps: CardElementProps) {
  const { avatar, name, surname, cardId } = CardProps;

  return (
    <Link
      key={cardId}
      to={`card/${cardId}`}
      style={{ textDecoration: "none", color: "var(--black)" }}
    >
      <div className="main-container_card">
        <div className="information-card">
          <img src={avatar} alt={surname} className="img-card" />
          <div className="fullname-card">
            <span className="name-card"> {name}</span>
            <span className="surname-card"> {surname}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
