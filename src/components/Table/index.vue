<template>
  <div>
    <v-btn>fwefwef</v-btn>
    <v-data-table
      :headers="headers"
      :items="tableItems"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.description }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here :(
        </v-alert>
      </template>
    </v-data-table>
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
        { text: 'Name', value: 'name', sortable: true },
        { text: 'Description', value: 'description', sortable: true },
        { text: 'Actions', value: 'actions' }
      ],
      tableItems: []
    }
  }
}
</script>

<style scoped>
</style>
