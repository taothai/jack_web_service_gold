<template>
  <v-app >
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
                <img src="~/assets/img/logo.png" width="80"/>
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
                <img src="~/assets/img/logo.png" width="25"/>
       </div>
      </v-toolbar-items>
      <v-toolbar-title v-text="title" class="font-weight-bold ml-2"/>
      <v-spacer />
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
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'หน้าแรก',
          to: '/'
        },
         {
          icon: 'mdi-gold',
          title: 'เพิ่มราคาทอง',
          to: '/price/addprice'
        }, 
        {
          icon: 'mdi-bank-plus',
          title: 'จัดการสาขา',
          to: '/branch/ListBranch'
        }, 
         {
          icon: 'mdi-source-branch',
          title: 'เพิ่มสาขา',
          to: '/branch/AddBranch'
        }, 
         {
          icon: 'mdi-account-circle',
          title: 'ผู้ใช้งาน',
          to: '/user/ListUsers'
        },
         {
          icon: 'mdi-account-plus-outline',
          title: 'เพิ่มผู้ใช้งาน',
          to: '/user/AddUser'
        },
         {
          icon: 'mdi-cog',
          title: 'ตั้งค่าระบบ',
          to: '/setting/setting'
        },
          {
          icon: 'mdi-logout',
          title: 'ออกจากระบบ',
          to: '/setting'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ระบบจัดการราคาทอง'
    }
  }
}
</script>
