import { useState, FC } from "react";
import styles from "./Deck.module.scss";
import Card from "../../atoms/Card/Card";

interface Props {
  onSelectCard?: (value: number | string) => void;
}

interface CardItem {
  label: string;
  value: number | string;
}

const fibonacci: CardItem[] = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "5", value: 5 },
  { label: "8", value: 8 },
  { label: "13", value: 13 },
  { label: "21", value: 21 },
  { label: "34", value: 34 },
  { label: "55", value: 55 },
  { label: "89", value: 89 },
  { label: "☕", value: "skip" },
  { label: "?", value: "questionMark" },
];

const Deck: FC<Props> = ({ onSelectCard }) => {
  const [selectedCard, setSelectedCard] = useState<number | string | null>(
    null
  );

  const handleOnSelectCard = (value: number | string) => {
    setSelectedCard(value);
    if (onSelectCard) {
      onSelectCard(value);
    }
  };

  return (
    <div className={styles["deck-container"]}>
      <h2>Elige una carta 👇</h2>
      <div className={styles["card-container"]}>
        {fibonacci.map((item, index) => {
          return (
            <Card
              key={index}
              label={item.label}
              value={item.value}
              onClick={handleOnSelectCard}
              isSelected={selectedCard === item.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Deck;
