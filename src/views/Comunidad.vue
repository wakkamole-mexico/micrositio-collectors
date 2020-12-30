<template>
    <v-container ref="contentv" fluid>
        <v-row justify="space-around">
            <v-card
                    outlined
                    class="pa-2"
                    :elevation="10"
                    color="transparent"
                    :width="$vuetify.breakpoint.mdAndUp?'60%':'85%'"
            >
                <v-card-text style="background: transparent;">
                    <v-row>
                        <v-col col="12" md="6" style="align-self: flex-end">
                            <div class="font-blink text-center font-weight-bold ma-6" style="color: #E75C38" :style="$vuetify.breakpoint.mdAndUp?'font-size: 3em; line-height: 1em':'font-size: 2em; line-height: 1em'">
                                Galería<br>COLLECTORS
                            </div>
                            <div class="font-blink text-center font-weight-bold ma-6" style="color: #E75C38" :style="$vuetify.breakpoint.mdAndUp?'font-size: 2em; line-height: 1em':'font-size: 1.2em; line-height: 1em; padding: 5px 10px; background: rgb(0,0,0,.5)'">
                                #GALERÍACOLLECTORS
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <iframe src="https://cdn.lightwidget.com/widgets/4d49f8e0592654b086977d72a6642a32.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>

        <v-dialog
                v-model="dialog"
                persistent
                max-width="600"
        >
            <v-card>
                <v-card-title class="headline">
                    Política de Cookies
                </v-card-title>
                <v-card-text>
                    En esta web se utilizan cookies de terceros y propias para conseguir
                    que tengas una mejor experiencia de navegación, si permanece aquí acepta su uso.
                    Puede leer más sobre el uso de cookies en nuestra <a href="/privacidad">política de privacidad</a>.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="aceptar()"
                    >
                        Aceptar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>

export default {
  name: "Home",
  mixins: [],
  components: {},
  data: () => ({
      var: false,
      dialog: false,
      model: null,
  }),
  created() {},
  mounted() {
      setTimeout(()=>{
          window.FB.XFBML.parse();
      },500);
  },
  computed: {
  },
  watch: {},
  methods: {

  }
};
</script>
<style>


</style>