import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PreOrderFormData } from "../modals/PreOrderModal";
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

interface ReceiptPOProps {
  preOrder: PreOrderFormData;
}

const ReceiptPO = ({ preOrder }: ReceiptPOProps) => {
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
            Nama Pemesan
          </Text>
          <Text style={{ width: "63%", padding: "10px" }}>{preOrder.name}</Text>
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
            Angkatan
          </Text>
          <View style={{ width: "63%" }}>
            <Text style={{ width: "100%", padding: "10px" }}>
              {preOrder.year}
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
              {preOrder.phoneNumber}
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
              {preOrder.items?.map((item, idx) => (
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
              {preOrder.items?.map((item, idx) => (
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
          <Text style={{ width: "63%", padding: "10px" }}>
            {preOrder.delivery.toUpperCase()}
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
            6.
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
            Rp.{" "}
            {preOrder.totalPrice && numberFormatter.format(preOrder.totalPrice)}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReceiptPO;
