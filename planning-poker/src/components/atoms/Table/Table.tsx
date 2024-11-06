import table1 from "../../../assets/table1.svg";
import style from "./Table.module.scss";

const Table = () => {
  return (
    <div className={style["table-container"]}>
      <img className={style["big-table"]} src={table1} alt="Big Table" />
    </div>
  );
};

export default Table;
