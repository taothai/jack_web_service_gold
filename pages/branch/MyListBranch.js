
import nuxtStorage from 'nuxt-storage';

export default {
  data: () => ({
    Loading: false,
    dialog: false,
    dialogDelete: false,

    Maintempalte : '',

    //form 
    statusselect :[
      {
        name : 'ปกติ', 
        value : true
      }, 
      {
        name : 'ปิดการใช้งาน', 
        value : false
      },

    ],
    headers: [
      { text: "โลโก้", value: "LogoBranch" },
      { text: "ชื่ออุปกรณ์", value: "Name" },
      { text: "ข้อความโฆษณา", value: "AdsText" },
      { text: "Serial", value: "PrivateKey" , align: "center"},
      { text: "เข้าใช้งาน", value: "IsUseProduct",align: "center"},
      { text: "สถานะอุปกรณ์", value: "StatusBranch", align: "center" },
      { text: "จัดการ", value: "actions", sortable: false }
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
   this.loadSeting()
},
  methods: {
    async loadSeting(){

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
            this.Maintempalte = dd[0].maintemplate
          });
      } catch (error) {
        // console.log(error)
      }
           
          },
    async initialize() {
      try {
        await this.$fire.firestore
          .collection("BRANCH")
          .get()
          .then(snap => {
            var dd = snap.docs.map(function(doc) {
              var db = doc.data();
              db.id = doc.id;
              return db;
            });
            this.desserts = dd;
            console.log(dd);
          });
      } catch (error) {
        // console.log(error)
      }
    },

    Copydata(item){
      console.log(item.PrivateKey);
      navigator.clipboard.writeText(item.PrivateKey)
      this.SucceceWork('Copy Serial Clipboard')
    }, 

    GetIsUseProduct(status) {
      if (status) return 'green'
      else return 'red'
    },

    getColor (status) {
      if (status) return 'green'
      else return 'red'
    },

    editItem(item) {
      this.$router.push(`result/${item.PrivateKey}`)
      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialog = true;
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
        if (this.desserts[this.editedIndex].PrivateKey === this.Maintempalte) {
          this.ErrorWork("ไม่สามารถลบสาขาหลักได้");
        }else{
        try {
          await this.$fire.firestore
            .collection("BRANCH")
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
    }

      this.closeDelete();
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
          await this.$fire.firestore.collection("BRANCH")
                 .doc(this.desserts[this.editedIndex].id)
                 .update(
                  this.editedItem
                 );
          await Object.assign(this.desserts[this.editedIndex], this.editedItem);
          await this.SucceceWork("แก้ไขเรียบร้อย");
                 
         } catch (error) {
           this.ErrorWork('แก้ไขไม่ได้ เกิดปัญา : ' + error)
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
