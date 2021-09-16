var dayjs = require("dayjs");
var buddhistEra = require("dayjs/plugin/buddhistEra");
dayjs.extend(buddhistEra);
require("dayjs/locale/th");
dayjs.locale("th");
var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);
import { nanoid } from "nanoid";
import { customAlphabet } from "nanoid/async";
import nuxtStorage from "nuxt-storage";

export default {
  data: () => ({
    Loading: false,
    TypeUserSelct: "user",
    show1: false,
    sheet: false,
    valid: true,
    nameRules: [
      v => !!v || "is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],

    Name: "",
    AdsText: "",
    PrivateKey: "",
    VDOAds: "",
    ImageVDO: "",
    ImageAds: "",
    LogoBranch: "",
    StatusBranch: true,
    MainTemplate : false,
    IsLoadTemplate :false,
    ShowGoldPriceIn : false,

    //uploadzone

    IsLogoSelect: false,
    IsImageAdsSelect: false,
    IsVDOAdsSelect: false,
    filename1 : null,
    filename2 : null,
    filename3 : null,

    //alert status
    alerttext: "",
    snackbar: false,
    vertical: true,
    color: "success"
  }),
  created() {
    //start
  },
  mounted() {
    this.CreatPrivateID();
  },

  methods: {
    async  LoadSetting(){
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
            this.LoadData(db.maintemplate)
          //  console.log(db);

         
  
          });
      } catch (error) {
        // console.log(error)
      }
    }, 
    async LoadData(id){
     // alert('Hello')
      var templateid = nuxtStorage.localStorage.getData("maintemplate")
     // console.log(templateid);
      try {
        await this.$fire.firestore
          .collection("BRANCH")
          .where("PrivateKey","==",id)
          .get()
          .then(snap => {
            var dd = snap.docs.map(function(doc) {
              var db = doc.data();
              db.id = doc.id;
              return db;
            });
            var db = dd[0]

            console.log(db);
            this.Name = db.Name
            this.AdsText = db.AdsText
            this.VDOAds = db.VDOAds
            this.ImageVDO = "https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png"
            this.IsVDOAdsSelect = true
            this.IsImageAdsSelect = true
            this.IsLogoSelect = true
            this.ImageAds = db.ImageAds
            this.LogoBranch = db.LogoBranch
            this.StatusBranch = db.StatusBranch
            this.ShowGoldPriceIn = db.ShowGoldPriceIn
            this.dbid = db.id
            console.log(dd);
            this.IsLoadTemplate = true
  
          });
      } catch (error) {
        // console.log(error)
      }
      }, 
    OpenTab() {
      console.log("test test");
      window.open(this.VDOAds, "_blank");
    },
    async SelcectVDOAds(event) {
      this.IsVDOAdsSelect = true;
      this.Working("กำลังอัพโหลดโปรดรอ หลังจากเรียบร้อยจะแสดงตัวอย่างด้านล่าง");
      //console.log(event);
      const nanoid = customAlphabet("1234567890abcdef", 100);
      var data = await nanoid();
      const storageRef = this.$fire.storage.ref().child("vdo");
      try {
        const snapshot = await storageRef.child(data).put(event);
        var pathReference = await this.$fire.storage.ref("vdo/" + data);

        const storaurl = this.$fire.storage.ref("vdo/" + data);
        const url = await storaurl.getDownloadURL();
        // console.log(url);
        this.ImageVDO =
          "https://cdn.pixabay.com/photo/2018/04/11/19/48/player-3311600_960_720.png";
        this.VDOAds = url;
        this.snackbar = false;
      } catch (e) {
        console.log(e.message);
        this.ErrorWork("เกิดปัญหา : " + e);
      }
    },
    async SelcectImageAds(event) {
      this.IsImageAdsSelect = true;
      this.Working("กำลังอัพโหลดโปรดรอ หลังจากเรียบร้อยจะแสดงตัวอย่างด้านล่าง");
   //   console.log(event);
      const nanoid = customAlphabet("1234567890abcdef", 100);
      var data = await nanoid();
      const storageRef = this.$fire.storage.ref().child("imgs");
      try {
        const snapshot = await storageRef.child(data).put(event);
        var pathReference = await this.$fire.storage.ref("imgs/" + data);

        const storaurl = this.$fire.storage.ref("imgs/" + data);
        const url = await storaurl.getDownloadURL();
        // console.log(url);
        this.ImageAds = url;
        this.snackbar = false;
      } catch (e) {
        console.log(e.message);
        this.ErrorWork("เกิดปัญหา : " + e);
      }
    },

    async SelcectLogo(event) {
      this.IsLogoSelect = true;
      this.Working("กำลังอัพโหลดโปรดรอ หลังจากเรียบร้อยจะแสดงตัวอย่างด้านล่าง");
     // console.log(event);
      const nanoid = customAlphabet("1234567890abcdef", 100);
      var data = await nanoid();
      const storageRef = this.$fire.storage.ref().child("imgs");
      try {
        const snapshot = await storageRef.child(data).put(event);
        var pathReference = await this.$fire.storage.ref("imgs/" + data);

        const storaurl = this.$fire.storage.ref("imgs/" + data);
        const url = await storaurl.getDownloadURL();
        // console.log(url);
        this.LogoBranch = url;
        this.snackbar = false;
      } catch (e) {
        console.log(e.message);
        this.ErrorWork("เกิดปัญหา : " + e);
      }
    },
    async CreatPrivateID() {
      const nanoid = customAlphabet("ABC1234567890", 12);
      this.PrivateKey = await nanoid();
    },
    AddBranch() {

      if (this.IsLoadTemplate) {
        
        this.Working("กำลังดำเนินการ....");
        this.Loading = true;
        this.SaveData()

      }else  {
        var vadidate = this.$refs.form.validate();

        if (vadidate) {
          this.Working("กำลังดำเนินการ....");
          this.Loading = true;
          this.SaveData()
        } else {
          this.ErrorWork("ยังกรอกข้อมูลไม่ครบ");
        }
      }
    
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
        DateCreate: new Date(),
        DateforCaculator: DateforCaculator,
        AddBy: nuxtStorage.localStorage.getData("isname"),
        Name: this.Name,
        AdsText: this.AdsText,
        PrivateKey: this.PrivateKey,
        VDOAds: this.VDOAds,
        ImageAds: this.ImageAds,
        LogoBranch: this.LogoBranch,
        StatusBranch: this.StatusBranch,
        IsUseProduct: false, 
        ShowGoldPriceIn :  this.ShowGoldPriceIn
      };

      try {
        await this.$fire.firestore.collection("BRANCH").add(data);
        this.SucceceWork("บันทึกเรียบร้อย");
        
        this.ClearForm();
      } catch (error) {
        this.ErrorWork("ไม่สามารถบันทึกข้อมูลได้ : " + error);
        console.log(error);
      }

      if (this.MainTemplate) {
        this.UpdateMaintempalte()
      }else{
        //not else
      }
    },
    Working(txt) {
      this.snackbar = true;
      this.alerttext = txt;
      this.color = "working";
      this.Loading = false;
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
      this.CreatPrivateID();
      this.Name = "";
      this.AdsText = ''
      this.VDOAds = ''
      this.ImageVDO = ''
      this.ImageAds = ''
      this.LogoBranch = ''
      this.StatusBranch = true
      this.filename1 = null
      this.filename2 = null
      this.filename3 = null
      this.$refs.form.resetValidation();
      this.Loading = false;
      this.IsLogoSelect = false
      this.IsImageAdsSelect =false
      this.IsVDOAdsSelect = false
     
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async BarnchSelect(event) {
      console.log(event);
    },
  async UpdateMaintempalte(){
      
      var id ='9TW8X8fsirc8dSiz8jlT'

      var data = {
        maintemplate : this.PrivateKey
      } 

      try {
        await this.$fire.firestore.collection("SETTING")
        .doc(id)
        .update(
         data
        );
        this.SucceceWork("บันทึก template หลักแล้ว");
      } catch (error) {
        this.ErrorWork('ไม่สามารถเปลี่ยน template หลักได้ : ' + error)
      }
     

    },
  }
};
