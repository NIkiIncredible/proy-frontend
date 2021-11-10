<template>
  <div class="pa-5">
    <h2>Neuer Urlaubsantrag</h2>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
              v-model="dateRangeText"
              label="An welchen Tagen?"
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
            v-model="dates"
            @input="menu2 = false"
            range
        ></v-date-picker>
      </v-menu>

      <div>

      </div>

      <v-textarea
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Beschreibung"
          prepend-icon="mdi-message-reply-text"
          required
      ></v-textarea>

      <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Bist du dir sicher?"
          required
      ></v-checkbox>

      <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
      >
        Absenden
      </v-btn>

      <v-btn
          color="secondary"
          class="mr-4"
          @click="reset"
      >
        Zurücksetzen
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    dates: [],
    menu: false,
    valid: true,
    name: '',
    checkbox: false,
  }),
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
  },
}
</script>