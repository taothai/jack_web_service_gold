<template>
  <v-container class="ml-2">
    <v-row
      align="center"
      justify-center
    >
      <v-col
        col="12"
        xs="12"
        sm="12"
        md="12"
        lg="12"
      >

        <v-card
          class="ml-2"
          elevation="6"
          max-width="1000"
        >
          <v-card-title>
              <div class="text-subtitle-1">
              # รายชื่อผู้ใช้งาน
            </div>

            <v-spacer></v-spacer>

             <v-btn
                color="primary"
                elevation="0"
                outlined
                small
                to="/user/adduser"
              >เพิ่มผู้ใช้งาน</v-btn>
            
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>

            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-row>
                <!-- Start -->
                <v-col
                  cols="12"
                  sm="12"
                >
                  <!-- รูปภาพสินค้า -->
                  <v-card outlined>
                    <v-card-text>
                      <v-row
                        align="center"
                        justify-center
                      >

                        <v-col
                          cols="12"
                          sm="12"
                        >
                          <v-text-field
                            v-model="message2"
                            label="ค้นหา"
                            outlined
                            single-line
                            clearable
                            hide-details
                            append-icon="mdi-magnify"
                            dense
                          ></v-text-field>
                        </v-col>

                        <v-col
                          cols="12"
                          sm="12"
                        >
                          <v-data-table
                            dense
                            :headers="headers"
                            :items="desserts"
                            item-key="name"
                            class="elevation-1"
                          ></v-data-table>
                        </v-col>

                        <!-- End -->


                      </v-row>
                    </v-card-text>

                  </v-card>

                </v-col>

                



              </v-row>

            </v-form>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>

  
  </v-container>
</template>

<script>
export default {
  data: () => ({
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

    //table
    desserts: [
      {
        name: "รักชาย นายรักกัน",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      }
    ],
    headers: [
      { text: "#", value: "fat" ,align: 'center',},
      {
        text: "ชื่อผู้ใช้งาน",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "อีเมลล์", value: "calories" },
      { text: "จำนวนวันใช้งาน", value: "calories" , align: 'center',},
      { text: "จัดการผู้ใช้งาน", value: "carbs" ,align: 'center',}
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>