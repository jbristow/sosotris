import { type CardData, TarotCard, toTarotCard } from "./TarotCard.tsx";

function shuffle<T>(array: T[]) {
  // Create a shallow copy to avoid modifying the original array in place
  const newArray = [...array];
  return newArray.sort(() => Math.random() - 0.5);
}

export class Deck {
  private _cards: string[];
  private readonly cardData: Record<string, CardData>;
  private _ineffable: string;

  constructor(cards: Record<string, CardData>) {
    this.cardData = cards;
    this._cards = Object.keys(cards);
    this._ineffable =
      this._cards[Math.floor(Math.random() * this._cards.length)];
  }

  get ineffable() {
    return this.cardData[this._ineffable];
  }
  get cards() {
    return this._cards;
  }

  remove(id: string): TarotCard | undefined {
    const cardId = this._cards.find((card) => card === id);
    if (cardId == null) {
      return undefined;
    }
    const card = this.cardData[cardId];
    this._cards = this._cards.filter((card) => card !== id);
    return toTarotCard(card);
  }

  get(id: string): TarotCard {
    return toTarotCard(this.cardData[id]!);
  }

  pop(): TarotCard {
    const card = this._cards.pop()!;
    this._ineffable =
      this._cards[Math.floor(Math.random() * this._cards.length)];
    return toTarotCard(this.cardData[card]);
  }

  shuffle() {
    this._cards = shuffle(this._cards);
  }

  deal(n: number): TarotCard[] {
    return this._cards.slice(0, n).map((key) => {
      const card = toTarotCard(this.cardData[key]);
      card.isReversed = Math.random() > 0.7;
      card.isIneffable = key === this._ineffable;
      return card;
    });
  }
}
