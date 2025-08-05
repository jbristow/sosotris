import "./App.css";
import { CardRole } from "./CardRole.tsx";
import { Card } from "./Card.tsx";
import { Deck } from "./CardData.tsx";
import { Box, Button, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function IneffableOverlay({
  ineffable,
  rotation,
}: {
  ineffable: boolean;
  rotation: number;
}) {
  if (ineffable) {
    return (
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "12%",
          width: "80%",
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <Card ineffable={false} inverted={false} />
      </div>
    );
  } else {
    return <></>;
  }
}

function App() {
  const deck = new Deck();
  const emperor = deck.remove("Le Empereur")!;

  deck.shuffle();
  const signifier = deck.pop();
  const cards = deck.deal(12);
  const ineffableSeen = cards.findIndex((card) => card === deck.ineffable) >= 0;
  const rotation = Math.floor(Math.random() * 20) + 50;

  return (
    <>
      <Grid container>
        <Grid size={12} display="flex" justifyContent="center">
          <div style={{ position: "relative" }}>
            <CardRole
              title={"Signifier"}
              description={
                "The card chosen by the querent to suggest the situation."
              }
              card={signifier}
            />

            <IneffableOverlay ineffable={!ineffableSeen} rotation={rotation} />
          </div>
        </Grid>
        <Grid display="flex" justifyContent="center" size={9}>
          <CardRole
            title={"Mask"}
            description={
              "This is how the querent presents themselves to others."
            }
            card={cards[0]}
            ineffable={deck.ineffable === cards[0]}
          />
          <CardRole
            title={"Performance"}
            description={
              "The events and other factors immediately around the situation."
            }
            card={cards[1]}
            ineffable={deck.ineffable === cards[1]}
          />
          <CardRole
            title={"Audience"}
            description={"The people immediately surrounding the situation."}
            card={cards[2]}
            ineffable={deck.ineffable === cards[2]}
          />
        </Grid>
        <Grid>
          <CardRole
            title={"Rising Action"}
            description={"The next phase of the situation."}
            card={cards[8]}
            ineffable={deck.ineffable === cards[8]}
          />
        </Grid>
        <Grid size={9} display="flex" justifyContent="center">
          <CardRole
            title={"Unconscious"}
            description={
              "The inner nature of the querent as it relates to the situation."
            }
            card={cards[3]}
            ineffable={deck.ineffable === cards[3]}
          />
          <CardRole
            title={"Actor"}
            description={
              "How the querent perceives themselves as relates to the situation."
            }
            card={cards[4]}
            ineffable={deck.ineffable === cards[4]}
          />
        </Grid>
        <Grid>
          <CardRole
            title={"Fate"}
            description={"That which cannot be changed."}
            card={cards[9]}
          />
        </Grid>
        <Grid size={9} display="flex" justifyContent="center">
          <CardRole
            title={"Script"}
            description={
              "The factors that brought the situation to its present state."
            }
            card={cards[5]}
            ineffable={deck.ineffable === cards[5]}
          />
        </Grid>
        <Grid>
          <CardRole
            title={"Revelation"}
            description={"That which will be revealed."}
            card={cards[10]}
            ineffable={deck.ineffable === cards[10]}
          />
        </Grid>
        <Grid size={9} display="flex" justifyContent="center">
          <CardRole
            title={"Stage"}
            description={
              "The backdrop of the situation. This concerns factors less visible than the Performance but sometimes more crucial."
            }
            card={cards[6]}
            ineffable={deck.ineffable === cards[6]}
          />
          <CardRole
            title={"Unexpected"}
            description={"A surprise that lies in wait."}
            card={cards[7]}
            ineffable={deck.ineffable === cards[7]}
          />
        </Grid>
        <Grid>
          <CardRole
            title={"Denouement"}
            description={"The final outcome of the situation."}
            card={cards[11]}
            ineffable={deck.ineffable === cards[11]}
          />
        </Grid>
      </Grid>
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid size={3}>
          <CardRole card={emperor} showCardTitle={false} />
        </Grid>
      </div>
      <Box
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          padding: "4px",
          zIndex: "1000",
        }}
      >
        <Button
          color={"inherit"}
          variant={"contained"}
          startIcon={<GitHubIcon />}
          href="https://github.com/jbristow/sosotris"
          sx={{
            color: "black",
            textTransform: "none",
          }}
        >
          GitHub
        </Button>
      </Box>
    </>
  );
}

export default App;
