<template>
  <div class="container">
    <div class="display">{{ current || 0}}</div>
    <div @click="clear()" class="btn">C</div>
    <div @click="sign()" class="btn">+/-</div>
    <div @click="percent()" class="btn">%</div>
    <div class="btn operator">&divide;</div>
    <div @click="append(7)" class="btn">7</div>
    <div @click="append(8)" class="btn">8</div>
    <div @click="append(9)" class="btn">9</div>
    <div class="btn operator">&times;</div>
    <div @click="append(4)" class="btn">4</div>
    <div @click="append(5)" class="btn">5</div>
    <div @click="append(6)" class="btn">6</div>
    <div class="btn operator">-</div>
    <div @click="append(1)" class="btn">1</div>
    <div @click="append(2)" class="btn">2</div>
    <div @click="append(3)" class="btn">3</div>
    <div class="btn operator">+</div>
    <div @click="append(0)" class="btn zero">0</div>
    <div @click="dot()" class="btn">.</div>
    <div class="btn operator">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "324",

    }
  },
  methods: {
    clear: function () {
      this.current = ""
    },
    sign: function () {
      this.current = this.current.charAt(0) === "-" ?
          this.current.slice(1) : `-${this.current}`
    },
    percent: function () {
      this.current = `${ parseFloat(this.current) / 100 }`
    },
    append: function (number) {
      this.current += number
    },
    dot: function () {
      if (!this.current.includes('.'))
        this.current += '.'
    }
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
  user-select: none
  cursor: pointer

.operator
  background-color: #4d4e52

</style>