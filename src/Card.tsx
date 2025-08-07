import { Tooltip } from "@mui/material";
import { TarotCard } from "./model/TarotCard.tsx";

function CardTitle({
  card,
  showCardTitle = true,
}: {
  card?: TarotCard;
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
            {card.displayMeaning()}
          </div>
        }
        arrow
        placement="bottom-start"
      >
        <div className={"card-tooltip"}>{card.displayTitle()}</div>
      </Tooltip>
    </div>
  );
}

function CardImg({ card }: { card?: TarotCard }) {
  if (card == null || card.source == null) {
    return (
      <img
        src="/cards/CardBacks.jpg"
        className={"card-img"}
        alt="Have You Found It?"
      />
    );
  }

  if (card.isIneffable) {
    return (
      <img src="/cards/CardBacks.jpg" className={"card-img"} alt="Ineffable" />
    );
  }

  if (card.isReversed) {
    return (
      <img src={card.source} className={"card-img inverted"} alt={card.title} />
    );
  }

  return <img src={card.source} className={"card-img"} alt={card.title} />;
}

export function Card({
  card,
  showCardTitle = true,
}: {
  card?: TarotCard;
  showCardTitle?: boolean;
}) {
  return (
    <div className={"card"}>
      <CardTitle card={card} showCardTitle={showCardTitle} />
      <div>
        <CardImg card={card} />
      </div>
    </div>
  );
}
