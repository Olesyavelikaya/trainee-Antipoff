import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../Header/Header";
import { Card } from "../Card/Card";
import { selectCardInfo, AppDispatch } from "../../context/context";
import { fetchCardInfo } from "../../context/cardDataRequest";
import "./Catolog.css";

export function Catalog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CardList = useSelector(selectCardInfo);
  const dispatch = useDispatch<AppDispatch>();
  const updateArrCard = CardList.dataPageOne.concat(CardList.dataPageTwo);
  const CardPerPage = 8;

  const showMoreCard = () => {
    setCurrentIndex(currentIndex + CardPerPage);
  };

  useEffect(() => {
    dispatch(fetchCardInfo());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container-catalog">
        {updateArrCard
          .slice(0, currentIndex + CardPerPage)
          .map((cardElement) => (
            <Card
              cardId={cardElement.id}
              key={cardElement.id}
              avatar={cardElement.avatar}
              name={cardElement.first_name}
              surname={cardElement.last_name}
            />
          ))}
      </div>
      {currentIndex < updateArrCard.length && (
        <button onClick={showMoreCard} className="btn-showMore">
          Показать ещё
        </button>
      )}
    </>
  );
}
