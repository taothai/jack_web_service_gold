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
              # แก้ไขรายการ
            </div>

            <v-spacer></v-spacer>

            <v-btn
              color="primary"
              elevation="0"
              outlined
              small
              to="/branch/ListBranch"
            >#อุปกรณ์ทั้งหมด</v-btn>

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
                  sm="12"
                >
                  <v-text-field
                    v-model="Name"
                    label="ชื่ออุปกรณ์"
                    outlined
                    clearable
                    required
                    :rules="[v => !!v || 'ต้องระบุ']"
                    hide-details
                    dense
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-text-field
                    v-model="AdsText"
                    label="ข้อความโฆษณา(ตัวอักษรเลื่อน)"
                    outlined
                    :rules="[v => !!v || 'ต้องระบุ']"
                    clearable
                    required
                    hide-details
                    dense
                  ></v-text-field>
                </v-col>

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
                    <div class="text-subtitle-1 pa-5">
                      # Private Key จำกัดการใช้งานเฉพาะเครื่อง
                    </div>
                    <v-card-text>
                      <v-row
                        align="center"
                        justify-center
                      >

                        <v-col
                          cols="12"
                          sm="order-xl12"
                        >
                          <v-text-field
                            v-model="PrivateKey"
                            label="Private Key"
                            disabled
                            outlined
                            clearable
                            required
                            hide-details
                            class="white--text"
                            append-icon="mdi-barcode"
                            dense
                          ></v-text-field>
                        </v-col>

                      </v-row>
                    </v-card-text>

                  </v-card>

                </v-col>

                <!--Start new sub coloum -->
                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-card outlined>
                    <div class="text-subtitle-1 pa-5">
                      # วิดิโอที่ต้องการแสดงหน้าจอแอนดรอยด์
                    </div>
                    <v-card-text>
                      <v-row
                        align="center"
                        justify-center
                      >

                        <v-col
                          cols="12"
                          sm="12"
                          class="mb-2"
                        >
                          <v-file-input
                            accept="video/mp4,video/x-m4v"
                            label="วิดิโอแสดงโฆษณา(รองรับเฉพาะไฟล์ mp4)"
                            outlined
                            v-model="filename1"
                            counter
                            dense
                            append-icon="mdi-play-circle-outline"
                            hide-details
                            @change="SelcectVDOAds"
                          ></v-file-input>
                        </v-col>

                        <v-col
                          cols="12"
                          sm="12"
                          class="mb-5"
                          v-if="IsVDOAdsSelect"
                          @click="OpenTab()"
                        >
                          <v-row justify="center">
                            <v-img
                              :src="ImageVDO"
                              lazy-src="https://picsum.photos/id/11/10/6"
                              max-width="350"
                              max-height="300"
                            >
                              <template v-slot:placeholder>
                                <v-row
                                  class="fill-height ma-0"
                                  align="center"
                                  justify="center"
                                >
                                  <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                  ></v-progress-circular>
                                </v-row>
                              </template>
                            </v-img>
                          </v-row>
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
                      # รูปภาพที่ต้องการแสดงบนหน้าจอแอนดรอยด์
                    </div>
                    <v-card-text>
                      <v-row
                        align="center"
                        justify-center
                      >

                        <v-col
                          cols="12"
                          sm="12"
                          class="mb-2"
                        >
                          <v-file-input
                            accept="image/png, image/jpeg, image/bmp"
                            label="รูปภาพแสดงโฆษณา"
                            outlined
                            counter

                            v-model="filename2"
                            dense
                          
                            append-icon="mdi-camera"
                            hide-details
                            @change="SelcectImageAds"
                          ></v-file-input>
                        </v-col>

                        <v-col
                          cols="12"
                          sm="12"
                          class="mb-5"
                          v-if="IsImageAdsSelect"
                        >
                          <v-row justify="center">
                            <v-img
                              :src="ImageAds"
                              lazy-src="https://picsum.photos/id/11/10/6"
                              max-width="350"
                              max-height="300"
                            >
                              <template v-slot:placeholder>
                                <v-row
                                  class="fill-height ma-0"
                                  align="center"
                                  justify="center"
                                >
                                  <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                  ></v-progress-circular>
                                </v-row>
                              </template>
                            </v-img>
                          </v-row>
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
                      # โลโก้อุปกรณ์
                    </div>
                    <v-card-text>
                      <v-row
                        align="center"
                        justify-center
                      >

                        <v-col
                          cols="12"
                          sm="12"
                          class="mb-2"
                        >
                          <v-file-input
                            accept="image/png, image/jpeg, image/bmp"
                            label="โลโก้ประจำอุปกรณ์"
                            outlined
                            counter
                            v-model="filename3"
                            dense
                          
                            append-icon="mdi-camera"
                            hide-details
                            @change="SelcectLogo"
                          ></v-file-input>
                        </v-col>

                        <v-col
                          cols="12"
                          sm="12"
                          class="mb-5"
                          v-if="IsLogoSelect"
                        >
                          <v-row justify="center">
                            <v-img
                              :src="LogoBranch"
                              lazy-src="https://picsum.photos/id/11/10/6"
                              max-width="350"
                              max-height="300"
                            >
                              <template v-slot:placeholder>
                                <v-row
                                  class="fill-height ma-0"
                                  align="center"
                                  justify="center"
                                >
                                  <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                  ></v-progress-circular>
                                </v-row>
                              </template>
                            </v-img>
                          </v-row>
                        </v-col>

                      </v-row>
                    </v-card-text>

                  </v-card>

                </v-col>

                <!--End -->

        
                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-switch
                    class="ml-5"
                    v-model="StatusBranch"
                    inset
                    label="เปิดใช้งานอุปกรณ์"
                  ></v-switch>

                </v-col>

                 <v-col
                  cols="12"
                  sm="12"
                >
                  <v-switch
                    class="ml-5"
                    v-model="ShowGoldPriceIn"
                    inset
                    label="แสดงราคารูปพรรณ(รับซื้อ)"
                  ></v-switch>

                </v-col>

                <v-col
                  cols="12"
                  sm="12"
                >
                  <v-switch
                    class="ml-5"
                    v-model="MainTemplate"
                    inset
                    label="ใช้เป็น tamplate หลัก"
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
              @click="AddBranch()"
            >
              บันทึกข้อมูล
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./result.js">
</script>
<style lang="scss" scoped>
// import zone
</style>