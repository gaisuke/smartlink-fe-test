<template>
    <div>
        <div class="cardSalary">
            <h4>Faktur Gaji</h4>
            <hr/>
            <h5>Nama: </h5>
            <p>{{inquiry.nama_karyawan}}</p>
            <hr/>
            <b-row class="align-items-center">
                <b-col class="ml-4">Masuk</b-col>
                <b-col class="ml-4">{{inquiry.total_kehadiran}}</b-col>
                <b-col><b-button variant="link" v-b-modal.modalUbahKehadiran>Ubah Kehadiran</b-button></b-col>
            </b-row>
            <!-- modal ubah kehadiran -->
            <modal-ubah-kehadiran title="Ubah Kehadiran" />
        </div>
        <div class="cardSalary">
            <div class="titleCard">Gaji</div>
            <hr/>
            <b-row class="cardRow">
                <b-col>
                    <strong>{{inquiry.pengaturan_gaji[0].nama}}</strong><br />
                    <small class="text-muted">{{inquiry.pengaturan_gaji[0].nominal}} x 1 {{inquiry.pengaturan_gaji[0].jenis}}</small>
                </b-col>
                <b-col >
                    <strong>{{gajiPokok = inquiry.pengaturan_gaji[0].nominal * inquiry.total_kehadiran}}</strong>
                    <b-button variant="link" v-b-modal.modalGajiPokok>
                    <b-icon-pencil-square></b-icon-pencil-square>
                    </b-button>
                </b-col>
            </b-row>
            <!-- modal gaji pokok -->
            <modal-gaji-pokok title="Gaji Pokok" />
            <b-row class="cardRow">
                <b-col>
                    <strong>{{inquiry.pengaturan_gaji[1].nama}}</strong><br />
                    <small class="text-muted">{{inquiry.pengaturan_gaji[1].nominal}} x {{inquiry.total_kehadiran}} {{inquiry.pengaturan_gaji[1].jenis}}</small>
                </b-col>
                <b-col >
                    <strong>{{uangMakan = inquiry.pengaturan_gaji[1].nominal * inquiry.total_kehadiran}}</strong>
                    <b-button variant="link" v-b-modal.modalUangMakan>
                    <b-icon-pencil-square></b-icon-pencil-square>
                    </b-button>
                </b-col>
            </b-row>
            <!-- modal uang makan -->
            <modal-uang-makan title="Uang Makan" />
            <b-row class="cardRow">
                <b-col>
                    <strong>{{inquiry.pengaturan_gaji[2].nama}}</strong><br />
                    <small class="text-muted">{{inquiry.pengaturan_gaji[2].nominal}} x {{inquiry.total_kehadiran}} {{inquiry.pengaturan_gaji[2].jenis}}</small>
                </b-col>
                <b-col >
                    <strong>{{uangAbsen = inquiry.pengaturan_gaji[2].nominal * inquiry.total_kehadiran}}</strong>
                    <b-button variant="link" v-b-modal.modalUangAbsen>
                    <b-icon-pencil-square></b-icon-pencil-square>
                    </b-button>
                </b-col>
            </b-row>
            <!-- modal uang absen -->
            <modal-uang-absen title="Uang Absen" />
            <b-row class="cardRow">
                <b-col>
                    <strong>{{inquiry.pengaturan_gaji[3].nama}}</strong><br />
                    <small class="text-muted">{{inquiry.pengaturan_gaji[3].nominal}} x {{inquiry.total_kehadiran}} {{inquiry.pengaturan_gaji[3].jenis}}</small>
                </b-col>
                <b-col >
                    <strong>{{uangTransport = inquiry.pengaturan_gaji[3].nominal * inquiry.total_kehadiran}}</strong>
                    <b-button variant="link" v-b-modal.modalUangTransport>
                    <b-icon-pencil-square></b-icon-pencil-square>
                    </b-button>
                </b-col>
            </b-row>
            <!-- modal uang transport -->
            <modal-uang-transport title="Uang Transport" />
            <b-row class="cardRow"> 
                <b-col>
                    <strong>{{inquiry.pengaturan_gaji[4].nama}}</strong><br />
                    <small class="text-muted">{{inquiry.pengaturan_gaji[4].nominal}} x {{inquiry.total_kehadiran}} {{inquiry.pengaturan_gaji[4].jenis}}</small>
                </b-col>
                <b-col >
                    <strong>{{uangSnack = inquiry.pengaturan_gaji[4].nominal * inquiry.total_kehadiran}}</strong>
                    <b-button variant="link" v-b-modal.modalUangSnack>
                    <b-icon-pencil-square></b-icon-pencil-square>
                    </b-button>
                </b-col>
            </b-row>
            <!-- modal uang snack -->
            <modal-uang-snack title="Uang Snack" />
            <hr/>
            <b-row class="cardRow">
                <b-col >
                    <h4>Subtotal Gaji</h4>
                    <p></p>
                </b-col>
                <b-col >
                    <h4>Rp. {{subTotalGaji = gajiPokok + uangMakan + uangAbsen + uangTransport + uangSnack}}</h4>
                </b-col>
            </b-row>
        </div>

    <!-- card upah -->
        <div class="cardSalary">
            <div class="titleCard">Upah Borongan</div>
            <hr/>
            <b-row class="cardRow"> 
                <b-col >
                    <strong>{{inquiry.pengaturan_upah[0].nama}}</strong><br />
                    <small class="text-muted">{{inquiry.pengerjaan_upah[1].nominal + inquiry.pengerjaan_upah[1].satuan}}</small>
                </b-col>
                <b-col >
                    <strong class="mr-3">{{totalUpah1 = inquiry.pengaturan_upah[0].nominal * inquiry.pengerjaan_upah[1].nominal}}</strong>
                    <b-icon-dash-circle></b-icon-dash-circle>
                </b-col>
            </b-row>
            <b-row class="cardRow">
                <b-col >
                    <strong>{{inquiry.pengaturan_upah[1].nama}}</strong><br />
                    <small class="text-muted">{{inquiry.pengerjaan_upah[0].nominal + inquiry.pengerjaan_upah[0].satuan}}</small>
                </b-col>
                <b-col >
                    <strong class="mr-3">{{totalUpah2 = inquiry.pengaturan_upah[1].nominal * inquiry.pengerjaan_upah[0].nominal}}</strong>
                    <b-icon-dash-circle></b-icon-dash-circle>
                </b-col>
            </b-row>
            <hr/>
            <b-row class="cardRow">
                <b-col >
                    <h4>Subtotal Upah</h4>
                    <p></p>
                </b-col>
                <b-col >
                    <h4>Rp. {{subtotalUpah = totalUpah1 + totalUpah2}}</h4>
                </b-col>
            </b-row>
        </div>

    <!-- Komisi -->
        <div class="cardSalary">
            <div class="titleCard">Komisi</div>
            <hr/>
            <div class="smallText">
                <b-button variant="link" v-b-modal.modalTambahKomisi><b-icon-plus-circle></b-icon-plus-circle>Tambah komisi lain..</b-button> 
            </div>
             <!-- modal tambah komisi -->
            <modal-tambah-komisi title="Tambah Komisi" /> 
            <b-row class="cardRow">
                <!-- <b-col>
                    <strong><p>-</p></strong>
                </b-col>
                <b-col >
                    <strong>0</strong>
                    <b-button variant="link" v-b-modal.modalBonusTarget>
                    <b-icon-pencil-square></b-icon-pencil-square>
                    </b-button>
                </b-col> -->
            </b-row>
            <!-- modal tambah bonus -->
            <modal-bonus-target title="Bonus Target 1" /> 
            <hr />
            <b-row class="cardRow">
                <b-col >
                    <h4>Subtotal Komisi</h4>
                </b-col >
                <b-col >
                    <h4>Rp. 0</h4>
                </b-col>
            </b-row>
            <hr />
            <b-row class="cardRow">
                <b-col >
                    <h4>Total Gaji Kotor</h4>
                </b-col>
                <b-col class="mb-3">
                    <h4>Rp. {{gajiKotor = subTotalGaji + subtotalUpah}}</h4>
                </b-col>
            </b-row>
        </div>

    <!-- Tanggungan -->
        <div class="cardSalary">
            <div class="titleCard">Tanggungan</div>
            <!-- <small class="smallText">Karyawan ini memiliki tanggungan Rp. 570.000</small> -->
            <hr/>
             <div class="smallText">
                <b-button variant="link" v-b-modal.modalTambahTanggungan><b-icon-plus-circle></b-icon-plus-circle>Tambah pembayaran tanggungan..</b-button> 
            </div>
            <!-- modal tanggungan -->
            <modal-tambah-tanggungan title="Tambah Tanggungan" />
            <b-row class="cardRow">
                <!-- <b-col >
                    <strong>Ganti Barang Hilang</strong><br />
                    <small class="text-muted">Baju yang hilang warna merah</small>
                </b-col>
                <b-col >
                    <strong>50.000</strong>
                    <b-button variant="link" v-b-modal.modalTanggunganHilang>
                    <b-icon-pencil-square></b-icon-pencil-square>
                    </b-button>
                </b-col> -->
            </b-row>
            <!-- modal tanggungan hilang -->
            <modal-tanggungan-hilang title="Tambah Tanggungan Hilang" />
            <b-row class="cardRow">
                <!-- <b-col >
                    <strong>Denda Keterlambatan</strong><br />
                    <small class="text-muted">Karena terlambat 3 hari</small>
                </b-col>
                <b-col >
                    <strong>20.000</strong>
                    <b-button variant="link" v-b-modal.modalTanggunganDenda>
                    <b-icon-pencil-square></b-icon-pencil-square>
                    </b-button>
                </b-col> -->
            </b-row>
            <!-- modal tanggungan denda -->
            <modal-tanggungan-denda title="Tambah Tanggungan Denda" />
            <hr />
            <b-row class="cardRow">
                <b-col >
                    <h4>Tanggungan Dibayar</h4>
                    <p></p>
                </b-col>
                <b-col >
                    <h4 class="font-color-red">Rp. 0</h4>
                </b-col>
            </b-row>
        </div>

    <!-- Total gaji bersih -->
        <div class="cardSalary">
            <b-row class="cardRow">
                <b-col class="mt-3">
                    <h4>Total Gaji Bersih<b-icon-check-circle></b-icon-check-circle></h4>
                    <p></p>
                </b-col>
                <b-col class="mt-3">
                    <h4 class="font-color-red">Rp. {{gajiBersih = gajiKotor - 0}}</h4>
                </b-col>
            </b-row>
            <small class="smallText">Nominal aktif yang diterima karyawan setelah ditambah komisi dikurangi pembayaran tanggungan (jika ada)</small>
            <b-button class="mt-3" href="/detail-pembayaran" block variant="primary">Lanjutkan</b-button>
        </div>
    </div>
