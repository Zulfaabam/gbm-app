import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { KonsulFormData } from "../modals/KonsultasiOnlineModal";

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

interface ReceiptKonsulProps {
  konsul: KonsulFormData;
}

function ReceiptKonsul({ konsul }: ReceiptKonsulProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ marginBottom: "8px" }}>
          <Text style={styles.title}>DATA KONSULTASI GIZI ONLINE</Text>
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
          <Text style={{ width: "63%", padding: "10px" }}>{konsul.name}</Text>
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
            Email
          </Text>
          <View style={{ width: "63%" }}>
            <Text style={{ width: "100%", padding: "10px" }}>
              {konsul.email}
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
            No. WhatsApp
          </Text>
          <View
            style={{
              width: "63%",
            }}
          >
            <Text style={{ width: "100%", padding: "10px" }}>
              {konsul.phoneNumber}
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
            Tanggal & Lama Durasi Konsultasi
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
                {konsul.date}
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={{ padding: "10px", textAlign: "center" }}>
                Lama (sesi)
              </Text>
              <Text
                style={{ padding: "0 10px 10px 10px", textAlign: "center" }}
              >
                {konsul.session}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default ReceiptKonsul;
