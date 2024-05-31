import axios from "axios";

class ApiService {
  private API_BASE_URL = 'https://api.tomorrow.io/v4/weather';

  public async getWeather(endpoint: string) {
    const response = await axios.get(`${this.API_BASE_URL}${endpoint}&apikey=${process.env.REACT_APP_WEATHER_API_KEY}`);
    return response.data;
  }

  public async getNotas() {
    const response = await axios.get('https://run.mocky.io/v3/62dae25c-340c-4ddf-a582-95492001ccaf');
    return response.data;
  }

}

export default new ApiService();