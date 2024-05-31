import { useEffect, useState } from "react";
import ApiService from "../../core/api_service";

export const useClima = () => {
    const [clima, setClima] = useState({
      data: null,
      isLoading: true,
      error: false
    });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await ApiService.getWeather(`/forecast?location=34.6036,-58.3816`);
          setClima({
            data: response?.timelines,
            isLoading: false,
            error: false
          });
        } catch (error) {
          setClima({
            data: null,
            isLoading: false,
            error: true
          });
        }
      };
  
      fetchData();
    }, []);

    return {
      clima : {
        data: clima.data,
        isLoading: clima.isLoading,
        error: clima.error
      }
    };
  }