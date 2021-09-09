import nuxtStorage from 'nuxt-storage';
export default {
  middleware: 'authenticated',
  created () {
  this.Name =  nuxtStorage.localStorage.getData('isname');
  this.LastName = nuxtStorage.localStorage.getData('islastname');
  this.Email = nuxtStorage.localStorage.getData('ismail');
  },
  methods: {
    Logout() {
      this.$cookies.set('goldlogin', false, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
            })
       nuxtStorage.localStorage.clear()
       this.$fire.auth.signOut()
       this.$router.push('/auth/login')
       
    
    }
  },
  data () {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
      Name : '',
      LastName : '',
      TypeUser : '',
      Email : '',
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
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ระบบจัดการราคาทอง'
    }
  }
}