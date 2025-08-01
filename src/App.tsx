import "./App.css";
import emperor from "./assets/cards/IV_L_Empereur.png";
import { CardRole } from "./CardRole.tsx";
import { unshuffled } from "./CardData.tsx";

function shuffle<T>(array: T[]) {
  // Create a shallow copy to avoid modifying the original array in place
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at index i and j
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function App() {
  const cards = shuffle(unshuffled());
  const ineffable = Math.floor(Math.random() * cards.length);

  return (
    <>
      <div className={"container"}>
        <div style={{ justifyContent: "flex-end" }}>
          <div>
            <img src={emperor} className={"emperor"} alt={"IV: L'Empereur"} />
            <div>{ineffable}</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div className={"cardrow"}>
            <div className={"cardgroup"} style={{ flexGrow: 4 }}>
              <CardRole
                title={"Signifier"}
                ord={1}
                description={
                  "The card chosen by the querent to suggest the situation."
                }
                card={cards[0]}
                ineffable={ineffable === 0 || ineffable > 12}
              />
            </div>
          </div>
          <div className={"cardrow"}>
            <div className={"cardgroup-left"}>
              <CardRole
                title={"Mask"}
                ord={2}
                description={
                  "This is how the querent presents themselves to others."
                }
                card={cards[1]}
                ineffable={ineffable === 1}
              />
              <CardRole
                title={"Performance"}
                ord={3}
                description={
                  "The events and other factors immediately around the situation."
                }
                card={cards[2]}
                ineffable={ineffable === 2}
              />
              <CardRole
                title={"Audience"}
                ord={4}
                description={
                  "The people immediately surrounding the situation."
                }
                card={cards[3]}
                ineffable={ineffable === 3}
              />
            </div>
            <div className={"cardgroup"}>
              <CardRole
                title={"Rising Action"}
                ord={10}
                description={"The next phase of the situation."}
                card={cards[9]}
                ineffable={ineffable === 9}
              />
            </div>
          </div>
          <div className={"cardrow"}>
            <div className={"cardgroup-left"}>
              <CardRole
                title={"Unconscious"}
                ord={5}
                description={
                  "The inner nature of the querent as it relates to the situation."
                }
                card={cards[4]}
                ineffable={ineffable === 4}
              />
              <CardRole
                title={"Actor"}
                ord={6}
                description={
                  "How the querent perceives themselves as relates to the situation."
                }
                card={cards[5]}
                ineffable={ineffable === 5}
              />
            </div>
            <div className={"cardgroup"}>
              <CardRole
                title={"Fate"}
                ord={11}
                description={"That which cannot be changed."}
                card={cards[10]}
              />
            </div>
          </div>
          <div className={"cardrow"}>
            <div className={"cardgroup-left"}>
              <CardRole
                title={"Script"}
                ord={7}
                description={
                  "The factors that brought the situation to its present state."
                }
                card={cards[6]}
                ineffable={ineffable === 6}
              />
            </div>
            <div className={"cardgroup"}>
              <CardRole
                title={"Revelation"}
                ord={12}
                description={"That which will be revealed."}
                card={cards[11]}
                ineffable={ineffable === 11}
              />
            </div>
          </div>
          <div className={"cardrow"}>
            <div className={"cardgroup-left"}>
              <CardRole
                title={"Stage"}
                ord={8}
                description={
                  "The backdrop of the situation. This concerns factors less visible than the Performance but sometimes more crucial."
                }
                card={cards[7]}
                ineffable={ineffable === 7}
              />
              <CardRole
                title={"Unexpected"}
                ord={9}
                description={"A surprise that lies in wait."}
                card={cards[8]}
                ineffable={ineffable === 8}
              />
            </div>
            <div className={"cardgroup"}>
              <CardRole
                title={"Denouement"}
                ord={13}
                description={"The final outcome of the situation."}
                card={cards[12]}
                ineffable={ineffable === 12}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
