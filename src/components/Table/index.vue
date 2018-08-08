<template>
  <div class="mt-3">
    <v-data-table
      :headers="headers"
      :items="tableData"
      disable-initial-sort
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.description }}</td>
        <td class="text-xs-center">
          <v-btn
            color="blue"
            fab
            flat
            slot="activator"
            @click="editItem(props.item.id)"
          >
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn
            color="red"
            fab
            flat
            slot="activator"
            @click="openDeleteItemModal(props.item.id)"
          >
            <v-icon>delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-alert
          :value="true"
          color="red dark"
          icon="warning"
        >
          Sorry, nothing to display here :(
        </v-alert>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-btn
        color="primary"
        @click="createNewItem"
      >
        Create New Item
      </v-btn>
    </div>
    <v-dialog
      v-model="isDeleteModalOpen"
      max-width="400"
      persistent
    >
      <v-card>
        <v-card-title class="headline">Do you really want to delete this item?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            flat
            @click="closeDeleteItemModal"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            flat
            @click="removeItem"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Table',
    data () {
      return {
        headers: [
          {
            text: 'id',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Name', value: 'name', align: 'left', sortable: true },
          { text: 'Description', value: 'description', align: 'left', sortable: true },
          { text: 'Actions', align: 'center', value: 'actions', sortable: false }
        ],
        isDeleteModalOpen: false,
        activeItemId: ''
      }
    },
    computed: {
      ...mapState([
        'tableData'
      ])
    },
    methods: {
      ...mapActions([
        'deleteTableItem'
      ]),
      createNewItem () {
        this.$router.push({ path: `/table-item/create` })
      },
      openDeleteItemModal (id) {
        this.activeItemId = id
        this.isDeleteModalOpen = true
      },
      closeDeleteItemModal () {
        this.isDeleteModalOpen = false
      },
      editItem (id) {
        this.$router.push({ path: `/table-item/${id}` })
      },
      removeItem () {
        this.deleteTableItem(this.activeItemId)
        this.closeDeleteItemModal()
      }
    }
  }
</script>

<style scoped>
</style>
