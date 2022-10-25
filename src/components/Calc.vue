<template>
  <div class="container">
    <div class="display">{{ current || 0 }}</div>
    <div class="line"></div>
    <div @click="clear()" class="btn operator">C</div>
    <div @click="sign()" class="btn operator">+/-</div>
    <div @click="percent()" class="btn operator">%</div>
    <div @click="divide()" class="btn operator">&divide;</div>
    <div @click="append(7)" class="btn">7</div>
    <div @click="append(8)" class="btn">8</div>
    <div @click="append(9)" class="btn">9</div>
    <div @click="times()" class="btn operator">&times;</div>
    <div @click="append(4)" class="btn">4</div>
    <div @click="append(5)" class="btn">5</div>
    <div @click="append(6)" class="btn">6</div>
    <div @click="minus()" class="btn operator">-</div>
    <div @click="append(1)" class="btn">1</div>
    <div @click="append(2)" class="btn">2</div>
    <div @click="append(3)" class="btn">3</div>
    <div @click="add()" class="btn operator">+</div>
    <div @click="append(0)" class="btn zero">0</div>
    <div @click="dot()" class="btn">.</div>
    <div @click="equal()" class="btn operator">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: '',
      previous: null,
      operator: null,
      operatorClicked: false
    }
  },
  methods: {
    clear: function () {
      this.current = ''
    },
    sign: function () {
      this.current = this.current.charAt(0) === '-' ?
          this.current.slice(1) : `-${this.current}`
    },
    percent: function () {
      if (this.current !== '')
        this.current = `${ parseFloat(this.current) / 100 }`
    },
    append: function (number) {
      if(this.operatorClicked) {
        this.current = ''
        this.operatorClicked = false
      }
      this.current += number
    },
    dot: function () {
      if (!this.current.includes('.'))
        this.current += '.'
    },
    setPrevious: function () {
      this.previous = this.current
      this.operatorClicked = true
    },
    divide: function () {
      this.operator = (a, b) => a / b
      this.setPrevious()
    },
    times: function () {
      this.operator = (a, b) => a * b
      this.setPrevious()
    },
    minus: function () {
      this.operator = (a, b) => a - b
      this.setPrevious()
    },
    add: function () {
      this.operator = (a, b) => a + b
      this.setPrevious()
    },
    equal: function () {
      this.current = `${ this.operator(
          parseFloat(this.previous),
          parseFloat(this.current)
      ) }`
      this.previous = null
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
  font-size: 36px
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-auto-columns: minmax(50px, auto)
  grid-gap: 20px
  text-align: center
  background-color: #202125
  padding: 25px
  border-radius: 20px
  color: #f7f7f9
  box-shadow: 0 0 10px #000

.display
  grid-column: 1/5
  text-align: right
  font-size: 45px

.line
  grid-column: 1/5
  background: linear-gradient(to right, #3f51b5, #dd43b2, #d29e8f)
  height: 1px

.zero
  grid-column: 1/3
  transition-duration: 0.5s

.zero:hover
  background-color: #4d4e52
  box-shadow: 0 0 10px #fff

.btn
  padding: 15px
  border-radius: 50px
  user-select: none
  cursor: pointer

.btn:hover
  text-shadow: 0 0 10px #808080

.operator
  background-color: #4d4e52

.operator:hover
  box-shadow: 0 0 10px #fff

</style>