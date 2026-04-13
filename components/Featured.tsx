import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

// Importamos los colores de tu tema
const { CARD, BORDER, TEXT, MUTED, ORANGE } = require('../constants/theme').Colors.light;

// 1. Definimos la forma de un producto
interface ProductItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  originalPrice: number | null;
  badge?: string;
  image: string;
}

// 2. Definimos las Props
interface FeaturedProps {
  data: ProductItem[];
}

// 3. Funciones auxiliares locales
function fmt(n: number) {
  return "$" + n.toLocaleString("es-CO");
}
function pct(orig: number, sale: number) {
  return "-" + Math.round((1 - sale / orig) * 100) + "%";
}

const Featured = ({ data }: FeaturedProps) => {
  return (
    <View style={{ marginBottom: 32 }}>
      {/* Cabecera de la sección */}
      <View style={s.secRow}>
        <Text style={s.secTitle}>Más vendidos</Text>
        <TouchableOpacity style={s.secLink}>
          <Text style={s.secLinkTxt}>Ver todo</Text>
          <Feather name="chevron-right" size={14} color={ORANGE} />
        </TouchableOpacity>
      </View>

      {/* Lista horizontal de productos */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 14 }}
      >
        {data.map((p) => (
          <TouchableOpacity
            key={p.id}
            style={s.featCard}
            activeOpacity={0.9}
          >
            <View style={s.featImgWrap}>
              <Image
                source={{ uri: p.image }}
                style={s.featImg}
                resizeMode="cover"
              />
              {p.badge && (
                <View style={s.featBadge}>
                  <Text style={s.featBadgeTxt}>{p.badge}</Text>
                </View>
              )}
              {p.originalPrice && (
                <View style={s.featPct}>
                  <Text style={s.featPctTxt}>{pct(p.originalPrice, p.price)}</Text>
                </View>
              )}
              <TouchableOpacity style={s.featFav}>
                <Feather name="heart" size={13} color={MUTED} />
              </TouchableOpacity>
            </View>
            <View style={s.featBody}>
              <Text style={s.featName} numberOfLines={2}>{p.name}</Text>
              <Text style={s.featDesc} numberOfLines={1}>{p.desc}</Text>
              <View style={s.priceRow}>
                <Text style={s.priceSale}>{fmt(p.price)}</Text>
                {p.originalPrice && (
                  <Text style={s.priceOrig}>{fmt(p.originalPrice)}</Text>
                )}
              </View>
              <TouchableOpacity style={s.addBtn}>
                <Feather name="shopping-cart" size={13} color="#fff" />
                <Text style={s.addBtnTxt}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  // Section Header
  secRow: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    paddingHorizontal: 20, marginBottom: 14,
  },
  secTitle: { fontSize: 17, fontWeight: "800", color: TEXT },
  secLink: { flexDirection: "row", alignItems: "center", gap: 2 },
  secLinkTxt: { fontSize: 13, color: ORANGE, fontWeight: "600" },

  // Featured cards
  featCard: {
    width: 186,
    backgroundColor: CARD,
    borderRadius: 18, overflow: "hidden",
    borderWidth: 1, borderColor: BORDER,
  },
  featImgWrap: { height: 160, position: "relative" },
  featImg: { width: "100%", height: "100%" },
  featBadge: {
    position: "absolute", top: 10, left: 10,
    backgroundColor: "rgba(255,255,255,0.92)",
    paddingHorizontal: 8, paddingVertical: 3,
    borderRadius: 8,
  },
  featBadgeTxt: { fontSize: 10, fontWeight: "700", color: TEXT },
  featPct: {
    position: "absolute", top: 10, right: 10,
    backgroundColor: ORANGE,
    paddingHorizontal: 7, paddingVertical: 3,
    borderRadius: 8,
  },
  featPctTxt: { fontSize: 10, fontWeight: "800", color: "#fff" },
  featFav: {
    position: "absolute", bottom: 10, right: 10,
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.9)",
    alignItems: "center", justifyContent: "center",
    borderWidth: 1, borderColor: BORDER,
  },
  featBody: { padding: 13 },
  featName: { fontSize: 13, fontWeight: "700", color: TEXT, lineHeight: 18, marginBottom: 2 },
  featDesc: { fontSize: 11, color: MUTED, marginBottom: 8 },
  
  // Prices & Buttons
  priceRow: { flexDirection: "row", alignItems: "center", gap: 7, marginTop: 2 },
  priceSale: { fontSize: 14, fontWeight: "800", color: ORANGE },
  priceOrig: { fontSize: 12, color: MUTED, textDecorationLine: "line-through" },
  addBtn: {
    flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6,
    marginTop: 4,
    backgroundColor: ORANGE,
    borderRadius: 9, paddingVertical: 9,
  },
  addBtnTxt: { color: "#fff", fontSize: 12, fontWeight: "700" },
});

export default Featured;