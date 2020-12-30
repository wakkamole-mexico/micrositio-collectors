<template>
    <v-container ref="contentv" fluid style="align-self: normal">
        <transition name="fade">
            <div class="loading" v-if="loading">
                <div class="loading-window">
                    <div class="car">
                        <div class="strike"></div>
                        <div class="strike strike2"></div>
                        <div class="strike strike3"></div>
                        <div class="strike strike4"></div>
                        <div class="strike strike5"></div>
                        <div class="car-detail spoiler"></div>
                        <div class="car-detail back"></div>
                        <div class="car-detail center"></div>
                        <div class="car-detail center1"></div>
                        <div class="car-detail front"></div>
                        <div class="car-detail wheel"></div>
                        <div class="car-detail wheel wheel2"></div>
                    </div>
                    <div class="loading-text">
                        <span class="loading-text-words">L</span>
                        <span class="loading-text-words">O</span>
                        <span class="loading-text-words">A</span>
                        <span class="loading-text-words">D</span>
                        <span class="loading-text-words">I</span>
                        <span class="loading-text-words">N</span>
                        <span class="loading-text-words">G</span>
                    </div>
                </div>
            </div>
        </transition>
        <v-row v-if="false">
            <v-col class="text-center">
                <v-btn outlined dark @click="dialog=true">Terminos y condiciones</v-btn>
            </v-col>
        </v-row>
        <v-row justify="space-around" v-if="login && !started && !finished">
            <v-card
                    color="transparent"
                    class="pa-2"
                    flat
                    :elevation="10"
                    :width="$vuetify.breakpoint.mdAndUp?'70%':'90%'"
            >
                <v-card-text >
                    <v-row>
                        <v-col cols="12" class="pa-0 ma-0">
                            <div class="font-blink white--text text-center font-weight-bold ma-6" :style="$vuetify.breakpoint.mdAndUp?'font-size: 3em; line-height: 1em':'font-size: 2em; line-height: 1em'">
                                MÚSICO, PINTOR, JEDI, ARQUITECTO, PILOTO
                            </div>
                            <div class="font-blink white--text text-center font-weight-bold ma-6" :style="$vuetify.breakpoint.mdAndUp?'font-size: 3em; line-height: 1em':'font-size: 2em; line-height: 1em'">
                                ¿QUÉ TIPO DE COLLECTOR ERES?
                            </div>
                            <div class="font-blink white--text text-center ma-6" :style="$vuetify.breakpoint.mdAndUp?'font-size: 2em; line-height: 1em':'font-size: 2em; line-height: 1em'">
                                ¡Descúbrelo contestando estas preguntas!
                            </div>
                        </v-col>
                    </v-row>
                    <v-form ref="formStart">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                        dense
                                        :hide-details="
                                      $vuetify.breakpoint.smAndDown
                                    "
                                        v-model="form.nombre"
                                        dark
                                        label="Nombre"
                                        outlined
                                        :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                        dark
                                        outlined
                                        dense
                                        :hide-details="
                                      $vuetify.breakpoint.smAndDown
                                    "
                                        v-model="form.apellido"
                                        label="Apellidos"
                                        :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-dialog
                                        ref="dialog"
                                        v-model="modalFn"
                                        persistent
                                        width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                                dark
                                                outlined
                                                dense
                                                :hide-details="
                                          $vuetify.breakpoint.smAndDown
                                        "
                                                v-model="computedDateFormatted"
                                                label="Tu cumpleaños"
                                                hint="Día / Mes / Año"
                                                persistent-hint
                                                readonly
                                                v-on="on"
                                                :rules="[rules.required]"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                            ref="picker"
                                            v-model="form.fechaNacimiento"
                                            :max="
                                        new Date().toISOString().substr(0, 10)
                                      "
                                            min="1950-01-01"
                                            @change="modalFn = false"
                                    ></v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                        dense
                                        :hide-details="
                                      $vuetify.breakpoint.smAndDown
                                    "
                                        v-model="form.email"
                                        dark
                                        label="E-mail"
                                        outlined
                                        :rules="[rules.required, rules.email]"
                                        @keypress.enter="iniciar()"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="text-center">
                                <v-btn
                                        @click.prevent="iniciar()"
                                        dark
                                        x-large
                                        color="#E25B37"
                                        rounded
                                        class="text-capitalize black--text font-weight-bold display-1 pa-8"
                                >
                                    <span class="font-blink">Hacer test</span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row justify="space-around" v-if="started">
            <v-card
                    color="transparent"
                    class="pa-2"
                    flat
                    :elevation="10"
                    :width="$vuetify.breakpoint.mdAndUp?'70%':'90%'"
            >
                <v-card-text v-if="started">
                    <v-row class="mb-4">
                        <v-col cols="12" class="white--text my-0 py-0 display-1">
                            <span class="font-blink" style="color: #CE5232">{{form.nombre}}</span>
                        </v-col>
                        <v-col cols="12" class="white--text my-0 py-0 display-1">
                            <span class="font-blink" style="color: #CE5232">{{form.email}}</span>
                        </v-col>
                    </v-row>
                    <v-form ref="formQuiz">
                        <template v-for="(item,index) in quiz">
                            <v-row>
                                <v-col cols="12" class="white--text mb-0 title">
                                    <span class="font-blink">{{item.question.text}}</span>
                                </v-col>
                                <v-col cols="12" class="mt-0">
                                    <v-radio-group dark v-model="form.choices[index]" :rules="[rules.required]" class="mt-0">
                                        <template v-for="ans in item.answers">
                                            <v-radio :value="ans.value">
                                                <template v-slot:label>
                                                    <div class="title">
                                                        <span class="font-blink">
                                                            <strong>{{ans.id}}. </strong>
                                                        {{ans.text}}
                                                        </span>
                                                    </div>
                                                </template>
                                            </v-radio>
                                        </template>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                        </template>
                    </v-form>
                    <v-row>
                        <v-col cols="12" class="yellow--text text-center pa-0 ma-0">
                            {{this.errorQuiz}}
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-btn
                                    :disabled="sending"
                                    @click="send()"
                                    dark
                                    color="#EDD706"
                                    class="text-capitalize black--text font-weight-bold"
                            >
                                Enviar Respuestas
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row justify="space-around" class="fill-height" v-if="finished">
            <v-card
                    color="transparent"
                    class="pa-2"
                    flat
                    :width="$vuetify.breakpoint.mdAndUp?'70%':'90%'"
                    style="align-self: center"
                    v-if="perfil!=null"
            >
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-img width="80%" :src="perfil.picture"></v-img>
                        </v-col>
                        <v-col cols="12" md="6" style="align-self: center">
                            <v-row>
                                <v-col cols="12" class="display-2 white--text text-left">
                                    <span class="font-blink">
                                        {{perfil.description}}
                                    </span>
                                </v-col>
                                <v-col cols="12" class="headline white--text text-justify">
                                    <span class="font-blink">
                                        {{perfil.text}}
                                    </span>
                                </v-col>
                                <v-col cols="12" class="text-right">
                                    <v-btn color="#E75C38" to="/sitio" dark>
                                        Regresar
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
        <v-dialog
                v-model="dialog"
                persistent
                scrollable
                max-width="600"
        >
            <v-card>
                <v-card-title class="headline">
                    Términos y Condiciones
                </v-card-title>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="dialog=false"
                    >
                        Aceptar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import axios from "axios";
    import { RULES } from "../mixins/rules";
