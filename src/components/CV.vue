<template>
  <v-container fluid>
        <v-row>
            <v-col cols="1" sm="1" md="1" class="card-bg"></v-col>
            <v-col cols="10" sm="10" md="10" class="card-bg">
                <br/>
                <!-- <br/>
                <br/> -->
                <v-card
                    class="mx-auto card"
                    tile
                >
                    <v-row>
                        <v-col cols="3" sm="3" md="3" class="left" align="center">
                            <br/>
                            <v-img
                                src="../assets/tan.jpg"
                                lazy-src="https://picsum.photos/id/11/100/61"
                                max-width="150"
                                max-height="150"
                                id="avatar"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                        ></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>
                        <v-col cols="9" sm="9" md="9" class="right">
                            <br/>
                            <v-list flat dense id="name" v-if="model">
                                <v-list-item-group v-model="model1">
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <br/>
                                                <h1 id="name">{{this.name}}</h1>
                                                <br/>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-subtitle>
                                                <br/>
                                                <h3 id="designation">{{this.designation}}</h3>
                                                <br/>
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3" sm="3" md="3" class="left">
                            <!-- <br/> -->
                            <v-list flat dense id="about" v-if="model">
                                <v-subheader><h1>About:</h1></v-subheader>
                                <v-list-item-group v-model="model1">
                                    <v-list-item
                                    >
                                        <v-list-item-icon>
                                            <v-icon v-text="about"></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="aboutMe" id="aboutText"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                            <br/>
                            <v-list flat dense id="contact" v-if="model">
                                <!-- <v-list-item-content>
                                    <v-list-item-title>
                                        Contact:
                                    </v-list-item-title>
                                </v-list-item-content> -->
                                <v-subheader><h1>Contact:</h1></v-subheader>
                                <v-list-item-group v-model="model1">
                                    <v-list-item
                                        v-for="(item, i) in items"
                                        :key="i"
                                    >
                                        <v-list-item-icon>
                                            <v-icon v-text="item.icon"></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="item.text"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                            <br/>
                            <v-list flat dense id="contact" v-if="model">
                                <v-subheader><h1>Education:</h1></v-subheader>
                                <v-list-item-group v-model="model1">
                                    <v-list-item
                                        v-for="(item, i) in education"
                                        :key="i"
                                    >
                                        <v-list-item-icon>
                                            <v-icon v-text="item.icon"></v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="item.text"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                            <br/>
                        </v-col>
                        <v-col cols="9" sm="9" md="9" class="right">
                            <!-- <br/> -->
                            <v-list flat dense id="experience" v-if="model">
                                <v-subheader><h1>Experience:</h1></v-subheader>
                                <v-list-item-group v-model="model1">
                                    <v-list-item
                                        v-for="(item, i) in experience"
                                        :key="i"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <h3>{{item.role}}</h3>
                                            </v-list-item-title>
                                            <br/>
                                            <v-list-item-subtitle v-text="item.timeline"></v-list-item-subtitle>
                                            <br/>
                                            <v-list-item-subtitle v-text="item.company"></v-list-item-subtitle>
                                            <br/>
                                            <div
                                                v-for="(task, j) in item.tasks"
                                                :key="j"
                                            >
                                                <v-list-item-subtitle v-text="task"></v-list-item-subtitle>
                                            </div>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                            <br/>
                            <v-list flat dense id="experience" v-if="model">
                                <v-subheader><h1>Professional Skills:</h1></v-subheader>
                                <v-subheader class="v-sub">Programming Languages</v-subheader>
                                <v-list-item-group v-model="model1">
                                    <v-btn-toggle
                                        v-model="toggle_exclusive"
                                        mandatory
                                    >
                                    <v-list-item>   
                                        <v-list-item-icon>
                                            <v-icon color="blue">mdi-code-braces</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            {{this.programmingLanguages.join([separator = ', '])}}
                                        </v-list-item-content>
                                    </v-list-item>
                                    </v-btn-toggle>
                                </v-list-item-group>
                            </v-list>
                            <!-- <br/> -->
                            <v-list flat dense id="experience" v-if="model">
                                <v-subheader class="v-sub">Databases:</v-subheader>
                                <v-list-item-group v-model="model1">
                                    <v-list-item>   
                                        <v-list-item-icon>
                                            <v-icon color="blue">mdi-database</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            {{this.databases.join([separator = ', '])}}
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                            <v-list flat dense id="experience" v-if="model">
                                <v-subheader class="v-sub">Platform + Tools:</v-subheader>
                                <v-list-item-group v-model="model1">
                                    <v-list-item>   
                                        <v-list-item-icon>
                                            <v-icon color="blue">mdi-monitor</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            {{this.tools.join([separator = ', '])}}
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                            <br/>
                            <v-list flat dense id="internship" v-if="model">
                                <v-subheader><h1>Internship:</h1></v-subheader>
                                <v-list-item-group v-model="model1">
                                    <v-list-item
                                        v-for="(item, i) in internships"
                                        :key="i"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>{{item.project}}</v-list-item-title>
                                            <v-list-item-subtitle>Timeline: {{item.timeline}}</v-list-item-subtitle>
                                            <v-list-item-subtitle>Description: {{item.description}}</v-list-item-subtitle>
                                            <div
                                                v-for="(task, j) in item.tech"
                                                :key="j"
                                            >
                                                <v-list-item-subtitle class="vlis">
                                                    {{
                                                        j.split(' ')
                                                        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
                                                        .join(' ')
                                                    }}: {{task}}
                                                </v-list-item-subtitle>
                                            </div>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                            <br/>
                            <v-list flat dense id="interests" v-if="model">
                                <v-subheader><h1>Interests:</h1></v-subheader>
                                <v-list-item-group v-model="model1">
                                    <v-list-item>
                                        <v-chip-group
                                            active-class="#00cccc"
                                            column
                                        >
                                            <v-chip
                                                v-for="interest in this.interests"
                                                :key="interest"
                                            >
                                                {{ interest }}
                                            </v-chip>
                                        </v-chip-group>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-card>
                <br/>
            </v-col>
            <v-col cols="1" sm="1" md="1" class="card-bg"></v-col>
        </v-row>
        <!-- <loading 
            :active.sync="isLoading" 
            :can-cancel="true"
            :is-full-page="fullPage"
            loader="dots"
            height=50
            width=50
        >
        </loading> -->
    </v-container>
