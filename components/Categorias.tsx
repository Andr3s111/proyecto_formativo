import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

// Asegúrate de importar "CARD" también desde tu tema
const { AMBER, BORDER, MUTED, CARD } = require('../constants/theme').Colors.light; 

interface CategoryItem {
  id: string;
  label: string;
}

interface CategoriesProps {
  data: CategoryItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

const Categories = ({ data, activeId, onSelect }: CategoriesProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={s.catScroll}
      style={{ marginBottom: 28 }}
    >
      {data.map((cat) => {
        const isActive = activeId === cat.id;

        return (
          <TouchableOpacity
            key={cat.id}
            onPress={() => onSelect(cat.id)}
            style={[s.chip, isActive && s.chipActive]}
          >
            <Text style={[s.chipTxt, isActive && s.chipTxtActive]}>
              {cat.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const s = StyleSheet.create({
  catScroll: { paddingHorizontal: 20, gap: 8 },
  chip: {
    paddingHorizontal: 16, 
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: CARD,
    borderWidth: 1, 
    borderColor: BORDER,
  },
  chipActive: { 
    backgroundColor: AMBER, 
    borderColor: "#f5d99a" 
  },
  chipTxt: { 
    fontSize: 13, 
    fontWeight: "600", 
    color: MUTED 
  },
  chipTxtActive: { 
    color: "#9a5c00", 
    fontWeight: "700" 
  },
});

export default Categories;