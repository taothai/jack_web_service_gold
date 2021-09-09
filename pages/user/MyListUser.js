export default {
  data: () => ({
    Loading: false,
    dialog: false,
    dialogDelete: false,

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
      {
        text: "#",
        align: "start",
        sortable: false,
        value: "listnumber"
      },
      { text: "ชื่อ", value: "Name" },
      { text: "นามสกุล", value: "Lastname" },
      { text: "อีเมลล์", value: "Email" },
      { text: "สาขา", value: "Branch" },
      { text: "วันใช้งาน ", value: "CountExprireDate", align: "center" },
      { text: "สถานะ", value: "StatusUser", align: "center" },
      { text: "ระดับผู้ใช้", value: "TypeUserSelct", align: "center" },

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

  methods: {
    async initialize() {
      try {
        await this.$fire.firestore
          .collection("USER")
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

    getColor (status) {
      if (status) return 'green'
      else return 'red'
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
            .collection("USER")
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
          await this.$fire.firestore.collection("USER")
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
