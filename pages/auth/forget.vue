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
     <v-card-title primary-title class="text-center">
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
            v-model="email"
            outlined
            :rules="emailRules"
            label="อีเมลล์"
            required
            dense
          ></v-text-field>

        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text>
          กลับหน้าเข้าระบบ
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          width="180"
        >
          ขอรหัสผ่านใหม่
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  layout: "login"
};
</script>