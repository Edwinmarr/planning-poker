import { FC } from "react";
import table1 from "../../../assets/table1.svg";
import style from "./Table.module.scss";
import Button from "../Button/Button";

interface Props {
  onCalculateAverage: () => void;
  onResetVotes: () => void;
  showAverageButton: boolean;
  showResetButton: boolean;
}

const Table: FC<Props> = ({
  onCalculateAverage,
  onResetVotes,
  showAverageButton,
  showResetButton,
}) => {
  return (
    <div className={style["table-container"]}>
      <img className={style["big-table"]} src={table1} alt="Big Table" />
      {showAverageButton && (
        <Button
          id={style["calculate-button"]}
          label="Revelar cartas"
          onClick={onCalculateAverage}
          testId="calculateButton"
        />
      )}
      {showResetButton && (
        <Button
          id={style["reset-button"]}
          label="Resetear juego"
          onClick={onResetVotes}
          testId="resetButton"
        />
      )}
    </div>
  );
};

export default Table;
