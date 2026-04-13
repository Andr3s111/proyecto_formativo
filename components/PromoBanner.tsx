import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

// Importamos los colores de tu tema
const { ORANGE, MUTED, CARD, BORDER, AMBER, TEXT } = require('../constants/theme');

const PromoBanner = () => {
  return (
    <TouchableOpacity style={s.promoBanner} activeOpacity={0.8}>
      <View style={s.promoIcon}>
        <Feather name="truck" size={22} color={ORANGE} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={s.promoTitle}>Envío gratis a toda Colombia</Text>
        <Text style={s.promoSub}>En compras mayores a $100.000 COP</Text>
      </View>
      <Feather name="chevron-right" size={16} color={MUTED} />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  promoBanner: {
    flexDirection: "row", 
    alignItems: "center", 
    gap: 14,
    marginHorizontal: 20, 
    marginBottom: 28,
    backgroundColor: CARD,
    borderRadius: 16, 
    borderWidth: 1, 
    borderColor: BORDER,
    padding: 16,
  },
  promoIcon: {
    width: 44, 
    height: 44, 
    borderRadius: 12,
    backgroundColor: AMBER,
    alignItems: "center", 
    justifyContent: "center",
  },
  promoTitle: { 
    fontSize: 14, 
    fontWeight: "700", 
    color: TEXT, 
    marginBottom: 2 
  },
  promoSub: { 
    fontSize: 12, 
    color: MUTED 
  },
});

export default PromoBanner;