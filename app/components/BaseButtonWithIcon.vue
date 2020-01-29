// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
import icons from '../_shared/icons'
export default {
  name: 'BaseButtonWithIcon',
  props: {
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: Number,
      default: 0,
    },
    iconState: {
      type: Number,
      default: 4,
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
    getIconString: function(name) {
      return icons(name)
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
      <Span :text="text" />
      <Span :text="getIconString(icon)" class="ico m-r-15" />
    </FormattedString>
  </Button>
</template>

<style lang="scss"></style>
