<template>
  <div :class="[darkMode ? 'dark' : 'light']" class="container">
    <div class="theme">
      <div class="theme__btn">
        <div class="toggle-container">
          <input id="switch" name="theme" type="checkbox" @change="changeTheme()"/>
          <label for="switch">Toggle</label>
        </div>
      </div>
    </div>
    <div class="display">{{ current || 0 }}</div>
    <div class="line"></div>
    <div :style="
          {
            backgroundColor: darkMode ? '#4d4e52' : '#f4f5f8',
            color: darkMode ? '#f7f7f9' : '#484848',
          }"
         class="btn operator"
         @click="clear()">C
    </div>
    <div :style="
          {
            backgroundColor: darkMode ? '#4d4e52' : '#f4f5f8',
            color: darkMode ? '#f7f7f9' : '#484848',
          }"
         class="btn operator"
         @click="sign()">+/-
    </div>
    <div :style="
          {
            backgroundColor: darkMode ? '#4d4e52' : '#f4f5f8',
            color: darkMode ? '#f7f7f9' : '#484848',
          }"
         class="btn operator"
         @click="percent()">%
    </div>
    <div :style="
          {
            backgroundColor: darkMode ? '#4d4e52' : '#f4f5f8',
            color: darkMode ? '#f7f7f9' : '#484848',
          }"
         class="btn operator"
         @click="divide()">&divide;
    </div>
    <div class="btn" @click="append(7)">7</div>
    <div class="btn" @click="append(8)">8</div>
    <div class="btn" @click="append(9)">9</div>
    <div :style="
          {
            backgroundColor: darkMode ? '#4d4e52' : '#f4f5f8',
            color: darkMode ? '#f7f7f9' : '#484848',
          }"
         class="btn operator"
         @click="times()">&times;
    </div>
    <div class="btn" @click="append(4)">4</div>
    <div class="btn" @click="append(5)">5</div>
    <div class="btn" @click="append(6)">6</div>
    <div :style="
          {
            backgroundColor: darkMode ? '#4d4e52' : '#f4f5f8',
            color: darkMode ? '#f7f7f9' : '#484848',
          }"
         class="btn operator"
         @click="minus()">-
    </div>
    <div class="btn" @click="append(1)">1</div>
    <div class="btn" @click="append(2)">2</div>
    <div class="btn" @click="append(3)">3</div>
    <div :style="
          {
            backgroundColor: darkMode ? '#4d4e52' : '#f4f5f8',
            color: darkMode ? '#f7f7f9' : '#484848',
          }"
         class="btn operator"
         @click="add()">+
    </div>
    <div :style="
          {
            backgroundColor: darkMode ? '#202125' : '#fdfdfd',
            color: darkMode ? '#f7f7f9' : '#484848',
          }"
         class="btn zero"
         @click="append(0)">0
    </div>
    <div class="btn" @click="dot()">.</div>
    <div :style="
          {
            backgroundColor: darkMode ? '#4d4e52' : '#f4f5f8',
            color: darkMode ? '#f7f7f9' : '#484848',
          }"
         class="btn operator"
         @click="equal()">=
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: '',
      previous: null,
      operator: null,
      operatorClicked: false,
      darkMode: true
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
        this.current = `${parseFloat(this.current) / 100}`
    },
    append: function (number) {
      if (this.operatorClicked) {
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
      this.current = `${this.operator(
          parseFloat(this.previous),
          parseFloat(this.current)
      )}`
      this.previous = null
    },
    changeTheme: function () {
      this.darkMode = !this.darkMode
    }
  }
}
</script>

<style lang="sass" scoped>

$bg-color: #202125
$text-color: #f7f7f9
$light-bg-color: #fdfdfd
$dark-text-color: #484848

.light
  background-color: $light-bg-color
  color: $dark-text-color
  box-shadow: 0 0 20px #8b888b

.dark
  background-color: $bg-color
  color: $text-color
  box-shadow: 0 0 20px #000000


*
  font-family: 'Montserrat', sans-serif
  transition: 0.3s all
  font-weight: 400

.container
  font-size: 36px
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-auto-columns: minmax(50px, auto)
  grid-gap: 20px
  text-align: center
  padding: 25px
  border-radius: 20px

.theme
  grid-column: 1/5
  display: flex
  align-items: start
  justify-content: start

input[type=checkbox]
  height: 0
  width: 0
  visibility: hidden

label
  cursor: pointer
  text-indent: -9999px
  width: 52px
  height: 27px
  background: grey
  float: right
  border-radius: 100px
  position: relative

label:after
  content: ''
  position: absolute
  top: 3px
  left: 3px
  width: 20px
  height: 20px
  background: #fff
  border-radius: 90px
  transition: 0.3s


input:checked + label
  background: linear-gradient(to right, #3f51b5, #dd43b2, #d29e8f)


input:checked + label:after
  left: calc(100% - 5px)
  transform: translateX(-100%)


label:active:after
  width: 45px


.theme__btn
  user-select: none
  cursor: pointer


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
  font-size: 34px

.operator:hover
  box-shadow: 0 0 10px #fff

</style>