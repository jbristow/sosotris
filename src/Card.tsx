import sign from "./assets/cards/CardBacks.jpg";
import { type CardData } from "./CardData.tsx";
import { Tooltip } from "@mui/material";

function meaning(card: CardData, ineffable: boolean) {
  if (ineffable) {
    return "This card's nature and meaning are not for the living to see or understand. Rather, it is meant for any unseen observers in attendance at the reading.";
  } else if ((card.isReversed ?? false) && card?.reversed != null) {
    return card.reversed;
  } else if (card.meaning != null) {
    return card.meaning;
  } else {
    return "Unknown";
  }
}

function title(card: CardData, ineffable: boolean) {
  if (ineffable) {
    return "Ineffable";
  } else if (card.isReversed ?? false) {
    return card.title + " (Reversed)";
  } else {
    return card.title;
  }
}

function CardTitle({
  card,
  ineffable,
  showCardTitle = true,
}: {
  card?: CardData;
  ineffable: boolean;
  showCardTitle?: boolean;
}) {
  if (!showCardTitle || card == null || card.title == null) {
    return <></>;
  }

  return (
    <div className={"card-title"}>
      <Tooltip
        title={
          <div style={{ fontSize: "1.25em" }} className={"card-tooltip-title"}>
            {meaning(card, ineffable)}
          </div>
        }
        arrow
        placement="bottom-start"
      >
        <div className={"card-tooltip"}>{title(card, ineffable)}</div>
      </Tooltip>
    </div>
  );
}

function CardImg({ card, ineffable }: { card?: CardData; ineffable: boolean }) {
  if (card == null || card.source == null) {
    return <img src={sign} className={"card-img"} alt="Have You Found It?" />;
  } else if (ineffable) {
    return <img src={sign} className={"card-img"} alt="Ineffable" />;
  } else if (card.isReversed ?? false) {
    return (
      <img src={card.source} className={"card-img inverted"} alt={card.title} />
    );
  } else {
    return <img src={card.source} className={"card-img"} alt={card.title} />;
  }
}

export function Card({
  card,
  ineffable,
  showCardTitle = true,
}: {
  card?: CardData;
  inverted: boolean;
  ineffable: boolean;
  showCardTitle?: boolean;
}) {
  return (
    <div className={"card"}>
      <CardTitle
        card={card}
        ineffable={ineffable}
        showCardTitle={showCardTitle}
      />
      <div>
        <CardImg card={card} ineffable={ineffable} />
      </div>
    </div>
  );
}
