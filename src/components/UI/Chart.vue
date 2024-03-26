<template>
  <div ref="chartRef" style="width: 700px; height: 400px"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'AreaChart',
  props: {
    name: {
      type: String,
      required: true,
    },
    options: {
      required: true,
    },
  },
  setup(props) {
    const chartRef = ref<HTMLElement | null>(null)

    onMounted(() => {
      if (chartRef.value) {
        const chart = echarts.init(chartRef.value)

        props.options && chart.setOption(props.options as echarts.EChartsOption)
      }
    })

    return {
      chartRef,
    }
  },
})
</script>
