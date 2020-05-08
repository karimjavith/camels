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
    shouldUpdateLocalState: {
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
        icons: Icons,
        item: this.item,
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
      if (this.shouldUpdateLocalState) {
        this.state.item = { ...this.state.item, okIsActive: false, cancelIsActive: true }
      }
      this.$emit('handleOnCancel', { status: true, ...item, cb: this.handleOnResetState })
    },
    handleOnOk(item) {
      if (this.shouldUpdateLocalState) {
        this.state.item = { ...this.state.item, okIsActive: true, cancelIsActive: false }
      }
      this.$emit('handleOnOk', { status: true, ...item, cb: this.handleOnResetState })
    },
    handleOnResetState(cancelIsActive, okIsActive) {
      this.state.item = { ...this.state.item, cancelIsActive, okIsActive }
    },
    getIconString: function(name) {
      return icons(name)
    },
  },
}
</script>
<template>
  <CardView :key="state.item.key">
    <StackLayout>
      <DockLayout v-if="state.item.showEditOption" stretchLastChild="false">
        <StackLayout dock="left" orientation="horizontal">
          <Label :text="state.item.editActionText" dock="left" class="t-14" />
        </StackLayout>
        <StackLayout dock="right" orientation="horizontal">
          <Label @tap="onItemEdit(state.item)" class="nt-label">
            <FormattedString>
              <Span :text="getIconString(state.icons.Edit)" class="ico" />
            </FormattedString>
          </Label>
          <Label @tap="onItemDelete(state.item)" class="nt-label">
            <FormattedString>
              <Span :text="getIconString(state.icons.Delete)" class="ico" />
            </FormattedString>
          </Label>
        </StackLayout>
      </DockLayout>
      <StackLayout @tap="handleOnItemClick(state.item)" dock="center" class="card-details">
        <label :text="state.item.title" class="info nt-label"></label>

        <label :text="state.item.body" class="info nt-label t-14" textWrap="true" />
      </StackLayout>
      <DockLayout v-if="state.item.showActionItems" class="card-actions" stretchLastChild="false">
        <StackLayout dock="left" orientation="horizontal">
          <Label :text="state.item.actionItemText" dock="left" class="t-14" />
        </StackLayout>
        <StackLayout dock="right" orientation="horizontal">
          <AbsoluteLayout
            :style="[state.item.cancelStyles]"
            :class="['action-button', ' m-r-10', { active: state.item.cancelIsActive }]"
            @tap="handleOnCancel(state.item)"
          >
            <Label
              :text="getIconString(state.item.cancelIcon)"
              :class="['ico', 'm-r-15', { active: state.item.cancelIsActive }]"
              left="5"
              top="5"
            />
          </AbsoluteLayout>
          <AbsoluteLayout
            :style="[state.item.okStyles]"
            :class="['action-button', { active: state.item.okIsActive }]"
            @tap="handleOnOk(state.item)"
          >
            <Label
              :text="getIconString(state.item.okIcon)"
              :class="['ico', 'm-r-15', { active: state.item.okIsActive }]"
              left="5"
              top="4"
            />
          </AbsoluteLayout>
        </StackLayout>
      </DockLayout>
    </StackLayout>
  </CardView>
</template>

<style lang="scss">
@import '~/_app.common.scss';
.t-14 {
  font-size: 14;
}
.card-details {
  padding: 50px;
  height: 220px;
  border-radius: 8px;
  box-shadow: 0;
  .info {
    text-align: center;
  }
}
.card-actions {
  padding-top: 15px;
  .active {
    border-color: $accent;
    color: $accent;
  }
  .action-button {
    border-width: 0.2;
    border-style: solid;
    border-radius: 50%;
    height: 40;
    width: 40;
    text-align: center;
  }
}
</style>
