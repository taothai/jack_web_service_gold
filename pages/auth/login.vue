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
      min-width="350"
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
            v-model="Email"
            outlined
            :rules="emailRules"
            label="อีเมลล์"
            dense
            required
          ></v-text-field>
          <v-text-field
            v-model="Password"
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
<script src="./MyLogin.js"/>
