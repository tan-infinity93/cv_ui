<template>
	<v-container fluid>
        <v-row>
            <v-col cols="1" sm="1" md="1"></v-col>
            <v-col cols="10" sm="10" md="10">
				<br/>
				<v-card
                    class="mx-auto card"
                    tile
                >
					<!-- <pre> -->
						<code class="js">
							{{this.apiResponse}}
						</code>
					<!-- </pre> -->
				</v-card>
            </v-col>
			<v-col cols="1" sm="1" md="1"></v-col>
        </v-row>
		<loading 
            :active.sync="isLoading" 
            :can-cancel="true"
            :is-full-page="fullPage"
            loader="dots"
            height=50
            width=50
        >
        </loading>
	</v-container>
</template>

<script>

import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
	components: {
        Loading
    },

	data() {
		return {
			isLoading: true,
			apiResponse: '',
		}
	},

	methods: {
        getCVData () {
            let url = 'https://tancv-api.herokuapp.com/cv/v1/cv-info';
            // let url = 'http://localhost:5000/cv/v1/cv-info'

            this.isLoading = true;
            
            setTimeout(() => {
                this.isLoading = false
                }, 500
            )

            axios.get(url, {
                headers: this.headers
            }).then(
				(res) => {
					window.console.log(res);
					this.apiResponse = JSON.stringify(res.data, undefined, 4);
				}
			).catch(
                (e) => {
                    window.console.log(e.response);
                    // this.$toastr.e('Please try after some time...!!!')
				}
			)
		}
	},

	mounted() {
        this.getCVData();
    }
}
</script>

<style>
	code{
		display: block;
		padding: 20px;
		background-color: black !important;
		color: #00cccc !important;
	}
</style>