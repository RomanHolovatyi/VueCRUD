<template>
  <v-layout fluid>
    <v-flex fluid>
      <v-card fluid>
        <v-card-title>
          <span class="headline">{{ getActionType }} item</span>
        </v-card-title>
        <v-card-text>
          <v-flex xs12>
            <v-text-field
              v-model="formData.name"
              label="Name"
              :error-messages="errorMessages('name')"
              @blur="$v.formData.name.$touch()"
            />
          </v-flex>
          <v-flex xs12>
            <v-textarea
              v-model="formData.description"
              label="Description"
              :error-messages="errorMessages('description')"
              @blur="$v.formData.description.$touch()"
            />
          </v-flex>
          <v-card-actions>
            <v-spacer/>
            <v-btn color="red darken-1" flat @click="cancel">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'TableItem',
    data () {
      return {
        formData: {
          name: '',
          description: ''
        }
      }
    },
    computed: {
      ...mapGetters([
        'getTableItemById'
      ]),
      getActionType () {
        return this.isNewItem ? 'Create' : 'Edit'
      },
      isNewItem () {
        return this.$route.params.id === 'create'
      }
    },
    validations: {
      formData: {
        name: {
          required
        },
        description: {
          required
        }
      }
    },
    methods: {
      ...mapActions([
        'createTableItem',
        'editTableItem'
      ]),
      hasFieldError (field) {
        return this.$v.formData[field].$dirty && this.$v.formData[field].$invalid
      },
      errorMessages (field) {
        return this.hasFieldError(field)
          ? 'This field is required'
          : []
      },
      cancel () {
        this.$router.push({ path: '/' })
      },
      createId () {
        return `_${Math.random().toString(36).substr(2, 16)}`
      },
      save () {
        this.$v.formData.$touch()
        if (this.$v.formData.$invalid) return
        if (this.isNewItem) {
          this.formData.id = this.createId()
          this.createTableItem(this.formData)
        } else {
          this.editTableItem(this.formData)
        }
        this.cancel()
      }
    },
    mounted () {
      if (!this.isNewItem) {
        this.formData = this.getTableItemById(this.$route.params.id)
      }
    }
  }
</script>

<style scoped>
</style>
