export interface CardData {
  title: string;
  source: string;
  meaning: string;
  reversed: string;
}

export class TarotCard implements CardData {
  title: string;
  source: string;
  meaning: string;
  reversed: string;
  isReversed: boolean = false;
  isIneffable: boolean = false;

  constructor(
    title: string,
    source: string,
    meaning: string,
    reversed: string,
    isReversed: boolean = false,
    isIneffable: boolean = false,
  ) {
    this.title = title;
    this.source = source;
    this.meaning = meaning;
    this.reversed = reversed;
    this.isReversed = isReversed;
    this.isIneffable = isIneffable;
  }

  displayTitle(): string {
    if (this.isIneffable ?? false) {
      return "Ineffable";
    } else if (this.isReversed ?? false) {
      return this.title + " (Reversed)";
    } else {
      return this.title;
    }
  }

  displayMeaning(): string {
    if (this.isIneffable ?? false) {
      return "This card's nature and meaning are not for the living to see or understand. Rather, it is meant for any unseen observers in attendance at the reading.";
    } else if ((this.isReversed ?? false) && this?.reversed != null) {
      return this.reversed;
    } else if (this.meaning != null) {
      return this.meaning;
    } else {
      return "Unknown";
    }
  }
}

export function toTarotCard(card: CardData): TarotCard {
  return new TarotCard(card.title, card.source, card.meaning, card.reversed);
}
