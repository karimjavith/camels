// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
import BaseButton from './BaseButton.vue'
export default {
  name: 'BaseCardListScrollView',
  components: { BaseButton },
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
    handleOnCancel(item) {
      this.$emit('handleOnCancel', { status: true, ...item })
    },
    handleOnOk(item) {
      this.$emit('handleOnOk', { status: true, ...item })
    },
    refresh() {
      this.$refs.cardListView.refresh()
    },
  },
}
</script>
<template>
  <RadListView
    ref="cardListView"
    :pullToRefresh="pullToRefresh"
    @itemTap="onItemTap"
    @pullToRefreshInitiated="onPullToRefreshInitiated"
    swipeActions="false"
    for="item in items"
  >
    <v-template>
      <CardView ripple="true" padding="5" margin="5" height="300">
        <StackLayout>
          <Label class="info" horizontalAlignment="center" verticalAlignment="center">
            <FormattedString>
              <Span :text="item.title" />
              <Span
                :text="item.statusIcon | fonticon"
                v-if="Boolean(item.status)"
                class="fa t-16"
              />
            </FormattedString>
          </Label>
          <Image src="~/assets/images/ground.jpg" stretch="aspectFit" height="120" />
          <label :text="item.body" class="info" textWrap="true" />
          <Button
            @tap="handleOnCancel(item)"
            :class="{ fa: item.cancelTextIcon }"
            :style="[item.cancelTextStyles]"
            :isEnabled="!item.actionButtonDisabled"
            v-if="item.showActionItems"
          >
            {{ item.cancelText }} {{ item.cancelTextIcon && item.cancelTextIcon | fonticon }}
          </Button>
          <Button
            @tap="handleOnOk(item)"
            :class="{ fa: item.okTextIcon }"
            :style="[item.okTextStyles]"
            :isEnabled="!item.actionButtonDisabled"
            v-if="item.showActionItems"
          >
            {{ item.okText }} {{ item.okTextIcon && item.okTextIcon | fonticon }}
          </Button>
        </StackLayout>
      </CardView>
    </v-template>
  </RadListView>
</template>

<style lang="scss">
.t-16 {
  font-size: 16;
}
</style>
