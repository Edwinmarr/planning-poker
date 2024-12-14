export interface CardItem {
  label: string;
  value: number | string;
  amount?: string;
}

export const fibonacci: CardItem[] = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "5", value: 5 },
  { label: "8", value: 8 },
  { label: "13", value: 13 },
  { label: "21", value: 21 },
  { label: "34", value: 34 },
  { label: "55", value: 55 },
  { label: "89", value: 89 },
  { label: "☕", value: "skip" },
  { label: "?", value: "questionMark" },
];

export const mockResults: CardItem[] = [
  { label: "0", value: 0, amount: "1 voto" },
  { label: "1", value: 1, amount: "1 voto" },
  { label: "2", value: 2, amount: "1 voto" },
  { label: "3", value: 3, amount: "1 voto" },
  { label: "5", value: 5, amount: "1 voto" },
  { label: "8", value: 8, amount: "1 voto" },
  { label: "13", value: 13, amount: "1 voto" },
  { label: "21", value: 21, amount: "1 voto" },
];
