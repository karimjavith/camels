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
    styleObject: {
      type: Object,
      default: function() {
        return {}
      },
    },
    primary: {
      type: Boolean,
      default: false,
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
  <Button
    @tap="handleOnClick"
    :style="[styleObject]"
    :class="{
      'nt-button': 'true',
      '-outline': 'true',
      '-primary': primary,
      '-rounded-lg': true,
    }"
  >
  <FormattedString>
    <Span :text="icon | fonticon" class="fas fs16 nt-icon m-15" />
    <Span :text="text" />
    </FormattedString>
  </Button>
</template>

<style lang="scss"></style>
