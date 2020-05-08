<script>
import { IconClass } from '../types/EIconClass.ts'
import icons from '../_shared/icons.ts'
export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 16,
    },
    state: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      iconClass: IconClass,
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleOnClick: function(event) {
      this.$emit('handleOnClick', event)
    },
    getIconCode: function(value) {
      return icons(value)
    },
  },
}
</script>
<template>
  <Label
    :text="getIconCode(name)"
    :style="{ fontSize: size + 'px', color: color }"
    :class="iconClass[state]"
    class="ico icon-base fs-16"
  />
</template>

<style scoped lang="scss">
@import '~/_app.common';
.active {
  color: $accent;
}
.default {
  color: $border-color;
}
.error {
  color: $error;
}

.success {
  color: $success;
  font-weight: 400;
}
.icon-base {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
