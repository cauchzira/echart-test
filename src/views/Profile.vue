<template>
  <div class="profile">
    <div class="cards">
      <InfoCard
        v-for="card in userCards"
        :key="card.title"
        :title="card.title"
        :value="card.value"
      >
        <template #icon>
          <q-icon size="lg" :class="card.image" />
        </template>
      </InfoCard>
    </div>

    <div class="charts">
      <Chart name="day" :options="dataByDay" />

      <Chart name="month" :options="dataByMonth" />
    </div>
  </div>
</template>

<script lang="ts">
import InfoCard from '../components/UI/InfoCard.vue'
import { useRootStore } from '../stores/rootStore.ts'
import Chart from '../components/UI/Chart.vue'

export default {
  name: 'Profile',
  components: {
    Chart,
    InfoCard,
  },
  setup() {
    const store = useRootStore()

    const userCards = store.getCards
    const dataByDay = store.getByDay
    const dataByMonth = store.getByMonth

    return {
      userCards,
      dataByDay,
      dataByMonth,
    }
  },
}
</script>

<style scoped lang="scss">
.profile {
  display: flex;
  flex-direction: column;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.charts {
  display: flex;
  flex-wrap: wrap;
}
</style>
