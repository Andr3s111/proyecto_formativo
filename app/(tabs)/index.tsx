import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// Importación de componentes
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import Categories from "../../components/Categorias"; 
import Featured from "../../components/Featured";
import PromoBanner from "../../components/PromoBanner";
import Recent from "@/components/Recent";


// Importación de tu data
import { FEATURED, RECENT, CATEGORIES } from "../../constants/data";

const BG = "#fffdf9";

export default function Home() {
  const [activeCat, setActiveCat] = useState("1");
  const router = useRouter();

  return (
    <View style={s.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Hero />
        
        <Stats />
        
        <Categories 
          data={CATEGORIES} 
          activeId={activeCat} 
          onSelect={setActiveCat} 
        />
        
        <Featured data={FEATURED} />
        
        <PromoBanner />
        
        <Recent data={RECENT} />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: BG },
});