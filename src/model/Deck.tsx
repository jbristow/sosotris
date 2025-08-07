import { type CardData, TarotCard, toTarotCard } from "./TarotCard.tsx";

function shuffle<T>(array: T[]) {
  // Create a shallow copy to avoid modifying the original array in place
  const newArray = [...array];
  return newArray.sort(() => Math.random() - 0.5);
}

export class Deck {
  private cards: string[];
  private readonly cardData: Record<string, CardData>;
  private _ineffable: string;

  constructor(cards: Record<string, CardData>) {
    this.cardData = cards;
    this.cards = Object.keys(cards);
    this._ineffable = this.cards[Math.floor(Math.random() * this.cards.length)];
  }

  get ineffable() {
    return this.cardData[this._ineffable];
  }

  remove(id: string): TarotCard | undefined {
    const cardId = this.cards.find((card) => card === id);
    if (cardId == null) {
      return undefined;
    }
    const card = this.cardData[cardId];
    this.cards = this.cards.filter((card) => card !== id);
    return toTarotCard(card);
  }

  pop(): TarotCard {
    const card = this.cards.pop()!;
    this._ineffable = this.cards[Math.floor(Math.random() * this.cards.length)];
    return toTarotCard(this.cardData[card]);
  }

  shuffle() {
    this.cards = shuffle(this.cards);
  }

  deal(n: number): TarotCard[] {
    return this.cards.slice(0, n).map((key) => {
      const card = toTarotCard(this.cardData[key]);
      card.isReversed = Math.random() > 0.7;
      card.isIneffable = key === this._ineffable;
      return card;
    });
  }
}
