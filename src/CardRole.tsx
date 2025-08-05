import { Card } from "./Card.tsx";
import { Box, Tooltip, Typography } from "@mui/material";
import type { CardData } from "./CardData.tsx";

function CardRoleTitle(props: {
  title: string | undefined;
  description: string | undefined;
}) {
  if (props.description && props.title) {
    return (
      <Tooltip title={props.description} arrow placement="top-start">
        <Typography className="card-role-title">{props.title}</Typography>
      </Tooltip>
    );
  } else if (props.title) {
    return <Typography className="card-role-title">{props.title}</Typography>;
  } else {
    return <></>;
  }
}

export function CardRole({
  title,
  description,
  card,
  ineffable,
  showCardTitle = true,
}: {
  title?: string;
  description?: string;
  card?: CardData;
  ineffable?: boolean;
  showCardTitle?: boolean;
}) {
  return (
    <Box className={"card-role"}>
      <CardRoleTitle title={title} description={description} />
      <Card
        card={card}
        ineffable={ineffable ?? false}
        showCardTitle={showCardTitle}
      />
    </Box>
  );
}
