import mock from "../../../mock/mock.json";
import { UseNotas } from "../../hooks/use_notas";
import { MockDataType } from "../../types/mock"


export const BodyViewModel = () => {

  const mockData:MockDataType[] = mock;
  const notas = UseNotas();
  const reversedData = [...mockData].reverse();
  const slicedData = [...mockData].slice(0, 3);

  return {
    mockData,
    notas,
    reversedData,
    slicedData
  }
}
