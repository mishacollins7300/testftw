import { defineStore } from 'pinia';
import Authors from '@/types/Authors';
import api from '@/service/api';

export const useAuthorsStore = defineStore({
  id: 'authors',
  state: () => ({ authors: <Authors[]>[] }),
  getters: {
    getAllAuthors(state) {
      return state.authors;
    },
    getAuthor(state) {
      console.log(state);
      return (authorId: number) => state.authors.find((author) => author.id === authorId);
    },
  },
  actions: {
    async setAuthors() {
      try {
        const data = await api.getAuthors();
        this.authors = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
