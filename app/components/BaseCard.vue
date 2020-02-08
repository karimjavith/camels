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
  <CardView :key="item.key" ripple="true" height="auto">
    <StackLayout>
      <DockLayout v-if="item.showEditOption" stretchLastChild="false">
        <StackLayout dock="left" orientation="horizontal">
          <Label :text="item.editActionText" dock="left" class="t-14" />
        </StackLayout>
        <StackLayout dock="right" orientation="horizontal">
          <Label @tap="onItemEdit(item)" class="nt-label">
            <FormattedString>
              <Span :text="getIconString(state.icons.Edit)" class="ico" />
            </FormattedString>
          </Label>
          <Label @tap="onItemDelete(item)" class="nt-label">
            <FormattedString>
              <Span :text="getIconString(state.icons.Delete)" class="ico" />
            </FormattedString>
          </Label>
        </StackLayout>
      </DockLayout>
      <StackLayout @tap="handleOnItemClick(item)" dock="center" class="card-details">
        <label :text="item.title" class="info nt-label"></label>

        <label :text="item.body" class="info nt-label t-14" textWrap="true" />
      </StackLayout>
      <DockLayout v-if="item.showActionItems" class="card-actions" stretchLastChild="false">
        <StackLayout dock="left" orientation="horizontal">
          <Label :text="item.actionItemText" dock="left" class="t-14" />
        </StackLayout>
        <StackLayout dock="right" orientation="horizontal">
          <AbsoluteLayout
            :style="[item.cancelStyles]"
            :class="['action-button', ' m-r-10', { active: item.cancelIsActive }]"
            @tap="handleOnCancel(item)"
          >
            <Label
              :text="getIconString(item.cancelIcon)"
              :class="['ico', 'm-r-15', { active: item.cancelIsActive }]"
              left="5"
              top="5"
            />
          </AbsoluteLayout>
          <AbsoluteLayout
            :style="[item.okStyles]"
            :class="['action-button', { active: item.okIsActive }]"
            @tap="handleOnOk(item)"
          >
            <Label
              :text="getIconString(item.okIcon)"
              :class="['ico', 'm-r-15', { active: item.okIsActive }]"
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
  height: 250px;
  border-radius: 8px;
  box-shadow: 0;
  background-image: url('~/assets/images/ground.jpg');
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
    border-width: 1;
    border-style: solid;
    border-radius: 50%;
    height: 40;
    width: 40;
    text-align: center;
  }
}
</style>
