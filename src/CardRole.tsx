import { Card } from "./Card.tsx";
import { Tooltip } from "@mui/material";

export function CardRole(props: {
  title: string;
  ord: number;
  description: string;
  card?: string;
  ineffable?: boolean;
}) {
  const inverted = Math.random() * 3 > 2;
  return (
    <div className={"card-role"}>
      <div className={"card-role-title"}>
        <Tooltip title={props.description} arrow placement="top-start">
          <div>{props.title}</div>
        </Tooltip>
      </div>
      <Card
        id={props.card}
        inverted={inverted ?? false}
        ineffable={props.ineffable ?? false}
      />
    </div>
  );
}
