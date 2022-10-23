<template>
  <div class="container">
    <div class="item input">
      <form name="form">
        <input type="text" name="textView" readonly>
      </form>
    </div>
    <div class="item clean">C</div>
    <div class="item back">&larr;</div>
    <div class="item" @click="insert('+')">+</div>
    <div class="item" @click="insert('-')">-</div>
    <div class="item" @click="insert('*')">&times;</div>
    <div class="item" @click="insert('/')">&divide;</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
    <div class="item">(</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">)</div>
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item equal">=</div>
    <div class="item zero">0</div>
    <div class="item">.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    insert: function (num) {
      document.form.textview.value += num
      console.log("insert function")
    }
  }
}
</script>

<style scoped lang="sass">

*
  user-select: none

.container
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-gap: 4px
  background-color: #333333
  padding: 4px
  border-radius: 9px
  max-width: 360px
  box-shadow: 0 0 10px #000000

.item
  background-color: #3c3c3c
  color: #fdfdfd
  padding: 20px
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  font-weight: bold

form
  max-width: 100%

input
  width: 100%
  height: 60px
  border: none
  font-size: 30px
  outline: none
  text-align: right
  background: #333333
  color: #fdfdfd

.input
  grid-column: 1/-1
  padding: 0

.clean
  grid-column: 1/3

.back
  grid-column: 3/-1

.equal
  grid-column: 4
  grid-row: 6/8

.zero
  grid-column: 1/3

</style>