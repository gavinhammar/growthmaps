<template>
    <v-app >
        <v-navigation-drawer  width="295"
                class="blue-grey darken-4"
                dark
                persistent
                :mini-variant="miniVariant"
                v-model="drawer"
                fixed
                app>
             <v-toolbar flat class="transparent" dense>
                <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                    <v-list-tile>
                        <v-list-tile-action v-if="!miniVariant">
                            <v-icon large color="orange">invert_colors</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content v-if="!miniVariant">
                            <v-list-tile-title><h2>Growthmaps</h2></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.stop="miniVariant = !miniVariant">
                                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>    
             <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile
                                to="/dashboard"
                                exact
                        >
                            <v-list-tile-action>
                                <v-icon>home</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Home</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Project Overview</span>
            </v-tooltip>
            <v-divider></v-divider>
            <v-list subheader :class="{'list-border-bottom' : miniVariant}">
                <v-subheader>ANALYTICS</v-subheader>
                <template v-for="item in items">
                    <v-tooltip right :disabled="!miniVariant">
                        <v-list-tile
                                :key="item.icon"
                                :to="item.link"
                                exact
                                slot="activator"
                        >
                            <v-list-tile-action>
                                <v-icon v-html="item.icon"></v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.title"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <span v-text="item.title"></span>
                    </v-tooltip>
                </template>
            </v-list>
        </v-navigation-drawer>
        
         <v-toolbar app
                flat
                dense
                color="primary"
                dark>
            <v-toolbar-side-icon
                @click.stop="drawer = !drawer"
                class="hidden-lg-and-up"
                :class="searching ? 'hidden-xs-only' : ''"
            />
            <v-menu :nudge-width="100" :class="searching ? 'hidden-xs-only' : ''">
                <v-toolbar-title slot="activator" class="pl-2">
                    <span>{{ menuItems[0] }}</span>
                    <v-icon>arrow_drop_down</v-icon>
                </v-toolbar-title>
                <v-list>
                    <v-list-tile v-for="item in menuItems" :key="item" @click="">
                        <v-list-tile-title v-text="item"></v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-spacer></v-spacer>
             <v-btn icon @click.native.stop="searchBegin">
                <v-icon>search</v-icon>
            </v-btn>
            <div :class="{'searching--closed': !searching}" class="searching">
                <v-text-field
                        id="search"
                        v-model="search"
                        append-icon="close"
                        :append-icon-cb="searchEnd"
                        label="Search"
                        hide-details
                        single-line
                        color="white"
                        @blur="onBlur"
                />
            </div>

            <v-tooltip bottom>
                <v-btn icon @click.stop="rightDrawer = !rightDrawer" slot="activator">
                    <v-badge color="red" overlap>
                        <span slot="badge">2</span>
                        <v-icon>notifications</v-icon>
                    </v-badge>
                </v-btn>
                <span>2 unread notifications</span>
            </v-tooltip>
         </v-toolbar>

         <v-content>
            <v-container fill-height>
             <v-layout justify-left align-left>
                 <v-flex shrink>
                    <slot/>
                 </v-flex>
             </v-layout>
            </v-container>
        </v-content>
     
    </v-app>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'LoggedIn',
    data () {
        return {
            currentUser: firebase.auth().currentUser,
            drawer: true,
            fixed: false,
            items: [
                {
                    icon: 'dashboard',
                    title: 'Dashboard',
                    link: '/dashboard/indicators'
                },
                {
                    icon: 'event',
                    title: 'Events',
                    link: ''
                },
                {
                    icon: 'comment',
                    title: 'Notifications',
                    link: ''
                }
            ],
                menuItems: [
                'Vue', 'NodeJS', 'Laravel'
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            tabs: null,
            searching: false,
            search: ''
        }
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(() =>
            {
                    this.$router.replace('login')
                }

            );
        },
        searchBegin () {
            this.searching = true
            setTimeout(() => document.querySelector('#search').focus(), 50)
        },
            searchEnd () {
            this.searching = false
            this.search = ''
            document.querySelector('#search').blur()
        }
    }
}
</script>


<style scoped >
    .bottom-menu {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
    .searching {
        overflow: hidden;
        width: 208px;
        padding-left: 8px;
        transition: $primary-transition;
    }
    .searching--closed {
        padding-left: 0;
        width: 0;
    }
    .searching > * {
        right: 8px;
    }
    .searching--closed > * {
        display: none;
    }
    .hidden-searching {
        @media $display-breakpoints.sm-and-down {
            display: none !important;
        }
    }
    .list-border-bottom {
        border-bottom: 1px solid rgba(255, 255, 255, .12);
    }
</style>