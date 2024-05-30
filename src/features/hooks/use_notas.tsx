import { useEffect, useState } from "react";
import ApiService from "../../core/api_service";

export const useNotas = () => {
    const [state, setState] = useState({
      data: null,
      isLoading: true,
      error: false
    });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await ApiService.get("/forecast?location=42.3478,-71.0466&apikey=X3A3jAw34uOG6K4NZ8QP2W9EUgrmkxXd");
          setState({
            data: response,
            isLoading: false,
            error: false
          });
        } catch (error) {
          setState({
            data: null,
            isLoading: false,
            error: true
          });
        }
      };
  
      fetchData();
    }, []);

    return state;
  }