<template>
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
                   <v-select
                            :items="ListTypeUser"
                            outlined
                            clearable
                            required
                            dense
                            disabled
                            label="ระดับผู้ใช้งาน"
                            v-model="TypeUserSelct"
                            :rules="[v => !!v || 'ยังไม่ได้เลือก']"
                            append-icon="mdi-account"
                            color="primary"
                          ></v-select>
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

                        <v-col
                          cols="12"
                          sm="12"
                          class="text-center pa-5"
                          v-if="Loading"
    
                        >
                        <div class="pa-5">กำลังบันทึกข้อมูล</div>
                        <v-progress-circular
                          indeterminate
                          color="red"
                           ></v-progress-circular>

                        </v-col>

                <!--End -->
               
              </v-row>

            </v-form>

              <v-snackbar
                v-model="snackbar"
                :vertical="vertical"
                :color="color"
              >
                {{ alerttext }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    ปิด
                  </v-btn>
                </template>
              </v-snackbar>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              width="150"
              color="success"
              class="mr-4"
              @click="AddUser()"
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