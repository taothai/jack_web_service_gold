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
          class="mr-1 ml"
          elevation="6"
          max-width="1000"
        >
          <v-card-title color="#26c6da">
            <div class="text-title">
              # เพิ่มราคาทอง
            </div>


            <v-spacer></v-spacer>

            <v-btn
              color="primary"
              elevation="0"
              outlined
              small
              to="/price/ListPrice"
            ># ดูราคาทองวันนี้</v-btn>

          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>

            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="pa-1"
            >
              <v-row>
                    <!--Start new sub coloum -->
                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-card
                    outlined
                    color="brown darken-4"
                    dark
                  >
                    <div class="text-subtitle-1 pa-5" >
                      # กรอกข้อมูลราคาทองคำแท่งล่าสุด
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
                        label="ราคาทองคำแท่ง(ซื้อเข้า)"
                        v-model="Lastgoldprice"
                        prefix="฿"
                        outlined
                        type="number"
                        clearable
                        class="text-h6"
                      ></v-text-field>
                        </v-col>

                        <v-col
                          cols="12"
                          sm="6"
                        >
                        <v-text-field
                        label="ราคาปรับเปลี่ยน"
                        v-model="ChangPrice"
                        prefix="฿"
                        type="number"
                        outlined
                        required
                        class="text-h6"
                        :rules="[v => !!v || 'ต้องระบุ']"
                        clearable
                      ></v-text-field>
                          
                        </v-col>

                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn  color="primary" dark @click="CalPrice()">คำนวณราคา</v-btn>
                    </v-card-actions>
                  </v-card>

                </v-col>

   

                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-row>
                    <v-col cols="4">
                      <v-subheader>วันที่เพิ่มรายการ<script></script>
                      </v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        label="วันที่เพิ่มรายการ"
                        v-model="DateAdd"
                        dense
                        disabled
                        outlined
                        clearable
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-row>
                    <v-col cols="4">
                      <v-subheader>เวลาที่ปรับราคา<script></script>
                      </v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-menu
                        ref="menu"
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="time"
                        transition="scale-transition"
                        offset-y
                        
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="time"
                            label="เลือกเวลาที่ราคาปรับ"
                            prepend-inner-icon="mdi-clock-time-four-outline"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            dense
                            outlined
                              required
                        :rules="[v => !!v || 'ต้องระบุ']"
                            clearable
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="menu2"
                          v-model="time"
                          full-width
                        
                          format="24hr"
                          @click:minute="$refs.menu.save(time)"
                        ></v-time-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-row>
                    <v-col cols="4">
                      <v-subheader>ปรับครั้งที่<script></script>
                      </v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-select
                        :items="ListCountChang"
                        outlined
                        clearable
                          required
                        :rules="[v => !!v || 'ต้องระบุ']"
                        dense
                        label="ครั้งที่ปรับ"
                        v-model="CountChang"
                        @change="BarnchSelect"
                        color="primary"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-row>
                    <v-col cols="4">
                      <v-subheader>ทองแท่ง(ซื้อ)<script></script>
                      </v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        label="จำนวน"
                        v-model="gold_stick_in"
                        prefix="฿"
                        dense
                          required
                        :rules="[v => !!v || 'ต้องระบุ']"
                        outlined
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-row>
                    <v-col cols="4">
                      <v-subheader>ทองแท่ง(ขาย)<script></script>
                      </v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        label="จำนวน"
                        v-model="gold_stick_out"
                        prefix="฿"
                        dense
                          required
                        :rules="[v => !!v || 'ต้องระบุ']"
                        outlined
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-row>
                    <v-col cols="4">
                      <v-subheader>รูปพรรณ(ซื้อ)<script></script>
                      </v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        label="จำนวน"
                        v-model="gold_in"
                        prefix="฿"
                        dense
                        outlined
                          required
                        :rules="[v => !!v || 'ต้องระบุ']"
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-row>
                    <v-col cols="4">
                      <v-subheader>รูปพรรณ(ขาย)<script></script>
                      </v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        label="จำนวน"
                        v-model="gold_out"
                        prefix="฿"
                        dense
                        outlined
                          required
                        :rules="[v => !!v || 'ต้องระบุ']"
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-row>
                    <v-col cols="4">
                      <v-subheader>Gold spot<script></script>
                      </v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        label="จำนวน"
                        v-model="goldspot"
                        prefix="$"
                        dense
                        outlined
                          required
                        :rules="[v => !!v || 'ต้องระบุ']"
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-row>
                    <v-col cols="4">
                      <v-subheader>อัตราแลกเปลี่ยน(1/USD)<script></script>
                      </v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field
                        label="จำนวน"
                        v-model="usd"
                        prefix="฿"
                        dense
                        outlined
                          required
                        :rules="[v => !!v || 'ต้องระบุ']"
                        clearable
                        type="number"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>

                 <!-- ALERT -->
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
              @click="SaveData()"
            >
              บันทึกข้อมูล
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>

  </v-container>
</template>

<script  src="./MyAddPrice.js">
</script>
<style lang="scss" scoped>
</style>