<template>
  <v-app id="inspire">
    <v-content>
      <v-overlay v-if="loading" :absolute="absolute" :value="overlay">
        <v-progress-circular
            :size="50"
            color="secondary"
            indeterminate
        ></v-progress-circular>
      </v-overlay>

      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field name="login" label="Benutzername" type="text"></v-text-field>
                  <v-text-field id="password" name="password" label="Passwort"
                                type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary" @click="loading=true">Anmelden</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
    }
  }
}
</script>
<style lang="scss">
.v-application--wrap {
  background-color: #f2f2f2;
}
</style>