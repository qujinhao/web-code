<template>
  <div>
    nowplaying
    <ul>
      <li v-for=" (data, index) in datalist" @click="handleClick(index)">
        {{data}}
      </li>
    </ul>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'nowplaying',
  data () {
    return {
      datalist: ['film1', 'film2', 'film3', 'film4']
    }
  },
  methods: {
    handleClick (index) {
      router.push(`/detail/${index}`)
    }
  }
}
</script>

<style scoped>

</style>
