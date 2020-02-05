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
    isActive: {
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
  <FlexBoxLayout
    :style="[styleObject]"
    :class="['button-icon', { primary: primary }, { '-active': isActive }, 'm-12', 'rounded']"
    @tap="handleOnClick"
    justifyContent="center"
  >
    <Label :text="text" :class="['m-r-10', 'm-l-10', 'fs14', '-text']"/><Label
      :text="getIconString(icon)"
      :class="['ico', 'm-r-15', 'fs14', '-icon']"
  /></FlexBoxLayout>
</template>

<style scoped lang="scss">
@import '~/_app.common';
.button-icon {
  text-align: center;
  padding: 12;
  border-width: 1px;
  border-style: solid;
  border-color: $border-color;
  background-color: $bg-color;
  color: $text-color;
  &.-active {
    border-width: 0;
    background-color: $accent;
    color: $white;
    font-weight: 500;
  }
  .-text {
    vertical-align: middle;
  }
  .-icon {
    vertical-align: middle;
    margin-top: -2;
  }
}

.outline {
  background-color: transparent;
}
.primary {
  background-color: $accent;
}
.rounded {
  border-radius: 25%;
}
</style>
