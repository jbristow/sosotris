import "./App.css";
import { Deck } from "./model/Deck.tsx";
import { CARD_DB } from "./model/CardData.tsx";
import { TarotReading } from "./TarotReading.tsx";
import * as React from "react";
import { ChooseSignifier } from "./ChooseSignifier.tsx";

function App() {
  const deck = new Deck(CARD_DB);
  deck.remove("Le_Empereur");

  const [signifierTitle, setSignifierTitle] = React.useState<string | null>(
    null,
  );

  if (signifierTitle == null) {
    return (
      <ChooseSignifier deck={deck} setSignifierTitle={setSignifierTitle} />
    );
  } else {
    return (
      <TarotReading
        signifierTitle={signifierTitle}
        resetFn={() => setSignifierTitle(null)}
      />
    );
  }
}

export default App;
