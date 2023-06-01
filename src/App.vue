<script setup>
import conv from "./convolucion";
import { ref } from 'vue';
import Chart from "./components/Chart.vue"

let x_text = ref("3 2 1 4");
let h_text = ref("2 1 3");
let x_dataPoints = ref([]);
let h_dataPoints = ref([]);
let result_dataPoints = ref([]);
let result_text = ref("");

function doConv() {
  const x_array = x_text.value.trim().split(" ");
  const h_array = h_text.value.trim().split(" ");

  x_dataPoints = x_array;
  h_dataPoints = h_array;

  console.log(h_array);


  const result_array = conv(x_array, h_array);
  result_text.value = result_array.join(" ");
  result_dataPoints =  result_array;
}
</script>

<template>
  <div>
    <h1 class="text-center p-4">Convolución</h1>
    <div class="flex justify-center">
      <div class="w-64">
        <div class="w-64">
          <h4>
            x =
          </h4>
          <div class="flex juustify-center w-full">
            [
            <textarea class="w-full" v-model="x_text"></textarea>
            ]
          </div>
        </div>
        <div class="w-64">
          <h4>
            h =
          </h4>
          <div class="flex juustify-center w-full">
            [
            <textarea class="w-full" v-model="h_text"></textarea>
            ]
          </div>
        </div>

        <div class="w-64 pt-4">
          <button type="button" class="btn btn-primary w-full" @click="doConv">Calcular</button>
          <h4>
            x ∗ h
          </h4>
          <div class="flex juustify-center w-full">
            [
            <span>{{ result_text }}</span>
            ]
          </div>
        </div>
        <Chart :points="x_dataPoints" title="x" color="#e61c66"></Chart>
        <Chart :points="h_dataPoints" title="h" color="#f2600c"></Chart>
        <Chart :points="result_dataPoints" title="x ∗ h" color="#036bfc"></Chart>
      </div>

    </div>

  </div>
</template>

<style scoped>
header {
  font-size: 24px;
  font-weight: 600;
}

h4 {
  font-weight: 500;
}

/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
