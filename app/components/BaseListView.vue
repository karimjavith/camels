// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
import BaseIcon from './BaseIcons.vue'
import { Icons } from '../types/EIconName.ts'
import { IconStatus } from '../types/EIconStatus.ts'
export default {
  name: 'BaseListView',
  components: { BaseIcon },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
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
    itemReorder: {
      type: Boolean,
      default: false,
    },
    swipeActions: {
      type: Boolean,
      default: false,
    },
    refFromParent: {
      type: String,
      default: 'radListView',
    },
  },
  data() {
    return {
      state: {
        markText: 'Mark',
        icons: Icons,
        iconStatus: IconStatus,
      },
    }
  },
  methods: {
    onItemTap(event) {
      this.$emit('itemTap', event)
    },
    onPullToRefreshInitiated({ object }) {
      this.$emit('pulling', object)
    },
    onItemReordered({ index, data, object }) {},
    onSwipeStarted({ data, object }) {
      const swipeLimits = data.swipeLimits
      const swipeView = object
      const leftItem = swipeView.getViewById('mark-view')
      const rightItem = swipeView.getViewById('delete-view')
      swipeLimits.left = leftItem.getMeasuredWidth()
      swipeLimits.right = rightItem.getMeasuredWidth()
      swipeLimits.threshold = leftItem.getMeasuredWidth() / 2
    },
    onLeftSwipeClick({ object }) {
      this.$emit('itemMarked', object.bindingContext)
      this.$refs[this.refFromParent].notifySwipeToExecuteFinished()
    },
    onRightSwipeClick({ object }) {
      // remove item
      this.$emit('itemDeleted', object.bindingContext)
      this.$refs[this.refFromParent].notifySwipeToExecuteFinished()
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
    :itemReorder="itemReorder"
    :swipeActions="swipeActions"
    @itemTap="onItemTap"
    @pullToRefreshInitiated="onPullToRefreshInitiated"
    @itemReordered="onItemReordered"
    @itemSwipeProgressStarted="onSwipeStarted"
    for="item in items"
    class="nt-list-view"
  >
    <v-template v-if="loading">
      <ActivityIndicator :busy="loading" class="loader nt-activity-indicator"></ActivityIndicator>
    </v-template>
    <v-template v-else>
      <GridLayout columns="50, *" rows="*" class="item">
        <BaseIcon
          :name="item.primaryIcon"
          :state="item.primaryIconState"
          :size="20"
          col="0"
          class="primaryIcon"
        />
        <FlexBoxLayout class="item-content" rowspan="2" col="1">
          <label :text="item.primaryText" class="primaryText" />
          <BaseIcon v-if="item.primaryTag" :name="item.primaryTag" class="primaryTag" />
          <label :text="item.secondaryText" class="secondaryText p" />
          <BaseIcon
            v-if="item.secondaryIcon"
            :name="item.secondaryIcon"
            :state="item.secondaryIconState"
            class="secondaryIcon"
          />
          <label
            v-if="item.secondaryLabel"
            :class="[
              'secondaryLabel',
              {
                'secondaryLabel-active': item.secondaryIconState === state.iconStatus.Active,
                'secondaryLabel-default': item.secondaryIconState === state.iconStatus.Default,
              },
            ]"
            :text="item.secondaryLabel"
          />
        </FlexBoxLayout>
      </GridLayout>
    </v-template>

    <v-template name="itemswipe">
      <GridLayout columns="auto, *, auto" backgroundColor="White">
        <FlexBoxLayout id="mark-view" @tap="onLeftSwipeClick" col="0" class="swipe-item left">
          <BaseIcon :name="state.icons.UserTag" :size="14" color="#fff" />
        </FlexBoxLayout>
        <FlexBoxLayout id="delete-view" @tap="onRightSwipeClick" col="2" class="swipe-item right">
          <BaseIcon :name="state.icons.Delete" :size="14" color="#fff" />
        </FlexBoxLayout>
      </GridLayout>
    </v-template>
  </RadListView>
</template>

<style lang="scss">
@import '~/_app.common';
.t-24 {
  font-size: 24;
}
.primaryIcon,
.primaryText,
.primaryTag,
.secondaryText {
  display: inline-block;
  vertical-align: middle;
}
.secondaryIcon {
  float: right;
  margin: 0 0 0 1em;
  vertical-align: middle;
}
.item {
  &-content {
    justify-content: space-between;
  }
}
.secondaryLabel {
  background-color: $hovered-bg;
  color: $text-color;
  font-size: 10;
  width: 64;
  &-active {
    background-color: $accent-light;
    color: $accent;
    font-weight: 500;
    font-size: 12;
    border-radius: 5;
    text-align: center;
  }
  &-default {
    font-size: 12;
    border-radius: 5;
    font-weight: 400;
    text-align: center;
  }
}
</style>
