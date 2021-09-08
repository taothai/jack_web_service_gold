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
         <div class="text-center">เข้าระบบเพื่อจัดการ</div>
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
            dense
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="รหัสผ่าน"
            hint="At least 8 characters"
            counter
            dense
            outlined
            required
            @click:append="show1 = !show1"
          ></v-text-field>

        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text to="/auth/forget">
          ลืมรหัสผ่าน
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          width="180"
          @click="validate()"
        >
          เข้าระบบ
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import nuxtStorage from 'nuxt-storage';
export default {
  layout: "login", 
   head(){
      return {
        title : 'เข้าสู่ระบบจัดการจัดการ',
        description : 'เข้าจัดการระบบ Admin'
      }
    },
  data() {
    return {
      valid : true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'รูปแบบไม่ถูกต้อง',
      ],
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      show1: false,
      email : '',
      password : ''
    }
  },
  methods: {
    validate() {
       var vd =  this.$refs.form.validate()
       console.log(vd);
      },
  },
};
</script>