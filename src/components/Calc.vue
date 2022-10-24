<template>
  <div class="container">
    <div class="display">234234</div>
    <div class="btn">C</div>
    <div class="btn">+/-</div>
    <div class="btn">%</div>
    <div class="btn operator">&divide;</div>
    <div class="btn">7</div>
    <div class="btn">8</div>
    <div class="btn">9</div>
    <div class="btn operator">&times;</div>
    <div class="btn">4</div>
    <div class="btn">5</div>
    <div class="btn">6</div>
    <div class="btn operator">-</div>
    <div class="btn">1</div>
    <div class="btn">2</div>
    <div class="btn">3</div>
    <div class="btn operator">+</div>
    <div class="btn zero">0</div>
    <div class="btn">.</div>
    <div class="btn operator">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: ""

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="sass">

*
  font-family: 'Montserrat',sans-serif
  transition: 0.3s all
  font-weight: 400

.container
  font-size: 40px
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-auto-columns: minmax(50px, auto)
  grid-gap: 20px
  text-align: center
  background-color: #202125
  padding: 20px
  border-radius: 20px
  color: #f7f7f9

.display
  grid-column: 1/5
  text-align: right

.zero
  grid-column: 1/3

.btn
  padding: 15px
  border-radius: 50px

.operator
  background-color: #4d4e52

</style>