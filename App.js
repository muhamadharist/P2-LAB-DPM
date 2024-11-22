import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.centerText}>M.Harist Samudra Dililla</Text>

      {/* Kotak dengan FlexBox */}
      <View style={styles.boxContainer}>
        <View style={styles.boxWrapper}>
          <View style={[styles.box, styles.boxLeft]} />
          <Text style={styles.boxText}>NERAKA</Text>
        </View>
        <View style={styles.boxWrapper}>
          <View style={[styles.box, styles.boxRight]} />
          <Text style={styles.boxText}>SURGA</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA", // Warna latar belakang baru
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  centerText: {
    fontSize: 24, // Ukuran font 24
    color: "#007BFF", // Warna biru cerah
    fontWeight: "bold", // Gaya teks tebal
    marginBottom: 30,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.2)", // Efek bayangan teks
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  boxContainer: {
    flexDirection: "row", // Menyusun secara horizontal
    justifyContent: "space-between", // Jarak merata di antara kotak
    width: "80%", // Membatasi lebar container untuk kedua kotak
    alignItems: "center",
  },
  boxWrapper: {
    alignItems: "center", // Rata tengah untuk kotak dan teks
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 15, // Sudut melengkung
    elevation: 5, // Bayangan untuk Android
    shadowColor: "#000", // Bayangan untuk iOS
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  boxLeft: {
    backgroundColor: "#FF0000", // Warna merah salmon yang lembut
  },
  boxRight: {
    backgroundColor: "#008000", // Warna hijau mint yang segar
  },
  boxText: {
    marginTop: 10, // Jarak atas dari kotak
    fontSize: 16, // Ukuran font
    color: "#333", // Warna teks
    textAlign: "center", // Rata tengah
  },
});