import BaseService from "./BaseService";

class MovieService extends BaseService {
  constructor(path) {
    super();
  }

  async listGenre() {
    try {
      return await this.axiosInstance.get('genre/movie/list');
    } catch(e) {
      return false;
    }
  }

  async searchByTitle(title, page) {
    try {
      return await this.axiosInstance.get('search/movie', { query: title, page });
    } catch(e) {
      return false;
    }
  }
}
export default new MovieService();