export default {
  name: "Home",
  mixins: [RULES],
  components: {},
  data: () => ({
      var: false,
      dialog: false,
      model: null,
      login: true,
      started: false,
      finished: false,
      loading: false,
      sending: false,
      error: '',
      errorQuiz: '',
      quiz: [
        {
            question: {
                id: 1,
                text: '¿En qué ciudad te gustaría vivir? ',
                answer: 'A',
            },
            answers: [
                {id: 'a', value: 'a', text: 'Londres.'},
                {id: 'b', value: 'b', text: 'Paris.'},
                {id: 'c', value: 'c', text: 'Nueva York.'},
                {id: 'd', value: 'd', text: 'Shangai.'},
                {id: 'e', value: 'e', text: 'Yo estoy bien en mi casa de árbol.'},
                {id: 'f', value: 'f', text: 'Mónaco.'},
            ]
        },
        {
            question: {
                id: 2,
                text: '¿Cuál sería el primer objeto que te llevarías a una isla desierta?',
                answer: 'B',
            },
            answers: [
                {id: 'a', value: 'd', text: 'Mi sable de luz.'},
                {id: 'b', value: 'b', text: 'Mi cuadro favorito.'},
                {id: 'c', value: 'a', text: 'Mi colección de discos.'},
                {id: 'd', value: 'f', text: 'Una grúa.'},
                {id: 'e', value: 'c', text: 'Un mapa.'},
                {id: 'f', value: 'e', text: 'Mi canasta de picnic.'},
            ]
        },
        {
            question: {
                id: 3,
                text: 'Escoge tu pasatiempo favorito',
                answer: 'A',
            },
            answers: [
                {id: 'a', value: 'a', text: 'Escuchar música de los 80´s.'},
                {id: 'b', value: 'd', text: 'Ver películas.'},
                {id: 'c', value: 'b', text: 'Pintar.'},
                {id: 'd', value: 'c', text: 'Armar sets de LEGO.'},
                {id: 'e', value: 'e', text: 'Hacer un picnic al aire libre.'},
                {id: 'f', value: 'f', text: 'Carreras de autos.'},
            ]
        },
        {
          question: {
              id: 4,
              text: 'Si tuvieras un superpoder, ¿Cuál sería?\n',
              answer: 'A',
          },
          answers: [
              {id: 'a', value: 'd', text: 'Volar.'},
              {id: 'b', value: 'f', text: 'Ir a toda velocidad.'},
              {id: 'c', value: 'a', text: 'Tocar cualquier instrumento.'},
              {id: 'd', value: 'b', text: 'Pintar cualquier cosa.'},
              {id: 'e', value: 'c', text: 'Telequinesis (Mover objetos con la mente).'},
              {id: 'f', value: 'e', text: 'Hablar con las plantas.'},
          ]
        },
        {
          question: {
              id: 5,
              text: 'Escoge a tu personaje favorito',
              answer: 'A',
          },
          answers: [
              {id: 'a', value: 'a', text: 'John Lennon.'},
              {id: 'b', value: 'b', text: 'Marilyn Monroe.'},
              {id: 'c', value: 'e', text: 'Mickey Mouse.'},
              {id: 'd', value: 'd', text: 'Darth Vader.'},
              {id: 'e', value: 'f', text: 'Michael Schumacher.'},
              {id: 'f', value: 'c', text: 'Antoni Gaudí.'},
          ]
        }
      ],
      access_code: '',
      modalFn: false,
      form: {
          nombre: '',
          apellido: '',
          fechaNacimiento: "",
          email: '',
          categoria: null,
          choices: [null,null,null,null,null],
          resultado: false
      },
      resultado: '',
      perfiles: [
          {id: 'a', tipo: 'Música', name: 'The Beatles', picture: '/sitio/img/quiz/beatles.png', description: '¡La música nos une! ', text: 'Eres una persona reservada pero que irradia amor, te gusta escribir y eres un músico nato, tocas el instrumento que te pidan. ¡Eres el alma de la fiesta!\n'},
          {id: 'b', tipo: 'Artista', name: 'Andy Warhol', picture: '/sitio/img/quiz/andywarh.png', description: '¡Eres todo un artista!', text: 'Lo tuyo lo tuyo es el arte, tienes una visión increíble, tu mente es como una galaxia extraordinaria y entre tu grupo de amigos tú eres el creativo y al que se le ocurren las ideas más locas.'},
          {id: 'c', tipo: 'Arquitecto', name: 'Arquitecto', picture: '/sitio/img/quiz/arquitecture.png', description: '¡Eres un arquitecto hecho y derecho!', text: 'Tienes mucha habilidad para el trabajo manual, eres una persona muy observadora y pones mucha atención en los detalles. A ti no te tenemos que decir que los Bricks de LEGO son lo tuyo porque ya sabemos que tienes una facilidad increíble para la construcción de objetos tridimensionales.'},
          {id: 'd', tipo: 'Star Wars', name: 'Star Wars', picture: '/sitio/img/quiz/starw.png', description: 'La fuerza te acompaña…', text: 'Te encantan los desafíos y eres hábil para iniciar los proyectos, eres seguro de tí mismo y buscas el poder y el control. Tus motivaciones son dominar a los que te rodean y tener el control de todas las situaciones. Quieres probar tu fuerza y te resistes a la debilidad.'},
          {id: 'e', tipo: 'Ideas', name: 'Ideas', picture: '/sitio/img/quiz/ideas.png', description: 'Eres un estuche de monerías', text: 'Eres un amante de la naturaleza, te gusta estar en constante contacto con ella y construir cosas con lo que la naturaleza te brinda. No cabe duda que amas el planeta tierra y buscas lo mejor para él. Te gusta pasar tiempo en familia y hacer picnics de vez en cuando.'},
          {id: 'f', tipo: 'Coches', name: 'Coches', picture: '/sitio/img/quiz/technic.png', description: 'La velocidad es lo tuyo', text: 'Eres un amante a la velocidad y a los deportes extremos, ¡Entre tus amig@s eres el más aventado y extrovertido! Tú sólo necesitas un volante, una pista y ya, tú te encargas de lo demás.'},
      ]
  }),
  created() {},
  mounted() {
  },
  computed: {
      computedDateFormatted() {
          return this.formatDate(this.form.fechaNacimiento);
      },
      perfil(){
          if(this.resultado!=''){
              return this.perfiles.filter(i => i.id == this.resultado)[0];
          }else
              return null;
      }
  },
  watch: {
      modalFn(val) {
          val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
      }
  },
  methods: {
      formatDate(date) {
          if (!date) return null;
          const [year, month, day] = date.split("-");
          return `${day}/${month}/${year}`;
      },
      iniciar(){
          if (this.$refs.formStart.validate()) {
              this.started = true;
          }
      },
      acceder(){
          if(this.access_code!=""){
              if(this.access_code==="GPRIX2020"){
                  /*this.login = true;
                  this.access_code = '';
                  this.error = '';*/
                  this.error = "Lo sentimos el periodo para participar ha terminado";
              }else
                  this.error = "Código de acceso incorrecto";
          }else{
              this.error = "Proporcione el código de acceso";
          }
      },
      send() {
          this.errorQuiz = '';
          if (this.$refs.formQuiz.validate()) {
              this.loading = true;
              this.sending = true;
              axios
                  .post("/sitio/functions/save.php", {
                      email: this.form.email,
                      name: this.form.nombre,
                      lastname: this.form.apellido,
                      birthday: this.form.fechaNacimiento,
                      p1: this.form.choices[0],
                      p2: this.form.choices[1],
                      p3: this.form.choices[2],
                      p4: this.form.choices[3],
                      p5: this.form.choices[4],
                  })
                  .then(response => {
                      if (response.data.result) {
                          this.resultado = response.data.perfil;
                          this.finished = true;
                          this.started = false;
                      }else{
                          this.errorQuiz = response.data.msg;
                      }
                  })
                  .catch(err => {
                      this.loading = false;
                      this.sending = false;
                  })
                  .finally(() => {
                      this.loading = false;
                      this.sending = false;
                  });
          } else {
              console.log("errores en formulario");
          }
      },
  }
};
</script>
