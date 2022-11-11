export interface ICounter {
  isbn13: string | undefined;
  count: number | undefined;
  setCount: React.Dispatch<React.SetStateAction<number | undefined>>;
}
