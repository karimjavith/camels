<script>
import DateService from '../_shared/date.ts'
export default {
  name: 'BaseFormFields',
  props: {
    metadata: {
      type: Array,
      default: function() {
        return []
      },
    },
  },
  data() {
    return {
      items: this.metadata,
    }
  },
  computed: {},
  mounted: function() {},
  methods: {
    isDateAndTimeField(value) {
      return value === 'date' || value === 'time'
    },
    onReturnPress: function(item) {
      this.$refs[item] ? this.$refs[item][0].nativeView.focus() : this.$emit('handleFinalReturnCb')
    },
    onTextChange: function({ value }, { name }) {
      let selectedValue = value
      if (name === 'date') {
        selectedValue = DateService.toLocalDateFormat(value)
      }
      if (name === 'time') {
        selectedValue = DateService.toLocalTimeFormatFromDateTime(value)
      }
      this.$emit('handleOnTextChange', { key: name, value: selectedValue })
    },
  },
}
</script>
<template>
  <StackLayout v-if="items.length > 0">
    <StackLayout v-for="item in items" :key="item.name" :row="item.index" class="input-field">
      <TextField
        :ref="item.name"
        v-if="!isDateAndTimeField(item.name)"
        v-model="item.model"
        @returnPress="onReturnPress(item.returnPressElm)"
        @textChange="onTextChange($event, item)"
        :hint="item.hint"
        :keyboardType="item.keyboardType"
        :secure="item.isSecure"
        :returnKeyType="item.returnKeyType"
        class="input"
        autocorrect="false"
        autocapitalizationType="none"
      ></TextField>
      <DatePickerField
        :ref="item.name"
        v-if="item.name === 'date'"
        :hint="item.hint"
        :date="item.model"
        :minDate="item.minDate"
        @dateChange="onTextChange($event, item)"
        locale="en_GB"
        class="input"
      ></DatePickerField>
      <TimePickerField
        :ref="item.name"
        v-if="item.name === 'time'"
        :hint="item.hint"
        :time="item.model"
        @timeChange="onTextChange($event, item)"
        locale="en_GB"
        class="input"
      ></TimePickerField>
      <StackLayout class="hr-light"></StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<style lang="scss">
@import '~/_app.common';
.input-field {
  margin-bottom: 25;
  border: none;

  .input {
    font-size: 18;
    placeholder-color: #a8a8a8;
    border: 0;
    border-color: transparent;
    border-bottom-color: $grey;
  }
}
</style>
