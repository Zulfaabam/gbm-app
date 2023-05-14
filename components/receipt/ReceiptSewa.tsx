import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { SewaFormData } from "../modals/SewaModal";
import { numberFormatter } from "@/common/utils/formatter";

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
});

interface ReceiptSewaProps {
  sewa: SewaFormData;
}

function ReceiptSewa({ sewa }: ReceiptSewaProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ marginBottom: "8px" }}>
          <Text style={styles.title}>DATA SEWA ALAT KESEHATAN</Text>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              width: "7%",
              borderRight: "1px solid black",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            1.
          </Text>
          <Text
            style={{
              width: "30%",
              borderRight: "1px solid black",
              padding: "10px",
            }}
          >
            Nama Penyewa
          </Text>
          <Text style={{ width: "63%", padding: "10px" }}>{sewa.name}</Text>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              width: "7%",
              borderRight: "1px solid black",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            2.
          </Text>
          <Text
            style={{
              width: "30%",
              borderRight: "1px solid black",
              padding: "10px",
            }}
          >
            Instansi
          </Text>
          <View style={{ width: "63%" }}>
            <Text style={{ width: "100%", padding: "10px" }}>
              {sewa.school}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              width: "7%",
              borderRight: "1px solid black",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            3.
          </Text>
          <Text
            style={{
              width: "30%",
              borderRight: "1px solid black",
              padding: "10px",
            }}
          >
            Alamat
          </Text>
          <View
            style={{
              width: "63%",
            }}
          >
            <Text style={{ width: "100%", padding: "10px" }}>
              {sewa.address}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              width: "7%",
              borderRight: "1px solid black",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            4.
          </Text>
          <Text
            style={{
              width: "30%",
              borderRight: "1px solid black",
              padding: "10px",
            }}
          >
            No. WhatsApp
          </Text>
          <View
            style={{
              width: "63%",
            }}
          >
            <Text style={{ width: "100%", padding: "10px" }}>
              {sewa.phoneNumber}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              width: "7%",
              borderRight: "1px solid black",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            5.
          </Text>
          <Text
            style={{
              width: "30%",
              borderRight: "1px solid black",
              padding: "10px",
            }}
          >
            Alat Kesehatan
          </Text>
          <View style={{ width: "63%", flexDirection: "row" }}>
            <View style={{ width: "50%", flexDirection: "column" }}>
              <Text
                style={{
                  padding: "10px",
                  borderRight: "1px solid black",
                  textAlign: "center",
                }}
              >
                Nama Barang
              </Text>
              {sewa.items?.map((item, idx) => (
                <View style={{ width: "100%" }} key={idx}>
                  <Text
                    style={{
                      padding: "0 10px 10px 10px",
                      borderRight: "1px solid black",
                      textAlign: "center",
                    }}
                  >
                    {item.value}
                  </Text>
                </View>
              ))}
            </View>
            <View style={{ width: "50%", flexDirection: "column" }}>
              <Text style={{ padding: "10px", textAlign: "center" }}>
                Jumlah
              </Text>
              {sewa.items?.map((item, idx) => (
                <View style={{ width: "100%" }} key={idx}>
                  <Text
                    style={{
                      padding: "0 10px 10px 10px",
                      textAlign: "center",
                    }}
                  >
                    {item.total}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              width: "7%",
              borderRight: "1px solid black",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            6.
          </Text>
          <Text
            style={{
              width: "30%",
              borderRight: "1px solid black",
              padding: "10px",
            }}
          >
            Tanggal & Lama Peminjaman
          </Text>
          <View style={{ width: "63%", flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  padding: "10px",
                  borderRight: "1px solid black",
                  textAlign: "center",
                }}
              >
                Tanggal
              </Text>
              <Text
                style={{
                  padding: "0 10px 10px 10px",
                  borderRight: "1px solid black",
                  textAlign: "center",
                }}
              >
                {sewa.date}
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={{ padding: "10px", textAlign: "center" }}>
                Lama (hari)
              </Text>
              <Text
                style={{ padding: "0 10px 10px 10px", textAlign: "center" }}
              >
                {sewa.duration}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              width: "7%",
              borderRight: "1px solid black",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            7.
          </Text>
          <Text
            style={{
              width: "30%",
              borderRight: "1px solid black",
              padding: "10px",
            }}
          >
            Jaminan
          </Text>
          <Text style={{ width: "63%", padding: "10px" }}>
            {sewa.guarantee.toUpperCase()}
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              width: "7%",
              borderRight: "1px solid black",
              textAlign: "center",
              padding: "10px 0",
            }}
          >
            8.
          </Text>
          <Text
            style={{
              width: "30%",
              borderRight: "1px solid black",
              padding: "10px",
            }}
          >
            Total Harga
          </Text>
          <Text style={{ width: "63%", padding: "10px" }}>
            Rp. {sewa.totalPrice && numberFormatter.format(sewa.totalPrice)}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default ReceiptSewa;
