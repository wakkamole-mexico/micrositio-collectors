<template>
    <v-app>
        <v-app-bar elevation="0" app color="transparent" height="80">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" dark class="hidden-md-and-up mr-4" style="background: transparent;"></v-app-bar-nav-icon>
            <div :style="$vuetify.breakpoint.mdAndUp?'width: 60px;':'width: 35px;'">
                <v-img src="/sitio/img/logo-13.png"></v-img>
            </div>
            <v-spacer />
            <v-tabs  class="hidden-sm-and-down" v-model="activeTab" height="40" style="margin-top: 40px;" hide-slider dark centered>
                <v-tab active-class="menu-activo" style="background: #C3C3C3; color: #000;" :style="tab.id<6?'margin-right: 10px;':'margin-right: auto;'" class="text-capitalize title" v-for="tab in tabs" :key="tab.id" :to="{name: tab.route}" exact>
                    <span class="font-blink">{{ tab.name }}</span>
                </v-tab>
            </v-tabs>

            <div :style="$vuetify.breakpoint.mdAndUp?'width: 180px;':'width: 120px;'">
                <v-img src="/sitio/img/logo-14.png"></v-img>
            </div>
        </v-app-bar>
        <v-navigation-drawer
                v-model="drawer"
                fixed
                temporary
        >
            <v-list
                    nav
                    dense
            >
                <v-list-item-group
                        active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item
                        v-for="tab in tabs"
                        :key="'drw-'+tab.id"
                        :to="{name:tab.route}"
                    >
                        <v-list-item-title>{{tab.name}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <!-- Sizes your content based upon application components -->
        <v-main class="fondo-ciudad">
            <!-- Provides the application the proper gutter -->
            <v-container fluid class="fill-height ma-0 pa-0">

                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer dark app fixed color="#E75C38">
            <v-col
                    class="text-left font-blink py-0"
                    cols="12" md="6"
            >
                {{ new Date().getFullYear() }} <strong>Juguetron. All Rights Reserved.</strong>
            </v-col>
            <v-col cols="12" md="6" class="text-right font-blink py-0">
                <v-btn
                        color="white"
                        text
                        rounded
                        :to="{name: 'Privacidad'}"
                >
                    Aviso de Privacidad
                </v-btn>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "Home",
        mixins: [],
        components: {},
        data: () => ({
            drawer: false,
            var: false,
            activeTab: `Home`,
            tabs: [
                { id: 1, name: "Home", route: `Home` },
                { id: 2, name: "Sets", route: `Sets` },
                { id: 3, name: "Galería", route: `Comunidad` },
                { id: 4, name: "Quizz", route: `Quiz` },
                { id: 5, name: "Cover photo", route: `Mundos` },
                { id: 5, name: "Prueba de sets", route: `Filtros` },
                { id: 6, name: "Spotify", route: `Spotify` },
            ]
        }),
        created() {},
        mounted() {},
        computed: {},
        watch: {},
        methods: {}
    };
</script>
<style>
    .menu-activo{
        background: #00A397 !important;
        color: #FFF !important;
        font-weight: bold !important;
    }
    .fondo-ciudad{
        background-image: url("/sitio/img/fondo.png");
        background-size: cover;
    }
    .texto-azul-fuerte{
        color: #2C7DFF;
    }
    .texto-azul-claro{
        color: #2CCBFF;
    }
    .fondo-ladrillo{
        background-image: url("/sitio/img/ladrillo.png");
        background-repeat: repeat;
    }
    .font-blink {
        font-family: "Blinker" !important;
    }
</style>