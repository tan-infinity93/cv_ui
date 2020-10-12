<template>
    <v-container fluid>
        <v-row>
            <v-col cols="2" sm="0" md="2"></v-col>
            <v-col cols="8" sm="12" md="8">
                <br/>
                <br/>
                <br/>
                <v-card
                    class="mx-auto card"
                >
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-text-field
                        v-model="username"
                        :counter="10"
                        :rules="usernameRules"
                        label="Name"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        required
                    ></v-text-field>

                    <!-- <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="login"
                    > -->
                    <v-btn
                        color="success"
                        class="mr-4"
                        @click="login"
                    >
                    Login
                    </v-btn>

                    <v-btn
                        color="error"
                        class="mr-4"
                        @click="reset"
                    >
                    Clear Form
                    </v-btn>

                    <!-- <v-btn
                        color="warning"
                        @click="resetValidation"
                    >
                    Reset Validation
                    </v-btn> -->
                </v-form>
                </v-card>
            </v-col>
            <v-col cols="2" sm="0" md="2"></v-col>
        </v-row>
    </v-container>
</template>

<script>
// Import Libs:

import axios from 'axios';

export default {
    components: { },

    data() {
        return {
            valid: true,
            username: '',
            usernameRules: [
                v => !!v || 'Username is required',
                v => (v && v.length <= 10) || 'Username must be less than 10 characters',
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length <= 10) || 'Password must be less than 10 characters',
            ],
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
    },
    
    methods: {
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        login () {
            // alert('login');
            // this.$toastr.s('Login is Successful...!!!')
            this.$refs.form.validate();
            
            if(this.userName != '' && this.passWord != ''){
                let url = 'https://tancv-api.herokuapp.com/cv/v1/token-create';
                var data = {
                    'username': this.username,
                    'password': this.password
                }
                axios.post(url, data, {
                    headers: this.headers
                }).then(
                    (res) => {
                        window.console.log(res);
                        window.sessionStorage.setItem('token', res.data.token);
                        this.$toastr.s('Login is Successful...!!!')
                        // window.location = '/#/image-loader'
                    }
                ).catch(
                    (e) => {
                        window.console.log(e.response);
                        this.$toastr.e('Please try after some time...!!!')
                    }
                )
            }
        }
    }
    }
</script>

<style scoped>
    .card{
        padding: 2.5em;
    }
</style>