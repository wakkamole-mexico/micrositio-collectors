<template>
    <v-container ref="contentv" fluid style="align-self: baseline">
        <v-row justify="space-around">
            <v-card v-if="$vuetify.breakpoint.mdAndUp" flat class="ma-0 pa-0 transparent"  width="90%">
                    <v-card-text class="ma-0 pa-0">
                        <v-sheet
                                :elevation="0"
                                width="60%"
                                class="mx-auto transparent"
                        >
                            <v-item-group>
                                <v-container>
                                    <v-row>
                                        <v-col
                                                v-for="(s,index) in sets"
                                                :key="s.id"
                                                cols="12"
                                                md="4"
                                                lg="4"
                                        >
                                            <v-item v-slot="{ active, toggle }">
                                                <v-hover>
                                                    <template v-slot:default="{ hover }">
                                                        <v-card
                                                                :color="active ? '#7F2712' : ''"
                                                                class="d-flex align-center"
                                                                dark
                                                                @click="toggle"
                                                        >
                                                            <v-img :src="s.img" contain aspect-ratio="1"></v-img>
                                                            <v-fade-transition>
                                                                <v-overlay
                                                                        v-if="hover"
                                                                        absolute
                                                                        color="#036358"
                                                                >
                                                                    <v-btn x-large color="#3D7EF5" fab @click="showItem(s,index)">
                                                                        <v-icon class="my-5">mdi-rotate-3d</v-icon>
                                                                    </v-btn>
                                                                </v-overlay>
                                                            </v-fade-transition>
                                                        </v-card>
                                                    </template>
                                                </v-hover>
                                            </v-item>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-item-group>
                        </v-sheet>
                    </v-card-text>
            </v-card>
            <v-item-group v-else>
                    <v-row>
                        <v-col
                                v-for="s in sets"
                                :key="s.id"
                                cols="12"
                                md="4"
                                class="mt-0"
                        >
                            <v-item v-slot="{ active, toggle }">
                                <v-card
                                        outlined
                                        class="pa-2 mx-auto"
                                        :elevation="10"
                                        width="80%"
                                        style="border: 10px #000 solid;"
                                        @click="toggle"
                                >
                                    <v-card-text class="text-center">
                                        <h2 class="title font-blink texto-azul-fuerte">
                                            {{s.name}}
                                        </h2>
                                    </v-card-text>
                                    <v-img
                                            contain
                                            :aspect-ratio="16/9"
                                            :height="200"
                                            :src="s.img"
                                            @click="showItem(s)"
                                    ></v-img>
                                </v-card>
                            </v-item>
                        </v-col>
                    </v-row>
            </v-item-group>
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
        <v-dialog
                v-model="dialogItem"
                persistent
                scrollable
                max-width="600"
        >
            <v-card v-if="selected!=null" style="border: 10px #000 solid;">
                <v-card-title :class="$vuetify.breakpoint.mdAndUp?'display-1':'headline'">
                    <div class="font-blink font-weight-bold">{{selected.name}}</div>
                </v-card-title>
                <v-card-text>
                    <v-img @click="goShop(selected.url)" contain height="400" :src="selected.gif"></v-img>
                    <v-row v-if="selected.url==''">
                        <v-col>Disponible en tiendas físicas</v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="dialogItem = false"
                    >
                        Cerrar
                    </v-btn>
                    <v-btn v-if="selected.url!=''"
                            color="green darken-1"
                            text
                            @click="goShop(selected.url)"
                    >
                        Comprar
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
      dialogItem: false,
      model: 1,
      selected: null,
      sets: [
          {
              id: 1,
              name: 'San Francisco | Architecture',
              img: '/sitio/img/sets/21043.jpg',
              gif: '/sitio/img/gif/21043.gif',
              url: 'https://www.juguetron.mx/lego-architecture-21043-san-francisco-673419302463?utm_source=WM&utm_medium=Landing-Landing_JG&utm_campaign=18_11_2020-Technic&utm_content=21043-&cm_mmc=WM-_-Landing-_-Landing_JG-_-Adults-21043-0'
          },
          {
              id: 2,
              name: 'Paris | Architecture',
              img: '/sitio/img/sets/21044.jpg',
              gif: '/sitio/img/gif/21044.gif',
              url: ''
          },
          {
              id: 3,
              name: 'Trafalgar Square | Architecture',
              img: '/sitio/img/sets/21045.jpg',
              gif: '/sitio/img/gif/21045.gif',
              url: 'https://www.juguetron.mx/lego-21045-trafalgar-square-673419302487?utm_source=WM&utm_medium=Landing-Landing_JG&utm_campaign=18_11_2020-Technic&utm_content=21045-&cm_mmc=WM-_-Landing-_-Landing_JG-_-Adults-21045-0'
          },
          {
              id: 4,
              name: 'Dubai | Architecture',
              img: '/sitio/img/sets/21052.jpg',
              gif: '/sitio/img/gif/21052.gif',
              url: 'https://www.juguetron.mx/lego-21052-dubai-673419319416?utm_source=WM&utm_medium=Landing-Landing_JG&utm_campaign=18_11_2020-Technic&utm_content=21052-&cm_mmc=WM-_-Landing-_-Landing_JG-_-Adults-21052-0'
          },
          {
              id: 5,
              name: "Steamboat Willie | Ideas",
              img: '/sitio/img/sets/21317.jpg',
              gif: '/sitio/img/gif/21317.gif',
              url: ''
          },
          {
              id: 6,
              name: 'Tree house | Ideas',
              img: '/sitio/img/sets/21318.jpg',
              gif: '/sitio/img/gif/21318.gif',
              url: ''
          },
          {
              id: 7,
              name: "Lamborghini Sian | Technic",
              img: '/sitio/img/sets/42115.jpg',
              gif: '/sitio/img/gif/42115.gif',
              url: 'https://www.juguetron.mx/lego-technic-42115-lamborghini-sian-fkp-37-673419318679?utm_source=WM&utm_medium=LandingL-anding_JG&utm_campaign=24_11_2020-Technic&utm_content=42115-&cm_mmc=WM-_-Landing-_-Landing_JG-_-Adults-42115-0'
          },
          {
              id: 8,
              name: "Grúa Móvil | Technic",
              img: '/sitio/img/sets/42108.jpg',
              gif: '/sitio/img/gif/42108.gif',
              url: 'https://www.juguetron.mx/lego-42108-grua-movil-673419318617?utm_source=WM&utm_medium=Landing-Landing_JG&utm_campaign=18_11_2020-Technic&utm_content=42108-&cm_mmc=WM-_-Landing-_-Landing_JG-_-Adults-42108-0'
          },
          {
              id: 9,
              name: "Star Wars | Art",
              img: '/sitio/img/sets/31200.jpg',
              gif: '/sitio/img/gif/31200.gif',
              url: 'https://www.juguetron.mx/lego-art-31200-star-wars-los-sith-673419319638?utm_source=WM&utm_medium=Landing-Landing_JG&utm_campaign=18_11_2020-Technic&utm_content=31200-&cm_mmc=WM-_-Landing-_-Landing_JG-_-Adults-31200-0'
          },
          {
              id: 10,
              name: 'Beatles | Art',
              img: '/sitio/img/sets/31198.jpg',
              gif: '/sitio/img/gif/31198.gif',
              url: 'https://www.juguetron.mx/lego-art-31198-the-beatles-673419319614?utm_source=WM&utm_medium=Landing-Landing_JG&utm_campaign=18_11_2020-Technic&utm_content=31198-&cm_mmc=WM-_-Landing-_-Landing_JG-_-Adults-31198-0'
          },
          {
              id: 11,
              name: 'Andy Warhol | Art',
              img: '/sitio/img/sets/31197.jpg',
              gif: '/sitio/img/gif/31197.gif',
              url: 'https://www.juguetron.mx/lego-art-31197-andy-warhol-s-marilyn-monroe-673419319607?utm_source=WM&utm_medium=Landing-Landing_JG&utm_campaign=18_11_2020-Technic&utm_content=31197-&cm_mmc=WM-_-Landing-_-Landing_JG-_-Adults-31197-0'
          },
      ]
  }),
  created() {},
  mounted() {
  },
  computed: {
  },
  watch: {},
  methods: {
      goShop(url){
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('target', '_blank');
          document.body.appendChild(link);
          link.click();
          /*this.dialogItem = false;
          this.selected = null;*/
      },
    showItem(item,index){
          this.model = index;
        this.selected = Object.assign({},item);
        this.dialogItem = true;
    }
  }
};
</script>
