// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
export default {
  name: 'BaseButtonWithIcon',
  props: {
    text: {
      type: String,
      default: '',
    },
    icon: {
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
  <Button @tap="handleOnClick" class="btn-base-icon -outlined -primary -rounded-lg fa ta-14">
    {{ icon | fonticon }} {{ text }}
  </Button>
</template>

<style lang="scss">
.btn-base-icon {
  font-size: 16;
  font-weight: 300;
}
.t-14 {
  font-size: 14;
}
</style>
