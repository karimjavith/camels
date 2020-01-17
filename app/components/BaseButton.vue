// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    handleOnClick: function(event) {
      this.$emit('handleOnClick', event)
    },
  },
}
</script>
<template>
  <Button @tap="handleOnClick" :text="text" class="btn btn-base -primary -rounded-lg" />
</template>

<style lang="scss">
.btn-base {
  height: 50;
  margin: 30 5 15 5;
  font-size: 16;
  font-weight: 500;
}
</style>
