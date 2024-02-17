import { defineStore } from 'pinia';
import Locations from '@/types/Locations';
import api from '@/service/api';

export const useLocationsStore = defineStore({
  id: 'location',
  state: () => ({ location: <Locations[]>[] }),
  getters: {
    getAllLocations(state) {
      return state.location;
    },
    getLocations(state) {
      return (id: number) => state.location.find((location) => location.id === id);
    },
  },
  actions: {
    /* setLocation(location: Array<Locations>) {
      this.location = location;
    }, */
    async setLocation() {
      try {
        const data = await api.getLocations();
        this.location = data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
