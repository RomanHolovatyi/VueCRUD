<template>
  <v-layout fluid>
    <v-flex fluid>
      <v-card fluid>
        <v-card-title>
          <span class="headline">{{ getActionType }} news</span>
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
            <v-text-area
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
export default {
  name: 'TableItem',
  data () {
    return {
      formData: {
        name: '',
        description: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
