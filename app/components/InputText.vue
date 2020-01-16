// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
export default {
  name: 'InputText',
  props: {
    modelkey: {
      type: String,
      default: '',
    },
    keyboardType: {
      type: String,
      default: 'text',
    },
    placeHolderText: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    returnPress: {
      type: Function,
      default: function() {
        return null
      },
    },
    returnKeyType: {
      type: String,
      default: 'next',
    },
    secure: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    updateValue: function({ value }) {
      this.$emit('handleOnChange', { modelkey: this.modelkey, value })
    },
  },
}
</script>
<template>
  <StackLayout class="nt-input input-field">
    <TextField
      :value="value"
      @textChange="updateValue"
      @returnPress="returnPress"
      :returnKeyType="returnKeyType"
      :hint="placeHolderText"
      :keyboardType="keyboardType"
      :secure="secure"
      class="input nt-input"
      autocorrect="false"
      autocapitalizationType="none"
    />
    <StackLayout class="hr-light" />
  </StackLayout>
</template>

<style lang="scss">
.input-field {
  margin-bottom: 25;

  .input {
    font-size: 18;
    text-align: center;
    placeholder-color: #a8a8a8;
  }
}
</style>
