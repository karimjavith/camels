// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
import icons from '../_shared/icons'
import { Icons } from '../types/EIconName.ts'
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
        icons: Icons,
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
    getIconString: function(name) {
      return icons(name)
    },
  },
}
</script>
<template>
  <ScrollView>
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
                </FormattedString>
              </Label>
              <StackLayout orientation="horizontal"
                ><Label v-if="item.showEditOption" @tap="onItemEdit(item)" class="nt-label">
                  <FormattedString>
                    <Span :text="getIconString(state.icons.Edit)" class="ico" /> </FormattedString
                ></Label>
                <Label v-if="item.showDeleteOption" @tap="onItemDelete(item)" class="nt-label">
                  <FormattedString>
                    <Span
                      :text="getIconString(state.icons.Delete)"
                      class="ico"
                    /> </FormattedString></Label
              ></StackLayout>
            </FlexBoxLayout>
            <FlexBoxLayout flexDirection="column">
              <Image @tap="handleOnItemClick(item)" stretch="aspectFit" class="nt-image" />
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
                >
                  <FormattedString>
                    <Span :text="item.cancelText" />
                    <Span
                      v-if="item.cancelTextIcon"
                      :text="getIconString(state.icons.No)"
                      class="ico m-r-15"
                    />
                  </FormattedString> </Button
              ></StackLayout>
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
                >
                  <FormattedString>
                    <Span :text="item.okText" />
                    <Span
                      v-if="item.okTextIcon"
                      :text="getIconString(state.icons.Yes)"
                      class="ico m-r-15"
                    />
                  </FormattedString> </Button
              ></StackLayout>
            </FlexBoxLayout>
          </StackLayout>
        </CardView>
      </v-template> </RadListView
  ></ScrollView>
</template>

<style lang="scss">
.t-14 {
  font-size: 14;
}
ScrollView {
  height: 100%;
}
</style>
