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
              # ตั้งค่าระบบ
            </div>

            <v-spacer></v-spacer>

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
                      <v-row>
                    <v-col cols="4">
                      <v-subheader>ความถี่ของการดึงข้อมูล<script></script>
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
                        label="ความถี่ของการดึงข้อมูล(นาที)"
                        v-model="CountChang"
                        color="primary"
                      ></v-select>
                    </v-col>
                  </v-row>


                </v-col>

                      <!-- DIALOG SACKBAR-->
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

                <!-- END DIALOG SACKBAR-->
              </v-row>

            </v-form>
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

<script src="./MySetting.js">

</script>
<style lang="scss" scoped>
</style>