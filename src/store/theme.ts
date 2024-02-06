import { defineStore } from 'pinia';

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({ siteTheme: 'light' }),
  getters: {
    getCurrentTheme(state) {
      return state.siteTheme;
    },
  },
  actions: {
    changeTheme(theme: string) {
      this.siteTheme = theme;
    },
  },
});
