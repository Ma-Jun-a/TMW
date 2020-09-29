<template>
  <div id="Narbar"  >
    <!-- Just an image -->
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="../../assets/img/icon.jpg" width="30" height="30" alt="" loading="lazy">
      </a>
    </nav>

    <nav class="nav flex-column">
      <a class="nav-link  active" ><Baritem class="Baritem" @itemclick="pathlink('/home')"> <span>home</span> </Baritem></a>
      <a class="nav-link"  ><Baritem class="Baritem"  @itemclick="pathlink('/project')"> <span>project</span> </Baritem></a>
      <a class="nav-link" ><Baritem class="Baritem"  @itemclick="pathlink('/api')"> <span>api</span> </Baritem></a>
      <a class="nav-link" ><Baritem class="Baritem"  @itemclick="pathlink('/scripts')"> <span>scripts</span> </Baritem></a>
      <a class="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</a>
    </nav>

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

.Baritem {
  padding-left: 0px;
}
.nav-link {
  padding-left: 0px;
  margin: auto 10px;

}
.flex-column {
  background-color: #004085;
  margin: auto 10px;
}
span {
  color: #0b2e13;
}

</style>
