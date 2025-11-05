import { defineStore } from "pinia";
import temps from "../data/tempretures.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps,
    currentTemp: temps[0],
    currentBase: "Coffee",
    currentSyrup: "No Syrup",
    currentCreamer: "No Creamer",

    newName: "",
    savedBeverages: [] as {
      name: string; temp: string; base: string; syrup: string; creamer: string;
    }[],
  }),

  actions: {
    makeBeverage() {
      if (!this.newName) return;
      this.savedBeverages.push({
        name: this.newName,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      });
      this.newName = "";
    },
    showBeverage(d: { name: string; temp: string; base: string; syrup: string; creamer: string }) {
      this.currentTemp = d.temp;
      this.currentBase = d.base;
      this.currentSyrup = d.syrup;
      this.currentCreamer = d.creamer;
    },
  },
});
