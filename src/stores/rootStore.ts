import { defineStore, StoreDefinition } from 'pinia'

interface RootState {
  state: () => {
    userCards: []
    sellByDays: number[]
    sellByMonth: number[]
  }
}

export const useRootStore: StoreDefinition<RootState> = defineStore(
  'rootStore',
  {
    state: () => ({
      userCards: [
        { title: 'Товаров', value: 19000, image: 'bi bi-star' },
        {
          title: 'Каталогов',
          value: 11000,
          image: 'bi bi-star',
        },
        { title: 'Брендов', value: 353, image: 'bi bi-star' },
        { title: 'Продавцов', value: 353, image: 'bi bi-star' },
      ],
      sellByDays: {
        title: {
          text: 'Продажи по дням',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Продажи'],
        },
        xAxis: {
          type: 'category',
          data: ['15.03', '16.03', '17.03', '18.03', '19.03', '20.03', '21.03'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Продажи',
            type: 'line',
            data: [150, 230, 224, 218, 135, 147, 260],
          },
        ],
      },
      sellByMonth: {
        title: {
          text: 'Продажи по месяцам',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Продажи'],
        },
        xAxis: {
          type: 'category',
          data: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Продажи',
            type: 'line',
            data: [320, 332, 301, 334, 390, 330, 320],
          },
        ],
      },
    }),
    getters: {
      getCards: state => state.userCards,
      getByDay: state => state.sellByDays,
      getByMonth: state => state.sellByDays,
    },
    actions: {},
  },
)
