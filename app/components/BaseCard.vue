// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
import icons from '../_shared/icons'
import { Icons } from '../types/EIconName.ts'
export default {
  name: 'BaseCard',
  components: {},
  props: {
    item: {
      type: Object,
      default: function() {
        return {}
      },
    },
    refFromParent: {
      type: String,
      default: 'cardRadListView',
    },
  },
  data() {
    return {
      state: {
        icons: Icons,
      },
    }
  },
  computed: {},
  methods: {
    onItemEdit(item) {
      this.$emit('handleOnItemEdit', item)
    },
    onItemDelete(item) {
      this.$emit('handleOnItemDelete', item)
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
    getIconString: function(name) {
      return icons(name)
    },
  },
}
</script>
<template>
  <CardView :key="item.id" ripple="true" padding="5" margin="5" height="auto">
    <StackLayout>
      <DockLayout stretchLastChild="false">
        <StackLayout dock="right" orientation="horizontal">
          <Label v-if="item.showEditOption" @tap="onItemEdit(item)" class="nt-label">
            <FormattedString>
              <Span :text="getIconString(state.icons.Edit)" class="ico" /> </FormattedString
          ></Label>
          <Label v-if="item.showDeleteOption" @tap="onItemDelete(item)" class="nt-label">
            <FormattedString>
              <Span :text="getIconString(state.icons.Delete)" class="ico" /> </FormattedString
          ></Label>
        </StackLayout>
      </DockLayout>
      <StackLayout @tap="handleOnItemClick(item)" dock="center" class="card-details">
        <label :text="item.title" class="info nt-label"> </label>

        <label :text="item.body" class="info nt-label t-14" textWrap="true" />
      </StackLayout>
      <FlexBoxLayout
        v-if="item.showActionItems"
        justifyContent="space-between"
        class="card-actions"
      >
        <Label :text="item.actionItemText" dock="left" class="action-item-text" />

        <StackLayout dock="right" orientation="horizontal">
          <AbsoluteLayout
            :style="[item.cancelStyles]"
            :class="['action-button', ' m-r-10', { active: item.cancelIsActive }]"
            ><Label
              @tap="handleOnCancel(item)"
              :text="getIconString(item.cancelIcon)"
              :class="['ico', 'm-r-15', { active: item.cancelIsActive }]"
              left="5"
              top="5"
          /></AbsoluteLayout>
          <AbsoluteLayout
            :style="[item.okStyles]"
            :class="['action-button', { active: item.okIsActive }]"
            ><Label
              :text="getIconString(item.okIcon)"
              @tap="handleOnOk(item)"
              :class="['ico', 'm-r-15', { active: item.okIsActive }]"
              left="5"
              top="4"
          /></AbsoluteLayout>
        </StackLayout>
      </FlexBoxLayout>
    </StackLayout>
  </CardView>
</template>

<style lang="scss">
@import '~/_app.common.scss';
.t-14 {
  font-size: 14;
}
.card-details {
  height: 300px;
  border-radius: 8px;
  .info {
    text-align: center;
  }
}
.card-actions {
  .active {
    border-color: $accent;
    color: $accent;
  }
  .action-button {
    border-width: 1;
    border-style: solid;
    border-radius: 50%;
    height: 40;
    width: 40;
    text-align: center;
  }
  .action-item-text {
    font-size: 12px;
  }
}
</style>
