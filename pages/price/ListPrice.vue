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
          max-width="1200"
        >
          <v-card-title>
            <div class="title red--text">
              # ราคาทองวันนี้ {{NoWTime}}
            </div>

            <v-spacer></v-spacer>

            <v-btn
              color="primary"
              elevation="0"
              outlined
              small
              to="/price/AddPrice"
            >เพิ่มราคาทอง</v-btn>

          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>

            <v-row>
              <v-col
                cols="12"
                sm="12"
              >
                <!-- START DIALOG -->
                <v-dialog
                  v-model="dialog"
                  max-width="500px"
                >
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.Name"
                              label="ชื่อ"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.Lastname"
                              label="นามสกุล"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              disabled
                              v-model="editedItem.Email"
                              label="อีเมลล์"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              disabled
                              v-model="editedItem.Branch"
                              label="สาขา"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.CountExprireDate"
                              label="วันใช้งาน"
                              type="number"
                            ></v-text-field>
                          </v-col>

                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-select
                              :items="statusselect"
                              v-model="editedItem.StatusUser"
                              item-text="name"
                              label="สถานะการใช้งาน"
                            ></v-select>
                          </v-col>

                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog
                  v-model="dialogDelete"
                  max-width="500px"
                >
                  <v-card>
                    <v-card-title class="text-h5">ยืนยันการลบ?</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="closeDelete"
                      >Cancel</v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm"
                      >OK</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- END DIALOG -->

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
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  class="elevation-3 Table-myheader"
                  :item-class="itemRowBackground"
                >

                  <template v-slot:item.StatusUser="{ item }">

                    <v-badge
                      :color="getColor(item.StatusUser)"
                      inline
                      dot
                    ></v-badge>
                  </template>

                  <template v-slot:item.chang="{ item }">
                        <v-btn
                            :color="getColor(item.chang)"
                            class="ma-2 white--text font-weight-bold"
                            text
                          >
                              {{item.chang}}
                             <img
                            :src="getStatus(item.chang)"
                            width="15"
                            class="ml-1"
                             />
                          </v-btn>
               
                  </template>
                  <template v-slot:item.actions="{ item }" >

                    <div v-if="!item.IsBot">
    
                    <v-icon
                      small
                      color="primary"
                      @click="deleteItem(item)"
                    >
                      mdi-delete
                    </v-icon>
                    </div>
                   
                  </template>

                  <template v-slot:no-data>
                    <v-btn
                      color="primary"
                      @click="initialize"
                    >
                      Reset
                    </v-btn>
                  </template>
                </v-data-table>

              </v-col>

            </v-row>

          </v-card-text>
        </v-card>

      </v-col>
    </v-row>

  </v-container>
</template>

<script src="./MyListPrice.js">
</script >
<style lang="scss" scoped>



</style>