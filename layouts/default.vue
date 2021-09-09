<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      dark
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <div class="text-center">
              <img
                src="~/assets/img/logo.png"
                width="80"
              />
            </div>

            <v-list-item-title class="title text-center">
              <span class="font-weight-bold text-center">ราคาทองวันนี้</span>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">ระบบจัดการแอพพลิเคชันทองคำ</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark
      dense
      color="grey darken-4"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-items>
        <div class="text-center mt-3">
          <img
            src="~/assets/img/logo.png"
            width="25"
          />
        </div>
      </v-toolbar-items>
      <v-toolbar-title
        v-text="title"
        class="font-weight-bold text-subtitle-1 ml-2"
      />
      <v-spacer />

      <!-- USER ZONE -->

      <div class="text-center">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
            >
              <v-toolbar-title
                v-text="`Hi `+ Name"
                class="font-weight-regular text-subtitle-1 mr-2"
              />
              <v-badge
                top
                overlap
                left
                dot
                color="green"
              >
                <v-avatar
                  color="red accent-4"
                  size="36"
                >
                  <span class="white--text text-h5">T</span>
                </v-avatar>
              </v-badge>
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-avatar
                  color="red accent-4"
                  size="36"
                  class="mr-5"
                >
                  <span class="white--text text-h5">T</span>
                </v-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{Name }} {{LastName}}</v-list-item-title>
                  <v-list-item-subtitle>{{Email}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>

                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>
            <v-list>
              <v-list-item @click="Logout()">
                <v-list-item-action>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-action>
                <v-list-item-title>ออกจากระบบ</v-list-item-title>
              </v-list-item>

            </v-list>

            <v-card-actions>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>

      <!--  END USER ZONE -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      fixed
      app
    >
      <span>&copy;ราคาทองวันนี้ Develop by TEEKHA {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script src="./MyPrivate.js">
</script>
