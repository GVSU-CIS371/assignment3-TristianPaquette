<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <!-- Only shows Creamer when chosen, otherwise show Syrup up on top -->
        <Creamer v-if="creamer !== 'No Creamer'" :type="creamer" />
        <Syrup v-else-if="syrup !== 'No Syrup'" :type="syrup" />
      </template>
      <template v-slot:mid>
        <!-- If both chosen, syrups middle layer -->
        <Syrup v-if="creamer !== 'No Creamer' && syrup !== 'No Syrup'" :type="syrup" />
      </template>
      <template v-slot:bottom>
        <Base :type="base" />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  base?: string;
  creamer?: string;
  syrup?: string;
};
defineProps<Props>();
</script>
