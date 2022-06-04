
<template>
    <div class="home">
        <div class="container">
            <div>
                <div class="gajiSection">
                    <h4>Faktur Gaji</h4>
                    <hr>
                    <h5>Name: </h5>
                    <p> - </p>
                    <hr>
                    <b-row class="align-items-center">
                        <b-col class="ml-4">Masuk</b-col>
                        <b-col><b-button variant="link" v-b-modal.modalUbahKehadiran>Ubah Kehadiran</b-button></b-col>
                    </b-row>
                    <modal-ubah-kehadiran title="Ubah Kehadiran" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    

    export default {
        name: 'FakturGaji',
        data(){
            return{
                inquiries: [],
            }
        },
        methods: {
            setInquiries(data){
                this.inquiries = data
            }
        },
        mounted(){
            axios.get('https://boss.smartlink.id/salary/inquiry').then((response) => {
                console.log("ini di FakturGaji, response => ", response)
            }).catch((error) => console.log("failed with error => ", error))
        }
    }
</script>