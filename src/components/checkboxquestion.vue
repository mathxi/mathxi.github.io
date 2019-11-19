<template>
  <div>
    <md-card-header>
      <div class="md-title">{{question.label}}</div>
    </md-card-header>
    <md-card-content>
      <md-checkbox
        v-for="choice in question.choices"
        v-bind:key="choice.idResponse"
        v-model="choice.value"
        :disabled="disable"
      >{{choice.label}}</md-checkbox>
    </md-card-content>
  </div>
</template>
<script>
export default {
  name: "CheckboxQuestion",
  props: ["question", "disable"]
};
</script>