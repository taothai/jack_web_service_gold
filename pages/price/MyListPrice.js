var dayjs = require("dayjs");
var buddhistEra = require("dayjs/plugin/buddhistEra");
dayjs.extend(buddhistEra);
require("dayjs/locale/th");
dayjs.locale("th");
var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);


export default {
  data: () => ({
    Loading: false,
    dialog: false,
    dialogDelete: false,
    
    NoWTime : '',
    IntervalTime : null,
    //form
    statusselect: [
      {
        name: "ปกติ",
        value: true
      },
      {
        name: "ปิดการใช้งาน",
        value: false
      }
    ],
    headers: [
      {
        text: "วัน/เวลา",
        align: "start",
        sortable: true,
        value: "date",
        align: "center",
        class: "success--text caption font-weight-bold"
      },
      {
        text: "ครั้ง",
        value: "numberupdate",
        align: "center",
        class: "success--text caption font-weight-bold"
      },
      {
        text: "รับซื้อ(บาท)",
        value: "gold_stick_in",
        align: "center",
        class: "success--text caption font-weight-bold"
      },
      {
        text: "ขายออก(บาท",
        value: "gold_stick_out",
        align: "center",
        class: "success--text caption font-weight-bold"
      },
      {
        text: "รูปพรรณรับซื้อ",
        value: "gold_in",
        align: "center",
        class: "success--text caption font-weight-bold"
      },
      {
        text: "รูปพรรณขายออก",
        value: "gold_out",
        align: "center",
        class: "success--text caption font-weight-bold"
      },

      {
        text: "Gold spot",
        value: "gold_spot",
        align: "center",
        class: "success--text caption font-weight-bold"
      },
      {
        text: "ค่าเงินบาท",
        value: "usd",
        align: "center",
        class: "success--text caption font-weight-bold"
      },
      {
        text: "ขึ้น/ลง",
        value: "chang",
        class: "success--text caption font-weight-bold",
        align: "center"
      }, 
      { text: "จัดการ", value: "actions", sortable: false ,  align: "center",
      class: "success--text caption font-weight-bold"}
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {},
    defaultItem: {},

    //alert status
    alerttext: "",
    snackbar: false,
    vertical: true,
    color: "success"
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "แก้ไขรายการ";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  created() {
    this.initialize();
  },
  mounted () {
    this.SetTime()
  },

  methods: {
    async initialize() {
      var today = new Date();
      var date = new Date(today.getTime() - ((1000*60*60)*10)*100)
      try {
        await this.$fire.firestore
          .collection("AllGoldPrice")
          .where("DateCreate", ">",date)
          .orderBy("DateCreate", "desc")
          .get()
          .then(snap => {
            var dd = snap.docs.map(function(doc) {
              var db = doc.data();
              db.id = doc.id;
              return db;
            });
            this.desserts = dd;
          //  console.log(dd);
          });
      } catch (error) {
        // console.log(error)
      }
    },

      itemRowBackground: function (item) {
         return item.numberupdate === 1 ? 'style-1' : 'style-2'
      },
  
    getColor(status) {
      if (parseInt(status) > 0) return "green";
      if (parseInt(status) < 0) return "red";
      else return "orange";
    },

    getStatus(status) {
      if (parseInt(status) > 0)
        return "https://raw.githubusercontent.com/taothai/jack_web_service_gold/main/assets/img/up.gif";
      if (parseInt(status) < 0)
        return "https://raw.githubusercontent.com/taothai/jack_web_service_gold/main/assets/img/down.gif";
      else
        return "https://raw.githubusercontent.com/taothai/jack_web_service_gold/main/assets/img/nochange.gif";
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      if (this.desserts.length < 2) {
        this.ErrorWork("ลบไม่ได้ จะต้องมีข้อมูลอย่างน้อบ 1 ตาราง");
      } else {
        try {
          await this.$fire.firestore
            .collection("AllGoldPrice")
            .doc(this.desserts[this.editedIndex].id)
            .delete();
          await this.desserts.splice(this.editedIndex, 1);
          //  console.log(this.desserts[this.editedIndex]);
          //   console.log(this.editedIndex);
          await this.SucceceWork("ลบเรียบร้อย");
        } catch (error) {
          this.ErrorWork("เกิดปัญหาการลบ : " + error);
        }
      }

      this.closeDelete();
    },

    SetTime(){
      setInterval(() => {
        var txt = dayjs().format('LL')  
        this.NoWTime = txt
      }, 1000);
      
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        try {
          await this.$fire.firestore
            .collection("USER")
            .doc(this.desserts[this.editedIndex].id)
            .update(this.editedItem);
          await Object.assign(this.desserts[this.editedIndex], this.editedItem);
          await this.SucceceWork("แก้ไขเรียบร้อย");
        } catch (error) {
          this.ErrorWork("แก้ไขไม่ได้ เกิดปัญา : " + error);
        }
        // console.log(this.desserts[this.editedIndex]);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
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
