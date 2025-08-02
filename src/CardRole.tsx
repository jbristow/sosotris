import { Card } from "./Card.tsx";
import { Box, Tooltip, Typography } from "@mui/material";

export function CardRole(props: {
  title: string;
  ord: number;
  description: string;
  card?: string;
  ineffable?: boolean;
}) {
  const inverted = Math.random() * 3 > 2;
  return (
    <Box className={"card-role"}>
      <Tooltip title={props.description} arrow placement="top-start">
        <Typography className="card-role-title">{props.title}</Typography>
      </Tooltip>
      <Card
        id={props.card}
        inverted={inverted ?? false}
        ineffable={props.ineffable ?? false}
      />
    </Box>
  );
}
