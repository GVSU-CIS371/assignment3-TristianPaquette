<<template>
  <div
    v-if="type !== 'No Syrup'"
    class="syrup"
    :style="{ '--texture-color': syrupColor }"
  ></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import syrups from '../data/syrups.json'

// Which syrup was chosen
const props = defineProps<{ type: string }>()

// Looks up color from syrups.json
const syrupColor = computed(() => {
  const match = syrups.find(s => s.name === props.type)
  return match ? match.color : '#c6c6c6'
})
</script>

<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
  background: repeating-linear-gradient(
    45deg,
    var(--texture-color),
    var(--texture-color) 10px,
    rgba(225, 207, 149, 1) 10px,
    rgba(225, 207, 149, 1) 20px
  );
}
</style>
