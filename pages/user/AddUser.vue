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
              # เพิ่มผู้ใช้งานระบบ
            </div>

            <v-spacer></v-spacer>

            <v-btn
              color="primary"
              elevation="0"
              outlined
              small
              to="/user/ListUsers"
            >#ผู้ใช้งานทั้งหมด</v-btn>

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
                    v-model="Name"
                    label="ชื่อ"
                    outlined
                    clearable
                    required
                    hide-details
                    dense
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="Lastname"
                    label="นามสกุล"
                    outlined
                    clearable
                    hide-details
                    required
                    dense
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="Branch"
                    label="สาขาที่ใช้งาน"
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
                      v-model="Email"
                      outlined
                      :rules="emailRules"
                      label="อีเมลล์"
                      dense
                      required
                    ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="CountExprireDate"
                    label="จำนวนวันหมดอายุใช้งาน(วัน)"
                    outlined
                    clearable
                    required
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
                            v-model="Password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="ใส่รหัสผ่าน"
                            hint="At least 8 characters"
                            counter
                            required
                            :rules="[v => !!v || 'โปรดระบุ']"
                            @click:append="show1 = !show1"
                          ></v-text-field>
                        </v-col>

                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field
                          dark
                            v-model="ConfirmPassword"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="ใส่รหัสผ่านอีกครั้ง"
                            hint="At least 8 characters"
                            counter
                            required
                            :rules="[v => !!v || 'โปรดระบุ', v => v === Password || 'รหัสไม่ตรงกัน']"
                            @click:append="show1 = !show1"
                          ></v-text-field>
                        </v-col>

                      </v-row>
                    </v-card-text>

                  </v-card>

                </v-col>



                        <v-col
                          cols="12"
                          sm="12"
                        >
                          <v-switch
                            class="ml-5"
                            v-model="StatusUser"
                            inset
                            label="เปิดใช้งาน"
                          ></v-switch>

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

<script  src="./myadduser.js">
</script>
<style lang="scss" scoped>
</style>