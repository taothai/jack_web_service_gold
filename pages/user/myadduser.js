var dayjs = require("dayjs");
var buddhistEra = require("dayjs/plugin/buddhistEra");
dayjs.extend(buddhistEra);
require("dayjs/locale/th");
dayjs.locale("th");
var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

export default {
  data: () => ({
    Loading : false,
    ListBranch: ["สาขาที่ 1", "สาขาที่ 2"],
    ListTypeUser: ["admin", "user"],
    TypeUserSelct: "admin",
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

    Name: "",
    Lastname: "",
    Branch: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    CountExprireDate: "",
    Attachment: "",
    Detail: "",
    StatusUser: true,

    //alert status

    alerttext: "",
    snackbar: false,
    vertical: true,
    color: "success"
  }),

  methods: {
    AddUser() {
      var vadidate = this.$refs.form.validate();

      if (vadidate) {
        this.CreateUser()
        this.Loading = true
      } else {
        this.ErrorWork("ยังกรอกข้อมูลไม่ครบ");
      }
    },
    async  CreateUser(){
      
      try {

        await this.$fire.auth.createUserWithEmailAndPassword(
          this.Email,
          this.Password
          )  
        this.SaveData()
        
      } catch (error) {
         console.log(error);
         this.ErrorWork('เกิดปัญหาการสร้างบัญชี : ' + error)
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
        AddBy: "",
        Name: this.Name,
        Lastname: this.Lastname,
        Branch: this.Branch,
        Email: this.Email,
        CountExprireDate: this.CountExprireDate,
        StatusUser: this.StatusUser,
        TypeUserSelct : this.TypeUserSelct
      };


      //save data

      try {
        await this.$fire.firestore.collection('USER').add(data)
        this.SucceceWork('บันทึกเรียบร้อย')
        this.ClearForm()

      } catch (error) {
         
        this.ErrorWork('ไม่สามารถบันทึกข้อมูลได้ : ' + error)
        console.log(error);
      }
      
    },
    SucceceWork(txt) {
      this.snackbar = true;
      this.alerttext = txt;
      this.color = "success";
      this.Loading = false
    },
    ErrorWork(txt) {
      this.snackbar = true;
      this.alerttext = txt;
      this.color = "error";
      this.Loading = false
    },
    ClearForm(){
      this.Name = ''
      this.Lastname = ''
      this.Branch = '',
      this.Password ='',
      this.ConfirmPassword = ''
      this.$refs.form.resetValidation()
      this.Loading = false

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
