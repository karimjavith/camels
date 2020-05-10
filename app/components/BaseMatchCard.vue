// https://github.com/msaelices/ns-ui-vue-demo/blob/master/app/views/List.vue
<script>
import icons from '../_shared/icons'
import { Icons } from '../types/EIconName.ts'
export default {
  name: 'BaseMatchCard',
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
        columns:
          this.item && this.item.totalSquad * 10 + '*,' + (150 - this.item.totalSquad * 10) + '*',
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
  <StackLayout :key="state.item.key" class="card">
    <DockLayout v-if="state.item.showEditOption" stretchLastChild="false">
      <Label :text="state.item.editActionText" dock="left" class="t-14" />
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
    <FlexBoxLayout @tap="handleOnItemClick(state.item)" class="card-details">
      <FlexBoxLayout flexDirection="column" alignItems="center" alignContent="center" width="80">
        <StackLayout v-shadow="4" class="logocontainer"
          ><Image src="~/assets/images/logo.png" class="teamlogo" stretch="aspectFill"
        /></StackLayout>
        <Label text="Camels" class="h3 teamname" marginTop="4" />
      </FlexBoxLayout>
      <Label text="VS" fontSize="14" marginLeft="20" marginRight="20" />

      <FlexBoxLayout flexDirection="column" alignItems="center" alignContent="center" width="80">
        <StackLayout v-shadow="4" class="logocontainer"
          ><Image
            src="https://img.freepik.com/free-vector/stadium-of-cricket_1284-6362.jpg"
            class="teamlogo"
            stretch="aspectFill"
        /></StackLayout>
        <Label :text="state.item.title" class="h3 teamname" marginTop="4" />
      </FlexBoxLayout>
    </FlexBoxLayout>
    <label :text="state.item.body" class="info t-14" textWrap="true" />
    <FlexBoxLayout
      flexDirection="column"
      alignItems="center"
      alignContent="center"
      class="squadstatus-holder"
    >
      <Label class="h3">Squad - {{ state.item.totalSquad }} / 15</Label>
      <GridLayout :columns="state.columns" class="progressbar">
        <StackLayout col="0" class="progressbar-value"></StackLayout>
      </GridLayout>
    </FlexBoxLayout>
    <DockLayout v-if="state.item.showActionItems" class="card-actions" stretchLastChild="false">
      <Label :text="state.item.actionItemText" dock="left" class="t-14" />
      <StackLayout dock="right" orientation="horizontal">
        <AbsoluteLayout
          :style="[state.item.cancelStyles]"
          :class="[{ active: state.item.cancelIsActive }]"
          @tap="handleOnCancel(state.item)"
          class="action-button m-r-10"
        >
          <Label
            :text="getIconString(state.item.cancelIcon)"
            :class="[{ active: state.item.cancelIsActive }]"
            class="ico m-r-15"
            left="5"
            top="5"
          />
        </AbsoluteLayout>
        <AbsoluteLayout
          :style="[state.item.okStyles]"
          :class="[{ active: state.item.okIsActive }]"
          @tap="handleOnOk(state.item)"
          class="action-button"
        >
          <Label
            :text="getIconString(state.item.okIcon)"
            :class="[{ active: state.item.okIsActive }]"
            class="ico m-r-15"
            left="5"
            top="4"
          />
        </AbsoluteLayout>
      </StackLayout>
    </DockLayout>
  </StackLayout>
</template>

<style scoped lang="scss">
@import '~/_app.common.scss';
.t-14 {
  font-size: 14;
}
.card {
  height: 350;
  &-details {
    height: 130;
    justify-content: center;
    .teamlogo {
      width: 48;
      height: 48;
      border-radius: 50%;
    }
    .teamname {
      font-weight: 400;
    }
  }
  .info {
    text-align: center;
    color: $hovered-text;
  }
  &-actions {
    padding: 8 16;
    .active {
      color: $accent;
    }
    .action-button {
      height: 36;
      width: 36;
      .ico {
        transform: translateY(-10);
      }
    }
  }
}

.squadstatus-holder {
  margin-top: 25;
  max-width: 400;
  width: 275;
}

.progressbar {
  height: 5;
  margin: 10;
  border-width: 0;
  border-radius: 10;
  background: #eceff1;
}
.progressbar-value {
  background: $accent;
}
</style>
