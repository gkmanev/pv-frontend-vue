<template>
  <div style="width: 100%;">
    <div v-for="bar in bars" :key="bar.variant" class="row mb-1">
      <div class="col-md-12">{{ bar.variant }}:</div>
      <div class="col-md-12 pt-1">
        <b-progress :value="bar.value" :variant="bar.variant"></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bars: [
          { variant: 'success', value: -75 },
          { variant: 'info', value: -10 },
          { variant: 'warning', value: 20 },
          { variant: 'danger', value: 75 },
          { variant: 'primary', value: 75 },
          { variant: 'secondary', value: 75 },
          { variant: 'dark', value: 75 }
        ],
        timer: null
      }
    },
    // mounted() {
    //   this.timer = setInterval(() => {
    //     this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75))
    //   }, 2000)
    // },
    // beforeDestroy() {
    //   clearInterval(this.timer)
    //   this.timer = null
    // }
  }
</script>