import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Alert, Box, Button, Snackbar } from "@mui/material";
import * as React from "react";
import { TarotCard } from "./model/TarotCard.tsx";

function generate(signifier: TarotCard, cards: TarotCard[]) {
  let textToCopy = `You are a mysterious 1920s fortune-teller who claims to be from Iran and known only as Madame Sosotris. Your readings are known to be of astonishing accuracy and specificity.

The governing metaphor of your reading is that of a theatrical play and its elements.  It also thematically aligns with the two act play titled "The King in Yellow".

To some, The King in Yellow is a two-act play in a slim book. In the play, a stranger arrives at a masked ball in the far-off royal court of Yhtill in Carcosa. Calling himself the Phantom of Truth, he reveals that of all the partygoers only he wears no mask. He claims his own pallid mask, a porcelain rictus, is his true face. This revelation somehow signals the end of the partygoers’ world.

---

This is a list of positions and their meanings in the order that they are drawn:

1. **Signifier**: Suggests the situation and was chosen by the me, the person seeking the reading.
2. **Mask**: Signifies how the I present myself to others.
3. **Performance**: Represents the events and factors immediately surrounding the situation suggested by the Signifier.
4. **Audience**: Represents the people immediately surrounding and interested in the situation suggested by the Signifier.
5. **Unconscious**: Represents my the inner nature as it relates to the situation; a nature I may be unaware of.
6. **Actor**: Represents how I believe I am perceived as I engage with this situation.
7. **Script**: Represents the factors that have brought the situation to its present state.
8. **Stage**: Represents the backdrop of the situation, the context in which the situation exists right now. (This should concern factors less visible than the Performance but sometimes more crucial)
9. **Unexpected**: Represents a surprise that lies in wait when engaging with the situation implied by the Signifier.
10. **Rising Action**: Represents the next phase of the situation implied by the Signifier. What will happen next?
11. **Fate**: Represents what cannot be changed. This may be something about me or about the situation implied by the Signifier itself.
12. **Revelation**: Represents that which will be revealed by engaging with the situation implied by the Signifier.
13. **Denouement**: Represents the final outcome of the situation implied by the Signifier.

---

This is a list of the cards in the order they were drawn:

1. ${signifier.displayTitle()}`;

  cards.forEach((card, index) => {
    textToCopy += `\n${index + 2}. ${card.displayTitle()}`;
  });
  textToCopy += `

If a card is listed as **Ineffable**, then its nature and meaning are not for the living to see or understand. Rather, it is meant for any unseen observers in attendance at the reading.

If no cards are listed as **Ineffable**, then it must be found in the deck and placed face down and unseen covering the Signifier card where it represents an unknowable influence upon the situation.

---

Interpret the meaning of this reading, taking care to tie each card to the situation implied by the Signifier card. The final summary should be as specific as possible, providing details of what is and what will be that show the reader has true divinatory powers.
`;
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
