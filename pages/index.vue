
]<template>
  <v-container class="ml-2 pa-0 mt-5 mb-5" fluid>
    <v-row
      align="center"
      justify-center
      class="pa-0 mr-2"
    >
      <v-col
        col="12"
        xs="12"
        sm="12"
        md="12"
        lg="12"
        class="pa-0"
        max-width="800"
      >

        <v-row>

          <!--START COL -->
          <v-col
            cols="12"
            sm="6"
          >
            <v-card
              color="primary"
              dark
              max-width="700"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h6">
                    จัดการราคาทอง
                  </v-card-title>

                  <v-card-subtitle>
                    เพิ่มหรือจัดการราคาทอง
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                      to="price/ListPrice"
                    >
                      จัดการ
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img src="https://www.prachachat.net/wp-content/uploads/2021/03/GoldA1200x800-728x485.jpg"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>

          <!--END COL -->



          <!--START COL -->
          <v-col
            cols="12"
            sm="6"
          >
            <v-card
              color="primary"
              dark
              max-width="700"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h6">
                    Android Box
                  </v-card-title>

                  <v-card-subtitle>
                    ควบคุมและจัดการ Android Box
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                      to="/branch/ListBranch"
                    >
                      จัดการ
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img src="https://firebasestorage.googleapis.com/v0/b/goldprice-ceb94.appspot.com/o/imgs%2Fandroid-logo.jpeg?alt=media&token=1f571aa0-5886-4a98-9744-c6b7c74b5897"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>

          <!--END COL -->



          <!--START COL -->
          <v-col
            cols="12"
            sm="6"
          >
            <v-card
              color="primary"
              dark
              max-width="700"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h6">
                    จัดการผู้ใช้งาน
                  </v-card-title>

                  <v-card-subtitle>
                    เพิ่มหรือจัดการผู้ใช้งานระบบ
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                      to="/user/ListUsers"
                    >
                      จัดการ
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img src="https://www.prachachat.net/wp-content/uploads/2021/03/GoldA1200x800-728x485.jpg"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>

          <!--END COL -->


          <!--START COL -->
          <v-col
            cols="12"
            sm="6"
          >
            <v-card
              color="primary"
              dark
              max-width="700"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h6">
                    ตั้งค่าระบบ
                  </v-card-title>

                  <v-card-subtitle >
                    ตั้งค่าระบบ
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                      to="/setting/setting"
                    >
                      จัดการ
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img src="https://www.prachachat.net/wp-content/uploads/2021/03/GoldA1200x800-728x485.jpg"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>

          <!--END COL -->
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: "authenticated",
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
    checkbox: false
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

