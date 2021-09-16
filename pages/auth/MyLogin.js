import nuxtStorage from "nuxt-storage";
export default {
  layout: "login",
  middleware: 'notauthenticated',
  head() {
    return {
      title: "เข้าสู่ระบบจัดการจัดการ",
      description: "เข้าจัดการระบบ Admin"
    };
  },
  data() {
    return {
      Loading : false, 
      valid: true,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "รูปแบบไม่ถูกต้อง"
      ],
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`
      },
      show1: false,
      Email: "jackapigold@gmail.com",
      Password: "z,=v[86i,kd8iy[",

      //alert zone
      alerttext: "",
      snackbar: false,
      vertical: true,
      color: "success"
    };
  },
  methods: {
    validate() {
      var vd = this.$refs.form.validate();
      if (vd) {
          this.Login()
          //console.log('login');
      }else{
        this.ErrorWork('กรอกข้อมูลไม่ถูกต้อง')
        //console.log('not login');
      }

    },
    async Login() {
        try {
          ////console.log('login');
          await this.$fire.auth.signInWithEmailAndPassword(
            this.Email,
            this.Password
                )
            var user = this.$fire.auth.currentUser;
                    if (!user) {
                     this.ErrorWork('ไม่สามารถโหลดข้อมูลโปรไฟล์ได้ โปรดลองอีกครั้ง')
                    }else{
                        this.SucceceWork('เข้าระบบสำเร็จ โปรดรอสักครู่..')
                        this.LoadProfile(user)
                        
                    }
                   
              } catch (e) {
                 this.ErrorWork('เข้าระบบไม่ได้ : ' + e)
              }
        }, 
async LoadProfile(user){
        //console.log('Load profile');
        try {
            await this.$fire.firestore
            .collection("USER")
            .where('Email', '==', this.Email)
            .where('TypeUserSelct','==' ,'admin')
            .get()
            .then(snap => {
                var dd = snap.docs.map(function(doc) {
                var db = doc.data();
                db.id = doc.id;
                return db;
                });
                if (dd.length < 1) {
                    this.ErrorWork('คุณไม่มีสิทธิ์มากพอในการจัดการระบบ โปรดติดต่อผู้ดูแลระบบ')
                }else{
                    this.SaveStatus(dd)
                }
            });
        } catch (error) {
            this.ErrorWork('โหลดข้อมูลสมาชิกไม่ได้ โปรดลองอีกครั้ง : ' + error)
        }
    },
    SaveStatus(db){
      //console.log(db);
      //console.log('Save Status');
      this.$cookies.set('goldlogin', true, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
            })
       nuxtStorage.localStorage.setData('ismail',this.Email,'30','d');
       nuxtStorage.localStorage.setData('isname',db[0].Name,'30','d');
       nuxtStorage.localStorage.setData('islastname',db[0].Lastname,'30','d');
       nuxtStorage.localStorage.setData('isuser',db[0].TypeUserSelct,'30','d');
       this.LoadSetting()
    },
  async LoadSetting(){
      try {
        await this.$fire.firestore
        .collection("SETTING")
        .get()
        .then(snap => {
            var dd = snap.docs.map(function(doc) {
            var db = doc.data();
            db.id = doc.id;
            return db;
            });
            var db = dd[0]
            console.log(db);
            nuxtStorage.localStorage.setData('frequencyload',db.frequencyload,'30','d');
            nuxtStorage.localStorage.setData('maintemplate',db.maintemplate,'30','d');
            this.SucceceWork('โหลดข้อมูลการตั้งค่าสำเร็จ')
            this.GotoHomePage()
            
        });
    } catch (error) {
        this.ErrorWork('โหลดข้อมูลการตั้งค่าไม่ได้ โปรดลองอีกครั้ง : ' + error)
    }
    },
    GotoHomePage(){
        setTimeout(() => {
            this.$router.push('/')
        }, 2000);
    },
    SucceceWork(txt) {
        this.snackbar = true;
        this.alerttext = txt;
        this.color = "success";
      },
      ErrorWork(txt) {
        this.snackbar = true;
        this.alerttext = txt;
        this.color = "error";
      }
  }
};
