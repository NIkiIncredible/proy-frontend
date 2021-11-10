import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
//COLORS: https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f
export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#e07a5f",
                secondary: "#3d405b"
            }
        }
    }
});
