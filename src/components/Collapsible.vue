<template>
  <div>
    <button
      type="button"
      v-bind:class="{ active: isActive }"
      @click="isActive = !isActive"
      class="collapsible"
    >Réponse</button>
    <transition name="slide">
      <div v-show="isActive" class="content">
        <p>{{question.solution}}</p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Collapsible",
  props: ["question"],
  data() {
    return {
      isActive: false
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.collapsible {
  background-color: #fff;
  color: #4e4a4a;
  cursor: pointer;
  padding: 18px;
  width: fit-content;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  z-index: 2;
  font-weight: 600;
  box-shadow: 0px 2px 6px #3a363657;
  transition: all ease 0.3s;
}

.active,
.collapsible:hover {
  box-shadow: 0px 3px 4px #3a363691;
}
.active{
    width: 100%;
}
.content {
  padding: 0 18px;
  overflow: hidden;
  background-color: #f1f1f1;
  z-index: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-10px);
}
</style>