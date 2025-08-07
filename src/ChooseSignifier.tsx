import { Deck } from "./model/Deck.tsx";
import { Button, Container, ImageList, Typography } from "@mui/material";
import { Card } from "./Card.tsx";
import { useEffect } from "react";

export function ChooseSignifier({
  deck,
  setSignifierTitle,
}: {
  deck: Deck;
  setSignifierTitle: (
    value: ((prevState: string | null) => string | null) | string | null,
  ) => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
}
