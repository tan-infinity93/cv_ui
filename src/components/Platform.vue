<template>
	<v-container fluid>
        <v-row>
            <v-col cols="4" sm="4" md="4">
				<br/>
                <v-card
                    class="mx-auto card"
                    tile
                >
					<br/>
					<v-img
						class="black--text align-end"
						src="../assets/backend.png"
						height="200px"
						contain
					>
					</v-img>
					<v-card-title>Backend Details:</v-card-title>
					<v-card-subtitle>Programming Language: {{this.backend.programming_language}}</v-card-subtitle>
					<v-card-subtitle>Framework: {{this.backend.framework}}</v-card-subtitle>
					<v-card-subtitle>Database: {{this.backend.database}}</v-card-subtitle>
					<v-card-subtitle>Wsgi Server: {{this.backend.wsgi_server}}</v-card-subtitle>
					<v-card-subtitle>Web Server: {{this.backend.web_server}}</v-card-subtitle>
                </v-card>
			</v-col>
            <v-col cols="4" sm="4" md="4">
                <br/>
                <v-card
                    class="mx-auto card"
                    tile
                >
					<br/>
					<v-img
						class="black--text align-end"
						src="https://cic.gsa.gov/images/paas-icon.png"
						height="200px"
						contain
					>
					</v-img>
					<v-card-title>Platform Details:</v-card-title>
					<v-card-subtitle>PaaS: {{this.paas}}</v-card-subtitle>
					<v-card-subtitle>OS: {{this.platform}}</v-card-subtitle>
					<v-card-subtitle>Release: {{this.release}}</v-card-subtitle>
					<v-card-subtitle>Version: {{this.version}}</v-card-subtitle>
					<v-card-subtitle>Architecture: {{this.architecture}}</v-card-subtitle>
					<v-card-subtitle>Cpu Cores: {{this.cpu_cores}}</v-card-subtitle>
					<v-card-subtitle>Python Version: {{this.python_version}}</v-card-subtitle>
                </v-card>
            </v-col>
			<v-col cols="4" sm="4" md="4">
				<br/>
                <v-card
                    class="mx-auto card"
                    tile
                >
					<br/>
					<v-img
						class="black--text align-end"
						src="../assets/frontend.jpg"
						height="200px"
						contain
					>
					</v-img>
					<v-card-title>Frontend Details:</v-card-title>
					<v-card-subtitle>Programming Language: {{this.frontend.programming_language}}</v-card-subtitle>
					<v-card-subtitle>UI Framework: {{this.frontend.ui_framework}}</v-card-subtitle>
					<v-card-subtitle>Middleware: {{this.frontend.middleware}}</v-card-subtitle>
                </v-card>
			</v-col>
        </v-row>
	</v-container>
</template>

<script>

import axios from 'axios';

export default {
	data() {
		return {
			paas: "",
			platform: "",
			release: "",
			version: "",
			architecture: "",
			cpu_cores: "",
			python_version: "",
			backend: {
				programming_language: "",
				framework: "",
				database: "",
				wsgi_server: "",
				web_server: "",
			},
			frontend: {
				programming_language: "",
				ui_framework: "",
				middleware: "",
			},
			headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
		}
	},

	methods: {
        getCVData () {
            let url = 'https://tancv-api.herokuapp.com/cv/v1/system-info';
            // let url = 'http://localhost:5000/cv/v1/cv-info'
            let token = window.sessionStorage.getItem('token');
            this.headers['Authorization'] = token;

            // this.isLoading = true;
            
            // setTimeout(() => {
            //     this.isLoading = false
            //     }, 500
            // )

            axios.get(url, {
                headers: this.headers
            }).then(
                (res) => {
                    // window.console.log(res);
                    window.console.log(res.data.cv_data);

                    this.$toastr.s('Loading Data from API');

                    setInterval( () => {
							this.paas = res.data.system_data.paas;
							this.name = res.data.system_data.name;
							this.platform = res.data.system_data.platform;
							this.release = res.data.system_data.release;
							this.version = res.data.system_data.version;
							this.architecture = res.data.system_data.architecture;
							this.cpu_cores = res.data.system_data.cpu_cores;
							this.python_version = res.data.system_data.python_version;
							this.backend.programming_language = res.data.system_data.backend.programming_language;
							this.backend.framework = res.data.system_data.backend.framework;
							this.backend.database = res.data.system_data.backend.database;
							this.backend.wsgi_server = res.data.system_data.backend.wsgi_server;
							this.backend.web_server = res.data.system_data.backend.web_server;
							this.frontend.programming_language = res.data.system_data.frontend.programming_language;
							this.frontend.ui_framework = res.data.system_data.frontend.ui_framework;
							this.frontend.middleware = res.data.system_data.frontend.middleware;
                            this.model = 1;
                        },
                        1000
                    );    
                    // window.location = '/#/image-loader'
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
	.card{
        padding: 0em;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5) !important;
        /* box-shadow: 10px rgba(0,0,0,0.5) !important; */
    }
</style>