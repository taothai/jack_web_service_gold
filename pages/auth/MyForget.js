export default {
  layout: "login",
  middleware: 'notauthenticated',
  data() {
    return {
      Email: "",
      valid: true,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "รูปแบบไม่ถูกต้อง"
      ],

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
        console.log("working");
        this.Forget();
      } else {
        this.ErrorWork("กรอกข้อมูลไม่ถูกต้อง");
        console.log("not work");
      }
    },
    async Forget() {
      try {

        await this.$fire.auth.sendPasswordResetEmail(this.Email);
      this.SucceceWork(
        "ดำเนินการเรียบร้อย โปรดเช็คที่อีเมลล์ที่ท่านได้ระบุไว้"
      );
      this.Email = ''
        
      } catch (error) {
        this.ErrorWork('ไม่สามารทำรายการได้ ' + error) 
      }
      
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