</template>

<script>
// Import Libs:

import axios from 'axios';
// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    components: {
        // Loading
    },

    data() {
        return {
            name: '',
            aboutMe: '',
            designation: '',
            pythonLogo: 'mdi-language-python',
            about: 'mdi-information',
            email: 'mdi-email',
            phone: 'mdi-phone',
            calendar: 'mdi-calendar-month',
            home: 'mdi-home',
            linkedin: 'mdi-linkedin',
            github: 'mdi-github',
            items: [
                {
                    icon: 'mdi-phone',
                    text: '',
                },
                {
                    icon: 'mdi-email',
                    text: '',
                },
                {
                    icon: 'mdi-cake-layered',
                    text: '',
                },
                {
                    icon: 'mdi-home',
                    text: '',
                },
                {
                    icon: 'mdi-linkedin',
                    text: '',
                },
            ],
            education: [
                {
                    icon: 'mdi-timer-sand-full',
                    text: '',
                },
                {
                    icon: 'mdi-school',
                    text: '',
                },
                {
                    icon: 'mdi-map-marker',
                    text: '',
                },
                {
                    icon: 'mdi-notebook-check',
                    text: '',
                },
                {
                    icon: 'mdi-percent',
                    text: '',
                }
            ],
            experience: [],
            programmingLanguages: [],
            databases: [],
            internships: [],
            interests: [],
            model: 0,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            isLoading: false,
            fullPage: true
        }
    },

    methods: {
        getCVData () {
            let url = 'https://tancv-api.herokuapp.com/cv/v1/cv-info';
            // let url = 'http://localhost:5000/cv/v1/cv-info'
            let token = window.sessionStorage.getItem('token');
            this.headers['Authorization'] = token;

            this.isLoading = true;
            
            setTimeout(() => {
                this.isLoading = false
                }, 500
            )

            axios.get(url, {
                headers: this.headers
            }).then(
                (res) => {
                    // window.console.log(res);
                    window.console.log(res.data.cv_data);

                    this.$toastr.s('Loading Data from API');

                    setInterval( () => {
                            this.name = res.data.cv_data.name;
                            this.aboutMe = res.data.cv_data.about;
                            this.designation = res.data.cv_data.designation;
                            this.items[0].text = res.data.cv_data.contact.phone;
                            this.items[1].text = res.data.cv_data.contact.email;
                            this.items[2].text = res.data.cv_data.contact.date_of_birth;
                            this.items[3].text = res.data.cv_data.contact.address;
                            this.items[4].text = res.data.cv_data.contact.linkedin;
                            this.education[0].text = res.data.cv_data.education[0].timeline;
                            this.education[1].text = res.data.cv_data.education[0].university;
                            this.education[2].text = res.data.cv_data.education[0].degree_college;
                            this.education[3].text = res.data.cv_data.education[0].stream;
                            this.education[4].text = res.data.cv_data.education[0].cgpa;
                            this.experience = res.data.cv_data.experience;
                            this.skills = res.data.cv_data.skills;
                            this.programmingLanguages = res.data.cv_data.skills.programming_languages;
                            this.databases = res.data.cv_data.skills.databases;
                            this.tools = res.data.cv_data.skills.['tools/platform'];
                            this.internships = res.data.cv_data.internships;
                            this.interests = res.data.cv_data.interests;
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
    #about{
        /* display: inline-block; */
        /* overflow-x: auto; */
    }
    #aboutText{
        /* overflow-x: auto; */
        /* word-wrap: break-all !important; */
        -webkit-line-clamp: unset !important;
        white-space: normal;
    }
    .card{
        padding: 0em;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5) !important;
        /* box-shadow: 10px rgba(0,0,0,0.5) !important; */
    }
    .card-bg{
        background-color: #ffffff;
    }
    #contact, #about{
        border: 0;
        background-color: #e3ecf9;
    }
    #name{
        margin-bottom: 0px !important;
        font-size: 40px;
    } 
    
    #designation{
        margin-top: -15px !important;
        font-size: 20px;
    }
    .left{
        background-color: #e3ecf9;
        color: #000000;
        padding: 10px;
    }
    .right{
        background-color: #ffffff;
        color: #000000;
        padding: 10px;
    }
    h1, h2, h3, h4, h5, h6{
        color: #0861CE;
    }
    .v-list-item__subtitle{
        /* color: #93A7BD !important; */
        color: black !important;
    }
    .v-sub{
        font-size: 15px !important;
        color: #000000 !important;
    }
    #avatar{
        border-radius: 50%;
        border: 5px solid #0861CE !important;
    }
</style>