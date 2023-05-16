export const orderStatus = {
  1: "Baru", //pertama bikin order
  2: "Menunggu konfirmasi", //pas upload bukti bayar
  3: "Dibayar", //dikonfirmasi sama admin
  4: "Diproses", //cod atau lainnya
  5: "Selesai", //selesai
};

export const consultStatus = {
  1: "Baru", //pertama bikin order
  2: "Menunggu konfirmasi", //pas upload bukti bayar
  3: "Dikonfirmasi", //dikonfirmasi sama admin
  4: "Berlangsung", //konsultasi berlangsung
  5: "Selesai", //selesai
};

//buat rentProds sama preorderProds
export const alkesField = {
  desc: "", //string
  iconUrl: "", //string url gambar
  price: 0, //number
  stock: 0, //number ada brp stoknya
};
