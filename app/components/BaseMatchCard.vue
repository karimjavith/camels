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
      },
    }
  },
  methods: {
    getSquadProgessValue() {
      return this.state.item.totalSquad * 10 + '*,' + (150 - this.state.item.totalSquad * 10) + '*'
    },
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
        this.state.item.totalSquad = this.state.item.totalSquad - 1
        this.state.item.okIsActive = false
        this.state.item.cancelIsActive = true
      }
      this.$emit('handleOnCancelCb', {
        status: true,
        ...item,
        cb: this.handleOnResetState,
      })
    },
    handleOnOk(item) {
      if (this.shouldUpdateLocalState) {
        this.state.item.totalSquad = this.state.item.totalSquad + 1
        this.state.item.okIsActive = true
        this.state.item.cancelIsActive = false
      }
      this.$emit('handleOnOkCb', { status: true, ...item, cb: this.handleOnResetState })
    },
    handleOnResetState(cancelIsActive, okIsActive, totalSquad) {
      this.state.item.cancelIsActive = cancelIsActive
      this.state.item.okIsActive = okIsActive
      this.state.item.totalSquad = totalSquad
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
    <FlexBoxLayout
      @tap="handleOnItemClick(state.item)"
      :class="[
        'card-details',
        {
          noedit: !state.item.showEditOption,
        },
      ]"
    >
      <FlexBoxLayout
        flexDirection="column"
        alignItems="center"
        alignContent="center"
        class="teamholder"
      >
        <StackLayout v-shadow="2" class="logocontainer"
          ><Image src="~/assets/images/logo.png" class="teamlogo" stretch="aspectFill"
        /></StackLayout>
        <Label text="Camels" class="h4 teamname" marginTop="4" />
      </FlexBoxLayout>
      <Label text="VS" fontSize="14" marginLeft="16" marginRight="16" />

      <FlexBoxLayout
        flexDirection="column"
        alignItems="center"
        alignContent="center"
        class="teamholder"
      >
        <StackLayout v-shadow="2" class="logocontainer"
          ><Image
            src="https://img.freepik.com/free-vector/stadium-of-cricket_1284-6362.jpg"
            class="teamlogo"
            stretch="aspectFill"
        /></StackLayout>
        <Label :text="state.item.title" class="h4 teamname" marginTop="4" />
      </FlexBoxLayout>
    </FlexBoxLayout>
    <label :text="state.item.body" class="info h4" textWrap="true" />
    <FlexBoxLayout justifyContent="space-between" class="squadstatus-holder">
      <Label class="h4">Squad - {{ state.item.totalSquad }} / 15</Label>
      <GridLayout :columns="getSquadProgessValue()" class="progressbar">
        <StackLayout col="0" class="progressbar-value"></StackLayout>
      </GridLayout>
    </FlexBoxLayout>
    <FlexBoxLayout
      v-if="state.item.showActionItems"
      justifyContent="space-between"
      class="card-actions"
    >
      <Label :text="state.item.actionItemText" class="h4" />
      <StackLayout orientation="horizontal">
        <Button
          :key="state.item.cancelIsActive"
          @tap="handleOnCancel(state.item)"
          :class="['-rounded-lg votebutton', { active: state.item.cancelIsActive }]"
          text="No"
        />
        <Button
          :key="state.item.okIsActive"
          @tap="handleOnOk(state.item)"
          :class="['-rounded-lg votebutton', { active: state.item.okIsActive }]"
          text="Yes"
        />
      </StackLayout>
    </FlexBoxLayout>
  </StackLayout>
</template>

<style scoped lang="scss">
@import '~/_app.common.scss';
.card {
  height: 300;
  &-details {
    justify-content: center;
    &.noedit {
      margin-top: 24;
    }
    .teamholder {
      width: 128;
      height: 128;
    }
    .logocontainer {
      border-radius: 50%;
      width: 64;
      height: 64;
      padding: 4;
      border-width: 1px;
      border-color: $border-color-light;
    }
    .teamlogo {
      width: 64;
      height: 64;
      border-radius: 50%;
    }
    .teamname {
      font-weight: 400;
    }
  }

  .info {
    text-align: center;
    color: $hovered-text;
    border-radius: 25%;
    width: 320;
    background-color: $hovered-bg;
  }
  &-actions {
    width: 100%;
    margin-top: 4;
    height: 48;
    padding-left: 16;
    .votebutton {
      background-color: $hovered-bg;
      color: $text-color;
      font-size: 10;
      width: 64;
      margin-left: -6;
      &.active {
        background-color: $accent-light;
        color: $accent;
        font-weight: 500;
      }
    }
  }
}

.squadstatus-holder {
  width: 100%;
  margin-top: 16;
  padding-left: 16;
  padding-right: 8;
}

.progressbar {
  width: 80;
  height: 4;
  margin: 10;
  border-width: 0;
  border-radius: 10;
  background-color: $hovered-bg;
}
.progressbar-value {
  background: $accent;
}
</style>
