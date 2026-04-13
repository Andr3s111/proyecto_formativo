import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

// Importamos los colores de tu tema
const { ORANGE, TEXT, MUTED, CARD, BORDER, AMBER } = require('../constants/theme').Colors.light;

// 1. Definimos la forma de un producto reciente
interface RecentItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
}

// 2. Definimos las Props
interface RecentProps {
  data: RecentItem[];
}

// 3. Función auxiliar local para la moneda
function fmt(n: number) {
  return "$" + n.toLocaleString("es-CO");
}

const Recent = ({ data }: RecentProps) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      {/* Cabecera de la sección */}
      <View style={s.secRow}>
        <Text style={s.secTitle}>Recién agregados</Text>
        <TouchableOpacity style={s.secLink}>
          <Text style={s.secLinkTxt}>Ver todo</Text>
          <Feather name="chevron-right" size={14} color={ORANGE} />
        </TouchableOpacity>
      </View>

      {/* Lista vertical de productos */}
      <View style={{ gap: 10 }}>
        {data.map((p) => (
          <TouchableOpacity key={p.id} style={s.recentCard} activeOpacity={0.8}>
            <Image
              source={{ uri: p.image }}
              style={s.recentThumb}
              resizeMode="cover"
            />
            <View style={{ flex: 1 }}>
              <Text style={s.recentName}>{p.name}</Text>
              <View style={s.priceRow}>
                <Text style={s.priceSale}>{fmt(p.price)}</Text>
                {p.originalPrice && (
                  <Text style={s.priceOrig}>{fmt(p.originalPrice)}</Text>
                )}
              </View>
            </View>
            <TouchableOpacity style={s.plusBtn}>
              <Feather name="plus" size={18} color={ORANGE} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  // Section Header
  secRow: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    marginBottom: 14,
  },
  secTitle: { fontSize: 17, fontWeight: "800", color: TEXT },
  secLink: { flexDirection: "row", alignItems: "center", gap: 2 },
  secLinkTxt: { fontSize: 13, color: ORANGE, fontWeight: "600" },

  // Recent Cards
  recentCard: {
    flexDirection: "row", alignItems: "center", gap: 13,
    backgroundColor: CARD,
    borderRadius: 14, borderWidth: 1, borderColor: BORDER,
    padding: 10,
  },
  recentThumb: {
    width: 58, height: 58,
    borderRadius: 12,
    backgroundColor: AMBER,
  },
  recentName: { fontSize: 14, fontWeight: "600", color: TEXT, marginBottom: 4 },
  
  // Prices & Buttons
  priceRow: { flexDirection: "row", alignItems: "center", gap: 7, marginTop: 2 },
  priceSale: { fontSize: 14, fontWeight: "800", color: ORANGE },
  priceOrig: { fontSize: 12, color: MUTED, textDecorationLine: "line-through" },
  plusBtn: {
    width: 36, height: 36, borderRadius: 10,
    backgroundColor: AMBER,
    borderWidth: 1, borderColor: "#f5d99a",
    alignItems: "center", justifyContent: "center",
  },
});

export default Recent;