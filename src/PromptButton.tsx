import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Alert, Box, Button, Snackbar } from "@mui/material";
import * as React from "react";
import { TarotCard } from "./model/TarotCard.tsx";

function generate(signifier: TarotCard, cards: TarotCard[]) {
  let textToCopy = `Give a tarot reading in what some call the "King and Staff" method. The governing metaphor of the reading is that of a theatrical play and its elements.  It also thematically aligns with the two act play titled "The King in Yellow".

To some, The King in Yellow is a two-act play in a slim book. In the play, a stranger arrives at a masked ball in the far-off royal court of Yhtill in Carcosa. Calling himself the Phantom of Truth, he reveals that of all the partygoers only he wears no mask. He claims his own pallid mask, a porcelain rictus, is his true face. This revelation somehow signals the end of the partygoers’ world.

If a card is listed as "Ineffable", then its nature and meaning are not for the living to see or understand. Rather, it is meant for any unseen observers in attendance at the reading. 

This is a list of positions and their meanings in the order that they are dealt.

1. "Signifier" - Suggests the situation and is chosen by the querant. 
2. "Mask" - Signifies how the querent presents themselves to other. 
3. "Performance" - Represents the events and factors immediately around the situation.
4. "Audience" - Represents The people immediately surrounding the situation. 
5. "Unconscious" - Represents the inner nature of the querent as it relates to the situation.
6. "Actor" - Represents how the querent perceives themself as relates to the situation. 
7. "Script" - Represents the factors that brought the situation to its present state. 
8. "Stage" - Represents the backdrop of the situation. (This concerns factors less visible than the Performance but sometimes more crucial) 
9. "Unexpected" - Represents a surprise that lies in wait. 
10. "Rising Action" - Represents the next phase of the situation. 
11. "Fate" - Represents what cannot be changed. 
12. "Revelation" - Represents that which will be revealed. 
13. "Denouement" - Represents the final outcome of the situation. 

This is a list of the cards drawn:

1. ${signifier.displayTitle()}`;

  cards.forEach((card, index) => {
    textToCopy += `\n${index + 2}. ${card.displayTitle()}`;
  });
  return textToCopy;
}
export function PromptButton({
  signifier,
  cards,
}: {
  signifier: TarotCard;
  cards: TarotCard[];
}) {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openFail, setOpenFail] = React.useState(false);
  const handleCopy = async (signifier: TarotCard, cards: TarotCard[]) => {
    try {
      await navigator.clipboard.writeText(generate(signifier, cards));
      setOpenSuccess(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setOpenFail(true);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "0",
        left: "0",
        padding: "4px",
        zIndex: "1000",
      }}
    >
      <Button
        color={"inherit"}
        variant={"contained"}
        startIcon={<ContentCopyIcon />}
        onClick={() => handleCopy(signifier, cards)}
        sx={{
          color: "black",
          textTransform: "none",
        }}
      >
        Copy as Prompt
      </Button>
      <Snackbar
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
        autoHideDuration={6000}
        message={<Alert severity="success">Text copied to clipboard.</Alert>}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
      <Snackbar
        open={openFail}
        onClose={() => setOpenFail(false)}
        autoHideDuration={6000}
        message={<Alert severity="error">Failed to copy text.</Alert>}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Box>
  );
}
