// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
export default {
  name: 'BaseCardListScrollView',
  components: {},
  props: {
    items: {
      type: Array,
      default: function() {
        return []
      },
    },
    pullToRefresh: {
      type: Boolean,
      default: false,
    },
    refFromParent: {
      type: String,
      default: 'cardRadListView',
    },
  },
  data() {
    return {
      state: {
        markText: 'Mark',
      },
    }
  },
  computed: {
    itemList() {
      return this.items
    },
  },
  methods: {
    onItemEdit(item) {
      this.$emit('handleOnItemEdit', item)
    },
    onItemDelete(item) {
      this.$emit('handleOnItemDelete', item)
    },
    onPullToRefreshInitiated({ object }) {
      console.log('Pulling...')
      this.$emit('pulling', object)
    },
    handleOnItemClick(item) {
      this.$emit('handleOnItemClick', item)
    },
    handleOnCancel(item) {
      this.$emit('handleOnCancel', { status: true, ...item })
    },
    handleOnOk(item) {
      this.$emit('handleOnOk', { status: true, ...item })
    },
    refresh() {
      this.$refs[this.refFromParent].refresh()
    },
  },
}
</script>
<template>
  <RadListView
    :ref="refFromParent"
    :pullToRefresh="pullToRefresh"
    @pullToRefreshInitiated="onPullToRefreshInitiated"
    swipeActions="false"
    for="item in itemList"
    class="nt-list-view"
  >
    <v-template>
      <CardView :key="item.id" ripple="true" padding="5" margin="5" height="auto">
        <StackLayout>
          <FlexBoxLayout justifyContent="space-between">
            <Label class="nt-label">
              <FormattedString>
                <Span :text="item.title" class="p-r-15 t-14" />
                <Span
                  :text="item.statusIcon | fonticon"
                  :style="item.statusIconStyle"
                  v-if="Boolean(item.status)"
                  class="fa t-16"
                />
              </FormattedString>
            </Label>
            <StackLayout orientation="horizontal"
              ><Label v-if="item.showEditOption" @tap="onItemEdit(item)" class="nt-label">
                <FormattedString>
                  <Span class="fa t-16  nt-icon"> {{ 'fa-edit' | fonticon }}</Span>
                </FormattedString></Label
              >
              <Label v-if="item.showDeleteOption" @tap="onItemDelete(item)" class="nt-label">
                <FormattedString>
                  <Span class="fa t-16  nt-icon"> {{ 'fa-trash-alt' | fonticon }}</Span>
                </FormattedString></Label
              ></StackLayout
            >
          </FlexBoxLayout>
          <FlexBoxLayout flexDirection="column">
            <Image
              @tap="handleOnItemClick(item)"
              src="~/assets/images/ground.jpg"
              stretch="aspectFit"
              class="nt-image"
            />
            <label :text="item.body" class="info nt-label t-14" textWrap="true" />
          </FlexBoxLayout>
          <FlexBoxLayout justifyContent="space-between">
            <StackLayout>
              <Button
                @tap="handleOnCancel(item)"
                :class="{
                  fa: item.cancelTextIcon,
                  'nt-button': true,
                  '-outline': true,
                  '-rounded-lg': true,
                }"
                :style="[item.cancelTextStyles]"
                :isEnabled="!item.actionButtonDisabled"
                v-if="item.showActionItems"
                >{{ item.cancelText }}
                {{ item.cancelTextIcon && item.cancelTextIcon | fonticon }}</Button
              ></StackLayout
            >
            <StackLayout>
              <Button
                @tap="handleOnOk(item)"
                :class="{
                  fa: item.okTextIcon,
                  'nt-button': true,
                  '-outline': true,
                  '-rounded-lg': true,
                }"
                :style="[item.okTextStyles]"
                :isEnabled="!item.actionButtonDisabled"
                v-if="item.showActionItems"
                >{{ item.okText }} {{ item.okTextIcon && item.okTextIcon | fonticon }}</Button
              ></StackLayout
            >
          </FlexBoxLayout>
        </StackLayout>
      </CardView>
    </v-template>
  </RadListView>
</template>

<style lang="scss">
.t-16 {
  font-size: 16;
}
.t-14 {
  font-size: 14;
}
</style>
