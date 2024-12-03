import { useEffect, useState } from "react";
import styles from "./PokerRoom.module.scss";
import FormCreateUser from "../../molecules/FormCreateUser/FormCreateUser";
import Table from "../../atoms/Table/Table";
import UserProfile from "../../atoms/UserProfile/UserProfile";
import { UserRoles } from "../../../config/types";
import Deck from "../../molecules/Deck/Deck";
import Label from "../../atoms/Label/Label";
import Header from "../../molecules/Header/Header";

interface SelectedCards {
  [userName: string]: number | string;
}

const PokerRoom = () => {
  const [adminName, setAdminName] = useState<string | null>(null);
  const [adminRole, setAdminRole] = useState<UserRoles | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | string | null>(
    null
  );
  const [selectedCards, setSelectedCards] = useState<SelectedCards>({});
  const [shouldCalculate, setShouldCalculate] = useState<boolean>(false);
  const [resetSelection, setResetSelection] = useState<boolean>(false);

  const handleCreateUser = (name: string, type: UserRoles) => {
    sessionStorage.setItem("adminName", name);
    sessionStorage.setItem("adminRole", type);
    setAdminName(name);
    setAdminRole(type);
  };

  const handleSelectCard = (userName: string, value: number | string) => {
    setSelectedCard(value);
    setSelectedCards((prevSelectedCards) => ({
      ...prevSelectedCards,
      [userName]: value,
    }));
  };

  const handleCalculateAverage = () => {
    setShouldCalculate(true);
  };

  const handleResetGame = () => {
    setSelectedCard(null);
    setSelectedCards({});
    setShouldCalculate(false);
    setResetSelection(true);
    setTimeout(() => setResetSelection(false), 0); // Reset the selection state after a short delay
  };

  useEffect(() => {
    // Recuperar el nombre del administrador desde sessionStorage
    const name = sessionStorage.getItem("adminName");
    const adminRole = sessionStorage.getItem("adminRole") as UserRoles;
    setAdminName(name);
    setAdminRole(adminRole);

    // Simular la selección de cartas de los usuarios mock
    const mockSelectedCards: SelectedCards = {
      Andrés: 5,
      Caro: 8,
      Valeria: 3,
      Pedro: 13,
      David: 21,
      Aris: 2,
      Juan: 8,
    };
    setSelectedCards(mockSelectedCards);
  }, []);

  const calculateAverage = () => {
    const numericValues = Object.values(selectedCards).filter(
      (value) => typeof value === "number"
    ) as number[];
    if (numericValues.length === 0) return 0;
    const sum = numericValues.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numericValues.length;
    return parseFloat(average.toFixed(2));
  };

  return (
    <>
      <Header />
      {!adminName && <FormCreateUser onCreateUser={handleCreateUser} />}
      <article className={styles["root-container"]}>
        <div className={styles["table-area"]}>
          <div className={styles["row"]}>
            <UserProfile
              ready={selectedCards["Andrés"] !== undefined}
              className="profile-player"
              name={"Andrés"}
              cardValue={selectedCards["Andrés"]}
              shouldCalculate={shouldCalculate}
            />
            <UserProfile
              ready={selectedCards["Caro"] !== undefined}
              className="profile-player"
              name={"Caro"}
              cardValue={selectedCards["Caro"]}
              shouldCalculate={shouldCalculate}
            />
            <UserProfile
              ready={selectedCards["Valeria"] !== undefined}
              className="profile-player"
              name={"Valeria"}
              cardValue={selectedCards["Valeria"]}
              shouldCalculate={shouldCalculate}
            />
          </div>
          <div className={styles["row--middle"]}>
            <UserProfile
              ready={selectedCards["Pedro"] !== undefined}
              className="profile-player"
              name={"Pedro"}
              cardValue={selectedCards["Pedro"]}
              shouldCalculate={shouldCalculate}
            />
            {
              <Table
                onResetVotes={handleResetGame}
                onCalculateAverage={handleCalculateAverage}
                showAverageButton={
                  adminRole === UserRoles.PLAYER &&
                  selectedCard !== null &&
                  !shouldCalculate
                }
                showResetButton={shouldCalculate}
              />
            }
            <UserProfile
              ready={selectedCards["David"] !== undefined}
              className="profile-player"
              name={"David"}
              cardValue={selectedCards["David"]}
              shouldCalculate={shouldCalculate}
            />
          </div>
          <div className={styles["row"]}>
            <UserProfile
              ready={selectedCards["Aris"] !== undefined}
              className="profile-player"
              name={"Aris"}
              cardValue={selectedCards["Aris"]}
              shouldCalculate={shouldCalculate}
            />
            {adminName && (
              <UserProfile
                ready={selectedCard !== null}
                className={`profile-${adminRole}`}
                name={adminName}
                cardValue={selectedCard}
                shouldCalculate={shouldCalculate}
              />
            )}
            <UserProfile
              ready={selectedCards["Juan"] !== undefined}
              className="profile-player"
              name={"Juan"}
              cardValue={selectedCards["Juan"]}
              shouldCalculate={shouldCalculate}
            />
          </div>
        </div>
        <div className={styles["deck-area"]}>
          {adminRole === UserRoles.PLAYER && !shouldCalculate && (
            <Deck
              onSelectCard={(value) => handleSelectCard(adminName!, value)}
              resetSelection={resetSelection}
            />
          )}
          {shouldCalculate && (
            <div className={styles["average-container"]}>
              <Label className="normal_label" text="Promedio" />
              <br />
              <Label className="bold_label" text={"" + calculateAverage()} />
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default PokerRoom;
