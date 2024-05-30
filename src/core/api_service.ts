import axios from "axios";

class ApiService {
  private API_BASE_URL = 'https://api.tomorrow.io/v4/weather';

  // /forecast?location=42.3478,-71.0466&apikey=X3A3jAw34uOG6K4NZ8QP2W9EUgrmkxXd'

  public async get(endpoint: string) {
    const response = await axios.get(`${this.API_BASE_URL}${endpoint}`);
    return response.data;
  }

  // Add other methods like post, put, delete as per your requirements
}

export default new ApiService();