<template>
  <v-app id="inspire">

    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-sheet
          color="grey lighten-4"
          class="pa-4"
      >
        <v-avatar
            class="mb-4"
            color="grey darken-1"
            size="64"
        ></v-avatar>

        <div>Niklas Ehlen <span class="grey--text">- Mitarbeiter</span></div>
        <div>30 Tage übrig</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list shaped>
        <v-list-item
            v-for="[icon, text, link] in links"
            :key="icon"
            link
            :to="link"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="route-link">
            <v-list-item-title>
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
          class="py-8 px-6"
          fluid
      >
        <v-row>
          <v-col cols="12">
            <v-card>
              <router-view></router-view>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
    links: [
      ['mdi-calendar', 'Übersicht', '/intern/overview'],
      ['mdi-plus-box', 'Neuer Antrag', '/intern/new-entry'],
      ['mdi-account-multiple', 'Benutzer', '/intern/users'],
      ['mdi-backspace-outline', 'Abmelden', '/intern/logout']
    ],
  }),
}
</script>

<style lang="scss">
.v-application--wrap {
  background-color: #f2f2f2;
}

.route-link {
  a {
    text-decoration: none;
  }
  .router-link-active {
    font-weight: bold;
  }
}
</style>