<template>
  <div class="calc__container">
    <calc/>
  </div>
</template>

<script>
import Calc from "@/components/Calc"
export default {
  components: {Calc}
}
</script>

<style scoped lang="sass">

.calc__container
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center
  align-items: center

</style>