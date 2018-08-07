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
              @blur="$v.formData.name.$touch()"
            />
          </v-flex>
          <v-flex xs12>
            <v-textarea
              v-model="formData.description"
              label="Description"
              @blur="$v.formData.description.$touch()"
            />
          </v-flex>
          <v-card-actions>
            <v-spacer/>
            <v-btn color="red darken-1" flat @click.stop="cancel">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.stop="save">Save</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { required } from 'vuelidate/lib/validators'
  // import { mapActions } from 'vuex'

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
      getActionType () {
        return 'create'
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
      cancel () {
        this.$router.push({ path: '/' })
      }
    }
  }
</script>

<style scoped>
</style>
