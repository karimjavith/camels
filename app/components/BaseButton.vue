// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    refFromParent: {
      type: String,
      default: 'baseButtonRef',
    },
    focusButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      state: {
        showLoading: false,
      },
    }
  },
  computed: {},
  watch: {
    loading(newValue) {
      setTimeout(() => {
        this.state.showLoading = newValue
      }, 25)
    },

    focusButton(newValue) {
      if (newValue) {
        const btnElm = this.$refs.baseButton.nativeView
        btnElm.notify({ eventName: 'tap', object: btnElm })
      }
    },
  },
  methods: {
    handleOnTap: function(event) {
      if (!this.state.showLoading) {
        this.$emit('handleOnClick', event)
      }
    },
  },
}
</script>
<template>
  <StackLayout v-shadow="2">
    <Button
      ref="baseButton"
      :text="!state.showLoading ? text : 'One moment...'"
      @tap="handleOnTap"
      disabled="state.showLoading"
      class="nt-btn -primary -rounded-lg btn-base"
    />
  </StackLayout>
</template>

<style lang="scss">
.btn-base {
  margin: 30 5 15 5;
  font-size: 14;
  width: 227;
}
</style>
