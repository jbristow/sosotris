import sign from "./assets/cards/CardBacks.jpg";
import { CARD_DB, type CardData } from "./CardData.tsx";
import { Grid, Tooltip } from "@mui/material";

function meaning(card: CardData, inverted: boolean, ineffable: boolean) {
  if (ineffable) {
    return "This card's nature and meaning are not for the living to see or understand. Rather, it is meant for any unseen observers in attendance at the reading.";
  } else if (inverted && card?.reversed != null) {
    return card.reversed;
  } else if (card.meaning != null) {
    return card.meaning;
  } else {
    return "Unknown";
  }
}

function title(card: CardData, inverted: boolean, ineffable: boolean) {
  if (ineffable) {
    return "Ineffable";
  } else if (inverted) {
    return card.title + " (Reversed)";
  } else {
    return card.title;
  }
}

function CardTitle({
  card,
  inverted,
  ineffable,
}: {
  card: CardData | null;
  inverted: boolean;
  ineffable: boolean;
}) {
  if (card == null || card.title == null) {
    return <></>;
  }

  return (
    <Grid className={"card-title"}>
      <Tooltip
        title={
          <Grid className={"card-tooltip-title"}>
            {meaning(card, inverted, ineffable)}
          </Grid>
        }
        arrow
        placement="bottom-start"
      >
        <Grid className={"card-tooltip"}>
          {title(card, inverted, ineffable)}
        </Grid>
      </Tooltip>
    </Grid>
  );
}

function CardImg({
  src,
  title,
  inverted,
  ineffable,
}: {
  src: string | undefined;
  title: string | undefined;
  inverted: boolean;
  ineffable: boolean;
}) {
  if (src == null) {
    return <img src={sign} className={"card-img"} alt="Have You Found It?" />;
  } else if (ineffable) {
    return <img src={sign} className={"card-img"} alt="Ineffable" />;
  } else if (inverted) {
    return <img src={src} className={"card-img inverted"} alt={title} />;
  } else {
    return <img src={src} className={"card-img"} alt={title} />;
  }
}

export function Card(props: {
  id?: string | null;
  inverted: boolean;
  ineffable: boolean;
  height?: string | number;
}) {
  let card: CardData | null;
  if (props.id == null) {
    card = null;
  } else {
    card = CARD_DB[props.id];
  }

  return (
    <Grid className={"card"}>
      <CardTitle
        card={card}
        inverted={props.inverted ?? false}
        ineffable={props.ineffable ?? false}
      />
      <div>
        <CardImg
          src={card?.source}
          title={card?.title}
          inverted={props.inverted}
          ineffable={props.ineffable}
        />
      </div>
    </Grid>
  );
}
