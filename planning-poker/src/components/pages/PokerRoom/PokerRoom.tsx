import { useEffect, useState } from "react";
import styles from "./PokerRoom.module.scss";
import FormCreateUser from "../../molecules/FormCreateUser/FormCreateUser";
import Table from "../../atoms/Table/Table";
import UserProfile from "../../atoms/UserProfile/UserProfile";
import { UserRoles } from "../../../config/types";
import Deck from "../../molecules/Deck/Deck";

type SelectedCards = Record<string, number | string>;

const PokerRoom = () => {
  const [adminName, setAdminName] = useState<string | null>(null);
  const [adminRole, setAdminRole] = useState<UserRoles | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | string>();
  const [selectedCards, setSelectedCards] = useState<SelectedCards>({});
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

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
    setIsCalculated(true);
  };

  const handleResetGame = () => {
    setSelectedCard(undefined);
    setSelectedCards({});
    setIsCalculated(false);
  };

  useEffect(() => {
    // Recuperar el nombre del administrador desde sessionStorage
    const name = sessionStorage.getItem("adminName");
    const adminRole = sessionStorage.getItem("adminRole") as UserRoles;
    setAdminName(name);
    setAdminRole(adminRole);

    // Simular la selección de cartas de los usuarios mock
    const mockSelectedCards: SelectedCards = {
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
    return sum / numericValues.length;
  };

  return (
    <>
      {!adminName && <FormCreateUser onCreateUser={handleCreateUser} />}
      <article className={styles["root-container"]}>
        <div className={styles["table-area"]}>
          <div className={styles["row"]}>
            <UserProfile
              ready={selectedCards["Andrés"] !== undefined}
              className="profile-player"
              name={"Andrés"}
              cardValue={selectedCards["Andrés"]}
              shouldCalculate={isCalculated}
            />
            <UserProfile
              ready={selectedCards["Caro"] !== undefined}
              className="profile-player"
              name={"Caro"}
              cardValue={selectedCards["Caro"]}
              shouldCalculate={isCalculated}
            />
            <UserProfile
              ready={selectedCards["Valeria"] !== undefined}
              className="profile-player"
              name={"Valeria"}
              cardValue={selectedCards["Valeria"]}
              shouldCalculate={isCalculated}
            />
          </div>
          <div className={styles["row--middle"]}>
            <UserProfile
              ready={selectedCards["Pedro"] !== undefined}
              className="profile-player"
              name={"Pedro"}
              cardValue={selectedCards["Pedro"]}
              shouldCalculate={isCalculated}
            />
            {
              <Table
                onCalculateAverage={handleCalculateAverage}
                onResetVotes={handleResetGame}
                showAverageButton={
                  adminRole === UserRoles.PLAYER &&
                  selectedCard !== null &&
                  !isCalculated
                }
                showResetButton={isCalculated}
              />
            }
            <UserProfile
              ready={selectedCards["David"] !== undefined}
              className="profile-player"
              name={"David"}
              cardValue={selectedCards["David"]}
              shouldCalculate={isCalculated}
            />
          </div>
          <div className={styles["row"]}>
            <UserProfile
              ready={selectedCards["Aris"] !== undefined}
              className="profile-player"
              name={"Aris"}
              cardValue={selectedCards["Aris"]}
              shouldCalculate={isCalculated}
            />
            {adminName && (
              <UserProfile
                ready={!!selectedCard}
                className={`profile-${adminRole}`}
                name={adminName}
                cardValue={selectedCard}
                shouldCalculate={isCalculated}
              />
            )}
            <UserProfile
              ready={selectedCards["Juan"] !== undefined}
              className="profile-player"
              name={"Juan"}
              cardValue={selectedCards["Juan"]}
              shouldCalculate={isCalculated}
            />
          </div>
        </div>

        <div className={styles["deck-area"]}>
          {adminRole === UserRoles.PLAYER && (
            <Deck
              onSelectCard={(value) => handleSelectCard(adminName!, value)}
            />
          )}
          {isCalculated && (
            <div className={styles["average-container"]}>
              <h3>Promedio de las cartas seleccionadas:</h3>
              <p>{calculateAverage()}</p>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default PokerRoom;
