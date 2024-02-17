import { defineStore } from 'pinia';
import Paintings from '@/types/Paintings';
import api from '@/service/api';

export const usePaintingsStore = defineStore({
  id: 'paintings',
  state: () => ({ paintings: <Paintings[]>[] }),
  getters: {
    getAllPaintings(state) {
      return state.paintings;
    },
  },
  actions: {
    async setPaintings(filter?: object) {
      try {
        const data = await api.getPaintings(filter);
        this.paintings = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
