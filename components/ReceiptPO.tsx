import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

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

const ReceiptPO = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ marginBottom: "8px" }}>
          <Text style={styles.title}>DATA PRE-ORDER ALAT KESEHATAN</Text>
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
          <Text style={{ width: "63%", padding: "10px" }}>sup name</Text>
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
            <Text style={{ width: "100%", padding: "10px" }}>instansi</Text>
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
            No. WhatsApp
          </Text>
          <View
            style={{
              width: "63%",
            }}
          >
            <Text style={{ width: "100%", padding: "10px" }}>nomer wa</Text>
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
            Barang
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
                Terpasang (ton)
              </Text>
              <Text
                style={{
                  padding: "0 10px 10px 10px",
                  borderRight: "1px solid black",
                  textAlign: "center",
                }}
              >
                value
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={{ padding: "10px", textAlign: "center" }}>
                Realisasi (ton/hari)
              </Text>
              <Text
                style={{ padding: "0 10px 10px 10px", textAlign: "center" }}
              >
                value
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
            5.
          </Text>
          <Text
            style={{
              width: "30%",
              borderRight: "1px solid black",
              padding: "10px",
            }}
          >
            Pengiriman
          </Text>
          <Text style={{ width: "63%", padding: "10px" }}>pengiriman</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReceiptPO;
