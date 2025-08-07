import { type CardData } from "./TarotCard.tsx";
import data from "../data/cards.yaml";

export const CARD_DB = data.cards as unknown as Record<string, CardData>;
