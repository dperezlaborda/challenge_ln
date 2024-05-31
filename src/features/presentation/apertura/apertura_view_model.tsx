import mock from "../../../mock/mock.json";
import { useClima } from "../../hooks/use_clima";
import { MockDataType } from "../../types/mock";

export const AperturaViewModel = () => {

  const weatherData = useClima();
  const mockData:MockDataType[] = mock;

  return {
    weatherData,
    mockData
  }
}
