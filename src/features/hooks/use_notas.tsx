import { useEffect, useState } from "react";
import ApiService from "../../core/api_service";

export const UseNotas = () => {
  const [notas, setNotas] = useState({
    data: null,
    isLoading: true,
    error: false
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.getNotas();
        setNotas({
          data: response,
          isLoading: false,
          error: false
        });
      } catch (error) {
        setNotas({
          data: null,
          isLoading: false,
          error: true
        });
      }
    };

    fetchData();
  }, []);

  return {
    notas : {
      data: notas.data,
      isLoading: notas.isLoading,
      error: notas.error
    }
  }
}