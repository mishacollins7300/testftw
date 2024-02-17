import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://test-front.framework.team/',
  headers: {
    'Content-type': 'application/json',
  },
});

class Api {
  getPaintings(filterParams?: object) {
    return apiClient.get(`/paintings/`, { params: filterParams });
  }

  getAuthors() {
    return apiClient.get(`/authors`);
  }

  getLocations() {
    return apiClient.get(`/locations`);
  }
}

export default new Api();
