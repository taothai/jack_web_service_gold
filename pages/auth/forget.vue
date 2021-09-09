<template >
  <div>
    <div class="text-center pa-5">
      <img
        src="~/assets/img/logo.png"
        width="100"
      />
    </div>
    <v-card
      elevation="10"
      max-width="400"
      min-width="400"
    >
      <v-card-title
        primary-title
        class="text-center"
      >
        <v-spacer></v-spacer>
        <div class="text-center">กรุณากรอกอีเมลล์</div>
        <v-spacer></v-spacer>

      </v-card-title>
      <v-card-text>

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="Email"
            outlined
            :rules="emailRules"
            label="อีเมลล์"
            dense
            required
          ></v-text-field>

        </v-form>

        <!-- ALERT START -->
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
        <!-- ALERT END -->

      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          text
          to="/auth/login"
        >
          กลับหน้าเข้าระบบ
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          width="180"
          @click="validate()"
        >
          ขอรหัสผ่านใหม่
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script src="./MyForget.js">
</script>