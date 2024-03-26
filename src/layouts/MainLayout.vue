<template>
  <q-layout class="bg-secondary" :view="layoutView">
    <q-header class="bg-white">
      <q-toolbar class="toolbar" />
    </q-header>

    <q-drawer
      show-if-above
      v-model="showSidebar"
      side="left"
      :class="{ 'bg-primary': !isMobile }"
      content-class="bg-black"
    >
      <img
        alt="logo"
        class="q-ma-xs"
        src="../assets/icons/logo_mp.svg"
        v-if="!isMobile"
      />
      <q-separator class="bg-accent" />
      <slot name="sidebar"></slot>
    </q-drawer>

    <q-page-container class="overflow-auto">
      <slot :class="{ '': !isMobile, title: isMobile }" name="title"></slot>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'MainLayout',
  props: {
    pageTitle: {
      type: String,
      required: true,
      default: 'Quasar Main Layout',
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const showSidebar = ref(false)

    const layoutView = computed(() =>
      props.isMobile ? 'hHh Lpr lFf' : 'lHh lpR fFf',
    )

    return {
      showSidebar,
      layoutView,
    }
  },
}
</script>

<style lang="scss" scoped>
.toolbar {
  margin-top: 12px;
}
</style>
