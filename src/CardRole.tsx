import { Card } from "./Card.tsx";
import { Box, Tooltip, Typography } from "@mui/material";

import { TarotCard } from "./model/TarotCard.tsx";

function CardRoleTitle(props: { title?: string; description?: string }) {
  if (!props.description && !props.title) {
    return <></>;
  }

  if (!props.description) {
    return <Typography className="card-role-title">{props.title}</Typography>;
  }

  return (
    <Tooltip title={props.description} arrow placement="top-start">
      <Typography className="card-role-title">{props.title}</Typography>
    </Tooltip>
  );
}

export function CardRole({
  title,
  description,
  card,
  showCardTitle = true,
}: {
  title?: string;
  description?: string;
  card?: TarotCard;
  ineffable?: boolean;
  showCardTitle?: boolean;
}) {
  return (
    <Box className={"card-role"}>
      <CardRoleTitle title={title} description={description} />
      <Card card={card} showCardTitle={showCardTitle} />
    </Box>
  );
}
