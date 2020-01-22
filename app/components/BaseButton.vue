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
  },
  methods: {
    handleOnClick: function(event) {
      if (!this.state.showLoading) {
        this.$emit('handleOnClick', event)
      }
    },
  },
}
</script>
<template>
  <StackLayout>
    <Button
      ref="baseButtonLoading"
      v-if="state.showLoading"
      class="nt-btn btn-base -primary -rounded-lg"
      text="One moment..."/>
    <Button
      :ref="refFromParent"
      v-if="!state.showLoading"
      :text="text"
      @tap="handleOnClick"
      :key="refFromParent"
      class="nt-btn btn-base -primary -rounded-lg"
  /></StackLayout>
</template>

<style lang="scss">
.btn-base {
  height: 50;
  margin: 30 5 15 5;
  font-size: 16;
  font-weight: 500;
}
</style>
