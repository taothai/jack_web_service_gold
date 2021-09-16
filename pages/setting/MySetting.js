export default {
    data: () => ({
      Loading : false,
      ListCountChang: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      show1: false,
      sheet: false,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false, 
      CountChang : 2, 

      alerttext: "",
      snackbar: false,
      vertical: true,
      color: "success",
      DB : null
    }),
  
    mounted () {
      this.initialize()
    },
    methods: {
      // async SaveData(){

      // var data = {
      //   frequencyload : 1
      // }
      // try {
      //   await this.$fire.firestore.collection('SETTING').add(data)
      //   this.SucceceWork('บันทึกเรียบร้อย')

      // } catch (error) {
         
      //   this.ErrorWork('ไม่สามารถบันทึกข้อมูลได้ : ' + error)
      //   console.log(error);
      // }
      
      //  }, 

    
      async SaveData(){

      var data = {
        frequencyload : 1
      }
      try {

        var data = {
          frequencyload : this.CountChang
        }

        await this.$fire.firestore.collection("SETTING")
        .doc(this.DB.id)
      
        .update(
         data
        );
        this.SucceceWork('บันทึกเรียบร้อย')
      } catch (error) {
         
        this.ErrorWork('ไม่สามารถบันทึกข้อมูลได้ : ' + error)
        console.log(error);
      }
      
       }, 

      async initialize() {
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
              this.DB = dd[0]
              this.CountChang = dd[0].frequencyload
              console.log(dd[0]);
            });
        } catch (error) {
          // console.log(error)
        }
      },
        season (val) {
            return this.icons[val]
          },
      validate() {
        this.$refs.form.validate();
      },
      reset() {
        this.$refs.form.reset();
      },
      resetValidation() {
        this.$refs.form.resetValidation();
      }, 
      SucceceWork(txt) {
        console.log('gggg');
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