</template>

<script>
import ModalUbahKehadiran from './modals/ModalUbahKehadiran.vue'
import ModalUangAbsen from './modals/ModalUangAbsen.vue'
import ModalGajiPokok from './modals/ModalGajiPokok.vue'
import ModalUangTransport from './modals/ModalUangTransport.vue'
import ModalUangMakan from './modals/ModalUangMakan.vue'
import ModalUangSnack from './modals/ModalUangSnack.vue'
import ModalTambahKomisi from './modals/ModalTambahKomisi.vue'
import ModalBonusTarget from './modals/ModalBonusTarget.vue'
import ModalTambahTanggungan from './modals/ModalTambahTanggungan.vue'
import ModalTanggunganHilang from './modals/ModalTanggunganHilang.vue'
import ModalTanggunganDenda from './modals/ModalTanggunganDenda.vue'

export default {
  components: { ModalUbahKehadiran, ModalUangAbsen, ModalUangTransport, ModalGajiPokok, ModalUangMakan, ModalUangSnack, ModalTambahKomisi, ModalTambahTanggungan, ModalTanggunganHilang, ModalTanggunganDenda,  ModalBonusTarget},
    name: 'cardSalary',
    props: ['inquiry'],
    created: function() {
        console.log("ini didalam CardSalary => ", this.inquiry)
    }

}
</script>

<style>

.cardSalary {
    text-align: center;
    border: 1px solid #eee;
    margin-top: 10px;
    margin-bottom: 10px;
}

.titleCard {
    font-size: 25px;
    text-align: left;
    font-weight: bold;
    padding: 10px;
    padding-left:40px;
    padding-bottom: 0px
}
.smallText {
    font-size: 15px;
    text-align: left;
    padding-left:40px;
    padding-bottom: 0px
}

.cardRow {
    padding-left:40px;
}
</style>