<template>
    <v-container ref="contentv" fluid class="fill-height">
        <v-row justify="space-around">
            <v-card class="ma-0 pa-0" color="transparent">
                <v-card-text class="ma-0 pa-0">
                    <video-player class="video-player-box"
                                  ref="videoPlayer"
                                  :options="playerOptions"
                                  :playsinline="true">
                    </video-player>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row>
            <v-card class="ma-0 pa-0" color="transparent">
                <v-card-text>
                    <v-row class="hidden-md-and-up">
                        <v-col cols="12" class="text-center">
                            <v-btn
                                    dark
                                    class="ma-2"
                                    outlined
                                    fab
                                    :to="{name: 'Home'}"
                            >
                                <v-icon>mdi-home</v-icon>
                            </v-btn>
                            <v-btn
                                    dark
                                    class="ma-2"
                                    outlined
                                    fab
                                    :to="{name: 'Sets'}"
                            >
                                <v-icon>mdi-toy-brick</v-icon>
                            </v-btn>
                            <v-btn
                                    dark
                                    class="ma-2"
                                    outlined
                                    fab
                                    :to="{name: 'Comunidad'}"
                            >
                                <v-icon>mdi-image</v-icon>
                            </v-btn>
                            <v-btn
                                    dark
                                    class="ma-2"
                                    outlined
                                    fab
                                    :to="{name: 'Quiz'}"
                            >
                                <v-icon>mdi-gamepad-square</v-icon>
                            </v-btn>
                            <v-btn
                                    dark
                                    class="ma-2"
                                    outlined
                                    fab
                                    :to="{name: 'Mundos'}"
                            >
                                <v-icon>mdi-cloud-download</v-icon>
                            </v-btn>
                            <v-btn
                                    dark
                                    class="ma-2"
                                    outlined
                                    fab
                                    :to="{name: 'Filtros'}"
                            >
                                <v-icon>mdi-instagram</v-icon>
                            </v-btn>
                            <v-btn
                                    dark
                                    class="ma-2"
                                    outlined
                                    fab
                                    :to="{name: 'Spotify'}"
                            >
                                <v-icon>mdi-spotify</v-icon>
                            </v-btn>
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
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
export default {
  name: "Home",
  mixins: [],
  components: {
      videoPlayer
  },
  data: () => ({
      var: false,
      dialog: false,
      playerOptions: {
          // videojs options
          autoplay: true,
          muted: false,
          language: 'es',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
              type: "video/mp4",
              src: "/sitio/video/collectors.mp4"
          }],
          //poster: "/sitio/img/video.png",
          width: '',
          height: 100,
      }
  }),
  created() {},
  mounted() {
      this.calcularVideo();
      window.addEventListener('resize', this.myEventHandler)
      //this.playerOptions.width = 80 * window.innerWidth / 100;

      //this.dialog = true;
  },
    destroyed() {
        window.removeEventListener('resize', this.myEventHandler)
    },
  computed: {
      player() {
          return this.$refs.videoPlayer.player
      }
  },
  watch: {},
  methods: {
      calcularVideo(){
          if(this.$vuetify.breakpoint.width>1024){
              this.playerOptions.width = '';
              this.playerOptions.height = this.$refs.contentv.offsetHeight - 100;
          }else{
              this.playerOptions.height = '';
              this.playerOptions.width = 80 * window.innerWidth / 100;
          }
      },
      aceptar(){
          this.dialog = false;
          this.player.play();
      },
      myEventHandler(e) {
          this.calcularVideo();
      }
  }
};
</script>
<style>
    .vjs-big-play-button{
        top: calc(50% - 20px) !important;
        left: calc(50% - 45px) !important;
    }
</style>
