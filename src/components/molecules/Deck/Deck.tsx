import { useState, FC, useEffect } from "react";
import styles from "./Deck.module.scss";
import Card from "../../atoms/Card/Card";
import { CardItem } from "../../../util/votingSystem";

interface Props {
  onSelectCard?: (value: number | string) => void;
  resetSelection?: boolean;
  cards: CardItem[];
  testId?: string;
}

const Deck: FC<Props> = ({ onSelectCard, resetSelection, cards, testId }) => {
  const [selectedCard, setSelectedCard] = useState<number | string | null>(
    null
  );

  useEffect(() => {
    if (resetSelection) {
      setSelectedCard(null);
    }
  }, [resetSelection]);

  const handleOnSelectCard = (value: number | string) => {
    setSelectedCard(value);
    if (onSelectCard) {
      onSelectCard(value);
    }
  };

  return (
    <div data-testid={testId} className={styles["deck-container"]}>
      <h2>Elige una carta 👇</h2>
      <div className={styles["card-container"]}>
        {cards.map((item, index) => (
          <Card
            key={index}
            label={item.label}
            value={item.value}
            onClick={handleOnSelectCard}
            isSelected={selectedCard === item.value}
            amount={item.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default Deck;
