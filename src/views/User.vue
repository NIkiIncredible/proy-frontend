<template>
  <div class="pa-5">
      <h2>Benutzer</h2>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
      <v-data-table
          :headers="headers"
          :items="user"
          :search="search"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              small
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
              color="primary"
              @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>

    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
 export default {
   data() {
     return {
       dialog: false,
       dialogDelete: false,
       headers: [
         { text: 'Nutzername', align: 'start', sortable: true, value: 'name' },
         { text: 'Name', value: 'fullName' },
         { text: 'Urlaub übrig', value: 'vacationLeft' },
         { text: 'Urlaub gesamt', value: 'vacationTotal' },
         { text: 'Actions', value: 'actions', sortable: false },
       ],
       editedItem: {
         name: '',
         fullName: 0,
         vacationLeft: 0,
         vacationTotal: 0,
       },
       defaultItem: {
         name: '',
         fullName: 0,
         vacationLeft: 0,
         vacationTotal: 0,
       },
     }
   },
   methods: {
     editItem (item) {
       this.editedIndex = this.desserts.indexOf(item)
       this.editedItem = Object.assign({}, item)
       this.dialog = true
     },

     deleteItem (item) {
       this.editedIndex = this.desserts.indexOf(item)
       this.editedItem = Object.assign({}, item)
       this.dialogDelete = true
     },

     deleteItemConfirm () {
       this.desserts.splice(this.editedIndex, 1)
       this.closeDelete()
     },

     close () {
       this.dialog = false
       this.$nextTick(() => {
         this.editedItem = Object.assign({}, this.defaultItem)
         this.editedIndex = -1
       })
     },

     closeDelete () {
       this.dialogDelete = false
       this.$nextTick(() => {
         this.editedItem = Object.assign({}, this.defaultItem)
         this.editedIndex = -1
       })
     },
   }
 }
</script>