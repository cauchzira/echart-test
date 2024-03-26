<template>
  <MainLayout :is-mobile="isMobile" :page-title="pageTitle">
    <template #title>
      <div class="q-ma-xl">
        <span class="text-h4">Личный кабинет</span>
      </div>
    </template>
    <Profile class="q-ma-xl" />
  </MainLayout>
</template>

<script lang="ts">
import MainLayout from './layouts/MainLayout.vue'
import Profile from './views/Profile.vue'
import { useWindowResize } from './utils/common.ts'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
    Profile,
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
      default: 'Quasar Main Layout',
    },
  },
  setup() {
    const windowWidth = useWindowResize()

    const isMobile = computed(() => windowWidth.value <= 768)

    return {
      isMobile,
    }
  },
})
</script>

<style lang="scss"></style>
