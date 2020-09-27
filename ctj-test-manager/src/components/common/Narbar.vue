<template>
  <div id="Narbar" class="fixed-top" >
    <Baritem @itemclick="pathlink('/home')"> <span>home</span> </Baritem>
    <Baritem @itemclick="pathlink('/project')"> <span>project</span> </Baritem>
    <Baritem @itemclick="pathlink('/api')"> <span>api</span> </Baritem>
    <Baritem @itemclick="pathlink('/scripts')"> <span>scripts</span> </Baritem>
    <Baritem @itemclick="pathlink('/results')"> <span>results</span> </Baritem>
  </div>
</template>

<script>
import Baritem from "@/components/common/Baritem";

export default {
  name: "Narbar",
  components: {
    Baritem
  },
  methods: {
    pathlink(item) {
      this.$router.push(item)
    }
  }
}
</script>

<style scoped>

@import "../../assets/css/base.css";

#Narbar {
  /*text-align: center;*/
  display: flex;
  background: var(--purple);


}



</style>
