var dayjs = require("dayjs");
var buddhistEra = require("dayjs/plugin/buddhistEra");
dayjs.extend(buddhistEra);
require("dayjs/locale/th");
dayjs.locale("th");
var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);
import nuxtStorage from "nuxt-storage";
const commaNumber = require('comma-number')
const format = commaNumber.bindWith(',', '!')

function RemoveComma(number) {
  return number.replace(/,/g, "");
}

export default {
  data: () => ({
    Email: "",
    // Time
    time: null,
    menu2: false,

    Loading: false,
    DateAdd: "",
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

    //goldprice
    gold_stick_in: 0,
    gold_stick_out: null,
    gold_in: null,
    gold_out: null,
    goldspot: null,
    usd: null,
    ChangPrice: null,
    CountChang: null,
    StatusPrice: true,

    //Cal
    Lastgoldprice: 0,

    //หาสูตรราคา
    last_gold_in: 0,
    last_gold_out: 0,
    last_gold_stick_in: 0,
    last_gold_stick_out: 0,

    show1: false,
    sheet: false,
    valid: true,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,

    //alert status

    alerttext: "",
    snackbar: false,
    vertical: true,
    color: "success"
  }),
  mounted() {
    this.LoadSetting();
  },

  // watch: {
  //   Lastgoldprice() {
  //     if (this.Lastgoldprice > 0) {
  //       this.Lastgoldprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  //     }
  //   }
  // },


  methods: {
    LoadSetting() {
      this.CreateMyDate();
      this.LoadLastPrice();
      this.Email = nuxtStorage.localStorage.getData("ismail");
    },
    CalPrice() {
      var ChangPrice = this.ChangPrice;
      if (!ChangPrice) {
       // alert("ยังไม่กรอกข้อมูล");
        this.ErrorWork('ยังไม่กรอกราคาปรับเปลี่ยน')
      } else {
        //ราคาทองคำแท่ง รับซื้อ
        //ราคาทองคำแท่ง ขายออก + 100
        //ราคาทองรูปพรรณ ขายออก = แท่งขายออก + 500
        //ราคาทองรูปพรรณ รับซื้อ  = รูปพรรณขายออก - 1097
        if (ChangPrice > 0) {
          var gold_stick_in =
            parseInt(this.last_gold_in) + parseInt(ChangPrice);
          this.gold_stick_in =
            parseInt(this.last_gold_in) + parseInt(ChangPrice);
          this.gold_stick_out = gold_stick_in + 100;
          this.gold_out = gold_stick_in + 500;
          this.gold_in = gold_stick_in + 500 - 1097;
        } else if (ChangPrice < 0) {
          var gold_stick_in =
            parseInt(this.last_gold_in) + parseInt(ChangPrice);
          this.gold_stick_in =
            parseInt(this.last_gold_in) + parseInt(ChangPrice);
          this.gold_stick_out = gold_stick_in + 100;
          this.gold_out = gold_stick_in + 500;
          this.gold_in = gold_stick_in + 500 - 1097;
        }
      }
    },
    CreateMyDate() {
      this.DateAdd = dayjs().format("DD/MM/BBBB");
    },
    async LoadLastPrice() {
      var today = new Date();
      var date = new Date(today.getTime() - 1000 * 60 * 60 * 10 * 7);
      try {
        await this.$fire.firestore
          .collection("AllGoldPrice")
          .where("DateCreate", ">", date)
          .orderBy("DateCreate", "desc")
          .get()
          .then(snap => {
            var dd = snap.docs.map(function(doc) {
              var db = doc.data();
              db.id = doc.id;
              return db;
            });
            var data = dd[0];
            console.log(data);
            this.Lastgoldprice = RemoveComma(data.gold_stick_in);
            //จำนวนการปรับ
            this.CountChang = parseInt(data.numberupdate) + 1;

            this.last_gold_in = RemoveComma(data.gold_in);
            this.last_gold_out = RemoveComma(data.gold_out);
            this.last_gold_stick_in = RemoveComma(data.gold_stick_in);
            this.last_gold_stick_out = RemoveComma(data.gold_stick_out);
           // console.log(dd[0]);
          });
      } catch (error) {
        // console.log(error)
      }
    },
    AddPrice() {
      var vadidate = this.$refs.form.validate();

      if (vadidate) {
        this.Loading = true;
        this.SaveData() 
      } else {
        this.ErrorWork("ยังกรอกข้อมูลไม่ครบ");
      }
    },

    async CreateUser() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.Email,
          this.Password
        );
        this.SaveData();
      } catch (error) {
        console.log(error);
        this.ErrorWork("เกิดปัญหาการสร้างบัญชี : " + error);
      }
    },

    async writeToRealtimeDb() {
      const messageRef = this.$fire.database.ref('message')
      try {
        await messageRef.set({
          message: 'Nuxt-Fire with Firebase Realtime Database rocks!',
        })
      } catch (e) {
        alert(e) 
        return
      }
      alert('Success.')
    },
    async SaveData() {
      var DateforCaculator = {
        NumberDate: dayjs().format("D"),
        NumberMonth: dayjs().format("M"),
        NumberYearFull: dayjs().format("YYYY"),
        NumberYearTwoDigit: dayjs().format("YY"),
        NumberYearBudha: dayjs().format("BBBB"),
        NumberYearBudhaTwoDigit: dayjs().format("BB"),
        TimeHour: dayjs().format("H"),
        TimeMinut: dayjs().format("m"),
        TimeSecond: dayjs().format("s"),
        NameDateThai: dayjs().format("dddd"),
        NameMonthThai: dayjs().format("MMMM")
      };
      var data = {
        time_craw: dayjs().format("DD/MM/YYYY"),
        AddBy: `User : ` + this.Email,
        DateCreateFormat: dayjs().format("LLL"),
        DateCreate: new Date(),
        DateforCaculator: DateforCaculator,
        date: this.DateAdd + ` ` + this.time,
        numberupdate: this.CountChang,
        gold_stick_in:format(this.gold_stick_in),
        gold_stick_out: format(this.gold_stick_out),
        gold_in: format(this.gold_in),
        gold_out: format(this.gold_out),
        gold_spot: format(this.goldspot),
        usd:format(this.usd) ,
        chang: format(this.ChangPrice),
        IsOpen: true,
        IsBot : false
      };
      //save data
     this.SaveFireStore(data) 
     },
    async  SaveFireStore(data){
      
      try {
        await this.$fire.firestore.collection("AllGoldPrice").add(data);
        this.SucceceWork("บันทึกเรียบร้อย");
        this.ClearForm();
      } catch (error) {
        this.ErrorWork("ไม่สามารถบันทึกข้อมูลได้ : " + error);
        console.log(error);
      }
    },
    async SaveRealTime(data){

      const messageRef = this.$fire.database.ref('AndroidPrice')
      try {
        await messageRef.set(data);
        this.SucceceWork("บันทึกเรียบร้อย");
        this.ClearForm();
      } catch (error) {
        this.ErrorWork("ไม่สามารถบันทึกข้อมูลได้ : " + error);
        console.log(error);
      }
    },
    SucceceWork(txt) {
      this.snackbar = true;
      this.alerttext = txt;
      this.color = "success";
      this.Loading = false;
    },
    ErrorWork(txt) {
      this.snackbar = true;
      this.alerttext = txt;
      this.color = "error";
      this.Loading = false;
    },
    ClearForm() {
      this.gold_stick_in = null,
      this.gold_stick_out = null,
      this.gold_in =  null,
      this.gold_out =  null,
      this.goldspot =  null,
      this.usd = null,
      this.ChangPrice = null,
      this.CountChang =  null,
      this.$refs.form.resetValidation();
      this.Loading = false;
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async BarnchSelect(event) {
      console.log(event);
    }

  }
};
