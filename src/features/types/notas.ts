import { MockDataType } from "./mock";

export interface NotasInterface {
  data: null | MockDataType[];
  isLoading: boolean;
  error: boolean;
}