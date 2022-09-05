<template>
    <Component1/>
    <Component2/> 
</template>

<script>
import Component1 from './components/Component1'
import Component2 from './components/Component2'
export default {
  name: 'Main',
  components: {
    Component1,
    Component2
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
