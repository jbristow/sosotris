import sign from "./assets/cards/CardBacks.jpg";
import { CARD_DB, type CardData } from "./CardData.tsx";
import { Tooltip } from "@mui/material";

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
    <div className={"card-title"}>
      <Tooltip
        title={
          <div className={"card-tooltip-title"}>
            {meaning(card, inverted, ineffable)}
          </div>
        }
        arrow
        placement="bottom-start"
      >
        <div className={"card-tooltip"}>{title(card, inverted, ineffable)}</div>
      </Tooltip>
    </div>
  );
}

function CardImg({
  src,
  title,
  inverted,
  ineffable,
  height = "200px",
}: {
  src: string | undefined;
  title: string | undefined;
  inverted: boolean;
  ineffable: boolean;
  height: string | number | undefined;
}) {
  if (src == null) {
    return (
      <img
        src={sign}
        className={"card-img"}
        alt="Have You Found It?"
        height={height}
      />
    );
  } else if (ineffable) {
    return (
      <img src={sign} className={"card-img"} alt="Ineffable" height={height} />
    );
  } else if (inverted) {
    return (
      <img
        src={src}
        className={"card-img inverted"}
        alt={title}
        height={height}
      />
    );
  } else {
    return <img src={src} className={"card-img"} alt={title} height={height} />;
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
    <div className={"card"}>
      <CardTitle
        card={card}
        inverted={props.inverted ?? false}
        ineffable={props.ineffable ?? false}
      />
      <CardImg
        src={card?.source}
        title={card?.title}
        inverted={props.inverted}
        ineffable={props.ineffable}
        height={props.height}
      />
    </div>
  );
}
