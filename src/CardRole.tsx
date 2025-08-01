import { Card } from "./Card.tsx";
import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
        <div className={"position-title"}>{props.title}</div>
        <div style={{ marginTop: "6px", padding: "0" }}>
          <Tooltip
            title={<div style={{ fontSize: "15px" }}>{props.description}</div>}
            arrow
            placement="right-end"
          >
            <InfoOutlinedIcon fontSize={"small"} />
          </Tooltip>
        </div>
      </div>

      <Card
        id={props.card}
        inverted={inverted ?? false}
        ineffable={props.ineffable ?? false}
      />
    </div>
  );
}
