// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
import BaseIcon from './BaseIcons.vue'
import { Icons } from '../types/EIconName.ts'
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
      },
    }
  },
  methods: {
    onItemTap(event) {
      this.$emit('itemTap', event)
    },
    onPullToRefreshInitiated({ object }) {
      console.log('Pulling...')
      this.$emit('pulling', object)
    },
    onItemReordered({ index, data, object }) {
      console.log(`Item reordered from index ${index} to ${data.targetIndex}`)
    },
    onSwipeStarted({ data, object }) {
      console.log(`Swipe started`)
      const swipeLimits = data.swipeLimits
      const swipeView = object
      const leftItem = swipeView.getViewById('mark-view')
      const rightItem = swipeView.getViewById('delete-view')
      swipeLimits.left = leftItem.getMeasuredWidth()
      swipeLimits.right = rightItem.getMeasuredWidth()
      swipeLimits.threshold = leftItem.getMeasuredWidth() / 2
    },
    onLeftSwipeClick({ object }) {
      console.log('left action tapped')
      this.$emit('itemMarked', object.bindingContext)
      this.$refs[this.refFromParent].notifySwipeToExecuteFinished()
    },
    onRightSwipeClick({ object }) {
      console.log('right action tapped')
      // remove item
      this.$emit('itemDeleted', object.bindingContext)
      console.log(this.refFromParent)
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
    <v-template>
      <ActivityIndicator :busy="loading" class="loader nt-activity-indicator"></ActivityIndicator>
      <GridLayout columns="50, *" rows="*" class="item">
        <BaseIcon :name="item.icon" :size="20" />
        <FlexBoxLayout col="1">
          <label :text="item.name" class="h3 t-24" col="1" />
          <label :text="item.description" class="p" col="1" />
          <BaseIcon v-if="item.secondaryIcon" :name="item.secondaryIcon" />
        </FlexBoxLayout>
      </GridLayout>
    </v-template>

    <v-template name="itemswipe">
      <GridLayout columns="auto, *, auto" backgroundColor="White">
        <FlexBoxLayout id="mark-view" @tap="onLeftSwipeClick" col="0" class="swipe-item left">
          <BaseIcon :name="state.icons.UserTag" :size="16" color="#fff" />
        </FlexBoxLayout>
        <FlexBoxLayout id="delete-view" @tap="onRightSwipeClick" col="2" class="swipe-item right">
          <BaseIcon :name="state.icons.Delete" :size="16" color="#fff" />
        </FlexBoxLayout>
      </GridLayout>
    </v-template>
  </RadListView>
</template>

<style lang="scss">
.t-24 {
  font-size: 24;
}
</style>
