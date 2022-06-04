<template>
    <b-modal id="modalUbahKehadiran" :title="title">
        <label for="spinButton">Durasi Keterlambatan</label>
        <b-form-spinbutton id="spinButton" v-model="value" min="1" max="100"></b-form-spinbutton>
    </b-modal>
</template>

<script>
    export default {
        name: 'ModalUbahKehadiran',
        props: {
            title: String
        },
        data() {
            return {
                value: 22
            }
        }
    }
</script>