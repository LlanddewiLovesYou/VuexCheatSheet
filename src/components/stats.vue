<template>
  <div class="stats">
    <h1>How Many Links Are There</h1>
    <p>There are currently {{ countLinks }} links.</p>
    <button v-on:click='removeAllLinks'>Remove All Links!</button>
    <p>{{ msg }}</p>
  </div>


</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: "stats",
  data(){
    return {
      msg: ""
    }
  },
  computed: {
    ...mapGetters([
      'countLinks'
    ]),
  },
  methods: {
    ...mapMutations([
      'REMOVE_ALL'
    ]),
    ...mapActions([
      'removeAll'
    ]),
    //class component methods... click handlers etc.
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = "All Links Have Been REMOVED!"
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
}
</style>
