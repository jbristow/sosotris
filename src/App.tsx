import "./App.css";
import { Deck } from "./model/Deck.tsx";
import { CARD_DB } from "./model/CardData.tsx";
import { TarotReading } from "./TarotReading.tsx";
import * as React from "react";
import { Button, Container, ImageList, Typography } from "@mui/material";
import { Card } from "./Card.tsx";

function App() {
  const deck = new Deck(CARD_DB);
  deck.remove("Le_Empereur");

  const [signifierTitle, setSignifierTitle] = React.useState<string | null>(
    null,
  );

  if (signifierTitle == null) {
    return (
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5em",
            fontWeight: "bold",
            fontFamily: "serif",
            fontStyle: "italic",
          }}
        >
          Select a Signifier
        </Typography>
        <ImageList
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {deck.cards.map((key) => {
            const card = deck.get(key);
            return (
              <Button
                onClick={() => setSignifierTitle(key)}
                key={key}
                sx={{ width: "10em", fontSize: "0.95em" }}
              >
                <Card card={card} showCardTitle={false} />
              </Button>
            );
          })}
        </ImageList>
      </Container>
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
