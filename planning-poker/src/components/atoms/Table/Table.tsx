import { FC } from "react";
import table1 from "../../../assets/table1.svg";
import table2 from "../../../assets/table2.svg";
import table3 from "../../../assets/table3.svg";
import style from "./Table.module.scss";

interface Props {}

const Table: FC<Props> = ({}) => {
  return (
    <div>
      <div className={style["table-container"]}>
        <img className={style["big-table"]} src={table1} alt="Big Table" />
        <img
          className={style["medium-table"]}
          src={table2}
          alt="Medium Table"
        />
        <img className={style["small-table"]} src={table3} alt="Small Table" />
      </div>
    </div>
  );
};

export default Table;
