<script>
import BaseButton from '../components/BaseButton.vue'
import { createMatch, updateMatch } from '../_shared/firebase/matches'
import { MatchStatus } from '../types/EMatchStatus'
import { ToastService } from '../_shared/Toasty.ts'

export default {
  name: 'MatchForm',
  components: { BaseButton },
  props: {
    cb: {
      type: Function,
      default: function() {
        return
      },
    },
    itemId: {
      type: String,
      default: '',
    },
    venue: {
      type: String,
      default: '',
    },
    postCode: {
      type: String,
      default: '',
    },
    date: {
      type: Date,
      default: new Date(),
    },
    time: {
      type: String,
      default: '',
    },
    opponent: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      state: {
        match: {
          venue: this.venue,
          postCode: this.postCode,
          date: new Date(this.date) || new Date(),
          time: this.time || `${new Date().getHours()}:${new Date().getMinutes()}`,
          opponent: this.opponent,
        },
        matchMetaData: {
          isReadOnly: false,
          commitMode: 'Immediate',
          validationMode: 'OnLostFocus',
          propertyAnnotations: [
            {
              name: 'venue',
              displayName: 'Venue',
              index: 0,
              validators: [{ name: 'NonEmpty' }, { name: 'MaximumLength', params: { length: 20 } }],
            },
            {
              name: 'postCode',
              displayName: 'Postcode',
              index: 1,
              validators: [
                { name: 'NonEmpty' },
                {
                  name: 'RegEx',
                  params: {
                    regEx:
                      '^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$',
                    errorMessage: 'Please provide valid postcode',
                  },
                },
              ],
            },
            {
              name: 'date',
              displayName: 'Date',
              index: 2,
              editor: 'DatePicker',
            },
            {
              name: 'time',
              displayName: 'Time',
              index: 3,
              editor: 'TimePicker',
            },
            {
              name: 'opponent',
              displayName: 'Opponent',
              index: 4,
              validators: [{ name: 'NonEmpty' }, { name: 'MaximumLength', params: { length: 20 } }],
            },
          ],
        },
        loading: false,
        formValidation: {},
      },
    }
  },
  methods: {
    focusSubmitButton() {
      this.$refs.submitButton.nativeView.focus()
    },
    async handleOnPropertyValidated({ object, propertyName, entityProperty }) {
      this.state = {
        ...this.state,
        formValidation: {
          ...this.state.formValidation,
          [propertyName]: { name: propertyName, isValid: entityProperty.isValid },
        },
      }
    },
    async handleOnSubmit() {
      const venue = this.$refs.matchform.getPropertyByName('venue')
      const postCode = this.$refs.matchform.getPropertyByName('postCode')
      const opponent = this.$refs.matchform.getPropertyByName('opponent')
      if (this.state.formValidation) {
        const isAnyFieldInvalid = Object.values(this.state.formValidation).filter(x => !x.isValid)
        if (isAnyFieldInvalid.length > 0) {
          isAnyFieldInvalid.forEach(x => {
            this.$refs.matchform.notifyValidated(x.name, false)
          })
          ToastService(`Invalid entries - Please try again`, '#be5138').show()
          return
        }
      }
      if (!venue.valueCandidate || !postCode.valueCandidate || !opponent.valueCandidate) {
        ToastService('Invalid entries. Please fill up all the respective details', '#be5138').show()
        return
      }

      this.$refs.matchform.commitAll()
      this.state = { ...this.state, loading: true }
      const matchDetails = {
        ...this.state.match,
        address: this.state.match.postCode,
        status: MatchStatus.ON,
      }
      const action = this.itemId
        ? updateMatch(this.itemId, matchDetails)
        : createMatch(matchDetails)
      const result = await action
      if (result && !result.isError) {
        this.$modal.close()
        this.cb()
      }
      this.state = { ...this.state, loading: false }
    },
  },
}
</script>

<template>
  <ModalStack class="modal-container">
    <StackLayout class="modal">
      <StackLayout margin-bottom="25">
        <Label
          :text="itemId ? 'Edit Match' : 'Create Match'"
          class="h2 nt-label m-10 font-weight-bold"
        />
      </StackLayout>
      <ScrollView orientation="vertical" scrollBarIndicatorVisible="false">
        <StackLayout class="nt-form">
          <RadDataForm
            ref="matchform"
            :source="state.match"
            :metadata="state.matchMetaData"
            @propertyValidated="handleOnPropertyValidated"
          >
          </RadDataForm>
          <BaseButton
            :loading="state.loading"
            @handleOnClick="handleOnSubmit"
            :text="itemId ? 'Update Match' : 'Create Match'"
            :class="{ 'm-t-20': true, '-primary': true, '-rounded-lg': true }"
            refFromParent="matchSubmitButton"
          ></BaseButton>
          <Button
            ref="closeButton"
            @tap="$modal.close"
            text="Close"
            class="btn m-t-20 -rounded-lg -secondary -outline"
          /> </StackLayout
      ></ScrollView>
    </StackLayout>
  </ModalStack>
</template>

<style scoped lang="scss">
@import '~/_app.common';
Scrollview {
  height: 100%;
}

.modal-container {
  padding: 25;
  padding-bottom: 10;
  .modal {
    margin: 20;
    margin-top: 35;
    border-radius: 8;
    horizontal-align: center;
    vertical-align: middle;
    background-color: $bg-color;
    width: 80%;
    RadDataForm {
      width: 100%;
      PropertyEditor {
        width: 100%;
      }
      DataFormEditorLabel {
        color: #212121;
        background-color: white;
        font-style: italic;
        padding: 10;
        margin: 10;
        border-color: #303f9f;
        border-width: 5;
        border-radius: 5;
        width: 150;
        position: left;
      }
    }

    .input {
      placeholder-color: #a8a8a8;
      font-size: 16;
    }
    .no-border {
      border: none;
    }
  }
}
</style>
