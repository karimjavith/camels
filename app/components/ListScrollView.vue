// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
export default {
  name: 'ListScrollView',
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
    itemReorder: {
      type: Boolean,
      default: false,
    },
    swipeActions: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      state: {
        markText: 'Mark',
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
      this.$refs.listView.notifySwipeToExecuteFinished()
    },
    onRightSwipeClick({ object }) {
      console.log('right action tapped')
      // remove item
      this.$emit('itemDeleted', object.bindingContext)
      this.$refs.listView.notifySwipeToExecuteFinished()
    },
    refresh() {
      this.$refs.listView.refresh()
    },
  },
}
</script>
<template>
  <RadListView
    ref="listView"
    :pullToRefresh="pullToRefresh"
    :itemReorder="itemReorder"
    :swipeActions="swipeActions"
    @itemTap="onItemTap"
    @pullToRefreshInitiated="onPullToRefreshInitiated"
    @itemReordered="onItemReordered"
    @itemSwipeProgressStarted="onSwipeStarted"
    for="item in items"
  >
    <v-template>
      <GridLayout columns="50, *" rows="*" class="item">
        <Label :text="item.icon | fonticon" col="0" class="thumbnail fa t-16" />
        <StackLayout col="1">
          <label :text="item.name" class="h2" col="1" />
          <label :text="item.description" class="p" col="1" />
          <Label
            :text="item.secondaryIcon | fonticon"
            v-if="Boolean(item.secondaryIcon)"
            class="fa t-16"
          />
        </StackLayout>
      </GridLayout>
    </v-template>

    <v-template name="itemswipe">
      <GridLayout columns="auto, *, auto" backgroundColor="White">
        <StackLayout
          id="mark-view"
          @tap="onLeftSwipeClick"
          col="0"
          class="swipe-item left"
          orientation="horizontal"
        >
          <Label :text="state.markText" verticalAlignment="center" horizontalAlignment="center" />
        </StackLayout>
        <StackLayout
          id="delete-view"
          @tap="onRightSwipeClick"
          col="2"
          class="swipe-item right"
          orientation="horizontal"
        >
          <Label text="delete" verticalAlignment="center" horizontalAlignment="center" />
        </StackLayout>
      </GridLayout>
    </v-template>
  </RadListView>
</template>

<style lang="scss">
.t-16 {
  font-size: 16;
}
</style>
