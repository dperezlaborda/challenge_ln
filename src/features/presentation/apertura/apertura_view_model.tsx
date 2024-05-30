import { useClima } from "../../hooks/use_clima";


export const AperturaViewModel = () => {

  const weatherData = useClima();

  return {
    weatherData
  }
}
