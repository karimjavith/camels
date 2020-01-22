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
  <Button @tap="handleOnClick" class="nt-button -outline -custom -rounded-lg fa ta-14">
    {{ icon | fonticon }} {{ text }}
  </Button>
</template>

<style lang="scss"></style>
