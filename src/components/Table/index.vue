<template>
  <div class="mt-3">
    <v-data-table
      :headers="headers"
      :items="tableItems"
      disable-initial-sort
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.id }}</td>
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.description }}</td>
        <td class="text-xs-center">
          <v-btn
            color="blue"
            fab
            flat
            slot="activator"
            @click="openEditAdminModal(props.item)"
          >
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn
            color="red"
            fab
            flat
            slot="activator"
            @click="openEditAdminModal(props.item)"
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
      <v-btn color="primary" @click="createNewItem">Create New Item</v-btn>
    </div>
  </div>
</template>

<script>
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
        { text: 'Name', value: 'name', align: 'center', sortable: true },
        { text: 'Description', value: 'description', align: 'center', sortable: true },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false }
      ],
      tableItems: [
        {
          id: 1,
          name: 'name123',
          description: 'wq qur weufewu wefwf'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
