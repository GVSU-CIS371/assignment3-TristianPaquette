<template>
  <div>
    <Beverage
      :isIced="beverageStore.currentTemp === 'Cold'"
      :base="beverageStore.currentBase"
      :creamer="beverageStore.currentCreamer"
      :syrup="beverageStore.currentSyrup"
    />

    <!-- Temperature -->
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>

    <!-- Base -->
    <ul class="options-row">
      <li v-for="b in ['Black Tea','Green Tea','Coffee']" :key="b">
        <label>
          <input type="radio" name="base" :value="b" v-model="beverageStore.currentBase" />
          {{ b }}
        </label>
      </li>
    </ul>

    <!-- Syrup -->
    <ul class="options-row">
      <li v-for="s in ['No Syrup','Vanilla','Caramel','Hazelnut']" :key="s">
        <label>
          <input type="radio" name="syrup" :value="s" v-model="beverageStore.currentSyrup" />
          {{ s }}
        </label>
      </li>
    </ul>

    <!-- Creamer -->
    <ul class="options-row">
      <li v-for="c in ['No Creamer','Milk','Cream','Half & Half']" :key="c">
        <label>
          <input type="radio" name="creamer" :value="c" v-model="beverageStore.currentCreamer" />
          {{ c === 'No Creamer' ? 'No Cream' : c }}
        </label>
      </li>
    </ul>

    <!-- Name + Make Beverage  -->
    <div class="make-row">
      <label for="bevName" style="margin-right:6px;">Name</label>
      <input
        id="bevName"
        v-model="beverageStore.newName"
        type="text"
        placeholder="Beverage Name"
        class="name-input"
      />
      <button class="make-button" @click="beverageStore.makeBeverage">
        🍺 Make Beverage
      </button>
    </div>
  </div>

  <!-- Saved beverages -->
  <div id="beverage-container" style="margin-top: 20px">
    <ul v-if="beverageStore.savedBeverages.length" class="options-row" style="flex-wrap: wrap">
      <li v-for="d in beverageStore.savedBeverages" :key="d.name">
        <label>
          <input
            type="radio"
            name="savedBeverage"
            :value="d.name"
            @change="beverageStore.showBeverage(d)"
          />
          {{ d.name }}
        </label>
      </li>
    </ul>
    <div v-else>No saved beverages yet.</div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
/* shows rows side by side */
.options-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin: 0.25rem 0;
  justify-content: center;
}
</style>
