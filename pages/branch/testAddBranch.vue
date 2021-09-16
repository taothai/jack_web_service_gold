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
              # เพิ่มสาขาร้านค้า
            </div>

            <v-spacer></v-spacer>

            <v-btn
              color="primary"
              elevation="0"
              outlined
              small
              to="/branch/ListBranch"
            >#สาขาทั้งหมด</v-btn>

          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>

            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="message1"
                    label="ชื่อ"
                    outlined
                    clearable
                    hide-details
                    dense
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="message2"
                    label="นามสกุล"
                    outlined
                    clearable
                    hide-details
                    dense
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="message3"
                    label="สาขาที่ใช้งาน"
                    outlined
                    clearable
                    hide-details
                    type="number"
                    dense
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="message3"
                    label="อีเมลล์"
                    outlined
                    clearable
                    hide-details
                    type="number"
                    dense
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="message3"
                    label="จำนวนวันหมดอายุใช้งาน(วัน)"
                    outlined
                    clearable
                    hide-details
                    type="number"
                    dense
                  ></v-text-field>
                </v-col>

                <!--Start new sub coloum -->
                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-card outlined color="primary" dark>
                    <div class="text-subtitle-1 pa-5">
                      # เกี่ยวกับรหัสผ่าน
                    </div>
                    <v-card-text>
                      <v-row
                        align="center"
                        justify-center
                      >

                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="ใส่รหัสผ่าน"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                          ></v-text-field>
                        </v-col>

                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="ใส่รหัสผ่านอีกครั้ง"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                          ></v-text-field>
                        </v-col>

                      </v-row>
                    </v-card-text>

                  </v-card>

                </v-col>

                <!--End -->
                <!--Start new sub coloum -->
                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-card outlined>
                    <div class="text-subtitle-1 pa-5">
                      # รายละเอียดเพิ่มเติม
                    </div>
                    <v-card-text>
                      <v-row
                        align="center"
                        justify-center
                      >

                        <v-col
                          cols="12"
                          sm="12"
                        >
                          <v-file-input
                            label="ไฟล์แนบ"
                            outlined
                            dense
                            append-icon="mdi-camera"
                            hide-details
                          ></v-file-input>
                        </v-col>

                        <v-col
                          cols="12"
                          sm="12"
                        >
                          <v-textarea
                            v-model="message3"
                            label="รายละเอียด"
                            outlined
                            height="100"
                            clearable
                            hide-details
                            type="number"
                            dense
                          ></v-textarea>
                        </v-col>

                        <v-col
                          cols="12"
                          sm="12"
                        >
                          <v-switch
                            v-model="switch1"
                            inset
                            label="เปิดใช้งาน"
                          ></v-switch>

                        </v-col>

                      </v-row>
                    </v-card-text>

                  </v-card>

                </v-col>

                <!--End -->

              </v-row>

            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              width="150"
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              บันทึกข้อมูล
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data: () => ({
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