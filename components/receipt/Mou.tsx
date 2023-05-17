import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: "30px",
    fontFamily: "Times-Roman",
    fontSize: 12,
  },
  title: { fontFamily: "Times-Bold", textAlign: "center" },
  row: {
    border: "1px solid black",
    flexDirection: "row",
    marginTop: "-1px",
  },
  signature: {
    height: "50px",
    width: "50px",
  },
});

interface MouProps {
  data: {};
}

function Mou() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ marginBottom: "8px" }}>
          <Text style={styles.title}>SURAT PERJANJIAN KERJASAMA</Text>
        </View>
        <Text>
          Surat Perjanjian Kerjasama ini dibuat pada hari ... tanggal ... bulan
          ... tahun ....
        </Text>
        <View>
          <Text>
            Antara : Gizi Bakti Masyarakat UNDIP Diwakili oleh Lidya Alwina
            Jokhu Yang selanjutnya disebut PIHAK PERTAMA
          </Text>
          <Text>
            Dengan : Kelompok 25 Capstone TA Teknik Komputer 2022/2023 Zulfa
            Fatah Akbar Ahmad Yang selanjutnya disebut PIHAK KEDUA
          </Text>
        </View>
        <Text>
          Kedua belah pihak sepakat untuk mengadakan perjanjian kerjasama dengan
          ketentuan sebagai berikut :
        </Text>
        <View style={{ marginBottom: "8px" }}>
          <Text style={styles.title}>Pasal 1</Text>
          <Text style={styles.title}>PROGRAM</Text>
        </View>
        <Text>
          PIHAK PERTAMA dan PIHAK KEDUA sepakat untuk menjalin kerjasama berupa
          pembuatan website Gizi Bakti Masyarakat FK Undip
        </Text>
        <View style={{ marginBottom: "8px" }}>
          <Text style={styles.title}>Pasal 2</Text>
          <Text style={styles.title}>KEWAJIBAN PIHAK PERTAMA</Text>
        </View>
        <Text>
          1. Menjadi penerima jasa dan produk dari pihak kedua berupa website
          Gizi Bakti Masyarakat yang telah diberikan oleh PIHAK KEDUA serta
          memanfaatkan website tersebut dengan sebaik-baiknya dan penuh tanggung
          jawab. 2. Memberikan data-data yang dibutuhkan oleh PIHAK KEDUA
        </Text>
        <View style={{ marginBottom: "8px" }}>
          <Text style={styles.title}>Pasal 3</Text>
          <Text style={styles.title}>KEWAJIBAN PIHAK KEDUA</Text>
        </View>
        <Text>
          1. Memberikan jasa dan produk berupa website Gizi Bakti Masyarakat
          sesuai dengan peraturan perjanjian kedua belah pihak 2. Nilai
          pekerjaan yang disepakati untuk menyelesaikan website dalam perjanjian
          ini adalah Rp 0,- (GRATIS) 3. Kontrak perjanjian ini dilakukan sejak
          14 November 2022 hingga 31 Mei 2022
        </Text>
        <View style={{ marginBottom: "8px" }}>
          <Text style={styles.title}>Pasal 4</Text>
          <Text style={styles.title}>PELAYANAN DAN FITUR</Text>
        </View>
        <Text>
          PIHAK PERTAMA akan mendapatkan pelayanan dari PIHAK KEDUA dengan
          perjanjian sebagai berikut :
        </Text>
        <View style={{ marginBottom: "8px" }}>
          <Text style={styles.title}>Pasal 5</Text>
          <Text style={styles.title}>PERUBAHAN</Text>
        </View>
        <Text>
          Untuk perubahan dan hal lain yang belum tercantum dalam Perjanjian
          Kerjasama ini akan diatur kemudian berdasarkan kesepakatan oleh kedua
          belah pihak.
        </Text>
        <View style={{ marginBottom: "8px" }}>
          <Text style={styles.title}>Pasal 6</Text>
          <Text style={styles.title}>HUKUM DAN JURISDIKSI</Text>
        </View>
        <Text>
          Seandainya terjadi perselisihan dalam pelaksanaan perjanjian kerjasama
          ini sehingga salah satu pihak tidak dapat memenuhi kewajibannya, maka
          masing-masing pihak akan menyelesaikannya secara musyawarah untuk
          mufakat. Apabila dengan jalan musyawarah mufakat tidak terselesaikan
          maka kedua belah pihak menunjuk dan menetapkan Kantor Pengadilan
          Negeri Semarang sebagai domisili hukum tetap dan tidak berubah sebagai
          tempat penyelesaian. Surat perjanjian kerjasama ini dibuat dalam 2
          (dua) rangkap, untuk masing-masing pihak yang mempunyai kekuatan hukum
          sama dan ditandatangani oleh kedua belah pihak dalam keadaan sehat
          jasmani dan rohani serta tanpa adanya unsur paksaan dari pihak
          manapun.
        </Text>
        <View style={{ flexDirection: "row", marginTop: "16px" }}>
          <View style={{ width: "50%", alignItems: "center" }}>
            <View style={{ fontFamily: "Times-Bold" }}>
              <Text style={{ padding: "8px 0" }} />
              <Text>Ketua Tim Inspeksi</Text>
            </View>
            <Image style={styles.signature} src="./images/ttd.jpeg" />
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <View style={{ alignItems: "center", fontFamily: "Times-Bold" }}>
              <Text style={{ marginBottom: "3px" }}>Mengetahui,</Text>
              <Text>Pimpinan Unit Supplier</Text>
            </View>
            <Image style={styles.signature} src="./images/ttd.jpeg" />
          </View>
        </View>
        <View style={{ marginTop: "17px", alignItems: "flex-end" }}>
          <Text>PF. 7.1-7/BBKIPM-JKTI</Text>
        </View>
      </Page>
    </Document>
  );
}

export default Mou;
