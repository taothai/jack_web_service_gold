
]<template>
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
          class="ml-2 pa-5"
          elevation="10"
          max-width="1000"
        >
          <v-card-title class="text-h5 ">
            รายงานทั้งหมด
          </v-card-title>

          <v-divider></v-divider>
          <v-card-text>

            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <!-- col="12" lg="12" xl="12" md="12" sm="12" xs="12" -->

              <!--start-->
              <v-row>
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนการขาย(Sale)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนการซื้อ(Purchases)</div>
                    </v-card-text>
                  </v-card>

                </v-col>
                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนรายรับ(Income)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนรายจ่าย(Expenses)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนใบเสนอราคา(Quotations)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="5"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนการคืนสินค้า(Return Orders)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนการปรับสต็อค(Stock Ajustment)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนการโอนย้ายสต็อค(Stock Tranfer)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนลูกค้า(Customer)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนซัพพลายเออร์(Suppliers)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนหมวดหมู่(Categories)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนแบรนด์สินค้า(Brand)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนสินค้า(Products)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนการให้บริการ(Service)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนรายการอาหาร(Recipes)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

                <!--start-->
                <v-col
                  cols="12"
                  xl="3"
                  lg="4"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="pa-0"
                    elevation="0"
                    color="#52BE80"
                    dark
                  >
                    <v-card-text>
                      <div class="text-h4 white--text">50</div>
                      <div class="white--text text-headline font-weight-bold">จำนวนเซ็ทสินค้า(Combo Deal)</div>
                    </v-card-text>
                  </v-card>

                </v-col>

              </v-row>

            </v-form>

            <v-col
              cols="12"
              sm="12"
              class="mt-10"
            >
              <!-- link -->

              <v-card outlined>
                <v-card-title class="text-h6">
                  ดูรายงานเพิ่มเติม
                </v-card-title>
                <v-card-text>
                  <v-row
                    align="center"
                    justify-center
                  >
                    <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >สมัครสมาชิก</v-btn>

                    </v-col>

                    <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >วันหมดอายุสินค้า</v-btn>

                    </v-col>

                    <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >แจ้งเตือนจำนวนสต็อค</v-btn>

                    </v-col>
                    <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >รายงานสินค้า</v-btn>

                    </v-col>


                           <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >สินค้าขายดี</v-btn>

                    </v-col>

                    <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >รายงานการขาย</v-btn>

                    </v-col>

                    <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >รายงานการซื้อ</v-btn>

                    </v-col>
                    <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >รายงานการชำระเงิน</v-btn>

                    </v-col>

                           <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >รายงานรายจ่าย</v-btn>

                    </v-col>
                           <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >รายงานรายรับ</v-btn>

                    </v-col>

                           <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >รายงานภาษี</v-btn>

                    </v-col>

                           <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >รายงานโอนย้ายสต็อค</v-btn>

                    </v-col>

                           <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >รายงานการปรับสต็อค</v-btn>

                    </v-col>

                           <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >รายงานตามเวลา</v-btn>

                    </v-col>

                           <!--start-->
                    <v-col
                      cols="12"
                      xl="3"
                      lg="4"
                      md="6"
                      sm="6"
                      xs="12"
                    >
                      <v-btn
                        block
                        color="primary"
                        depressed
                        elevation="2"
                        class="white--text text-headline font-weight-bold"
                        large
                      >รายงานกิจกรรมในแอพ</v-btn>

                    </v-col>
                  </v-row>
                </v-card-text>

              </v-card>

            </v-col>
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
.v-application .primary--text {
  color: #2198f3 !important;
  caret-color: #2196f3 !important;
}
</style>

