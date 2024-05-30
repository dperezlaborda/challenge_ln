import axios from "axios";

class ApiService {
  private API_BASE_URL = 'https://api.tomorrow.io/v4/weather';

  public async get(endpoint: string) {
    const response = await axios.get(`${this.API_BASE_URL}${endpoint}&apikey=${process.env.REACT_APP_WEATHER_API_KEY}`);
    return response.data;
  }

}

export default new ApiService();