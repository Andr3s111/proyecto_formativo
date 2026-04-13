import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BG = "#fffdf9";
const CARD = "#ffffff";
const BORDER = "#ede8e0";
const TEXT = "#2d2520";
const MUTED = "#c0b4a4";
const ORANGE = "#f5a742";

export default function Explore() {
    const router = useRouter();
    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            inputRef.current?.focus();
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={s.root}>
            {/* Barra superior */}
            <View style={s.header}>
                <TouchableOpacity
                    style={s.backBtn}
                    onPress={() => router.back()}
                    activeOpacity={0.7}
                >
                    <Feather name="arrow-left" size={20} color={TEXT} />
                </TouchableOpacity>

                <View style={s.searchWrap}>
                    <Feather name="search" size={15} color={MUTED} style={{ marginRight: 10 }} />
                    <TextInput
                        ref={inputRef}
                        placeholder="Buscar edredones, cobijas..."
                        placeholderTextColor={MUTED}
                        style={s.searchInput}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                </View>
            </View>

            {/* Contenido futuro */}
            <View style={s.center}>
                <Feather name="search" size={32} color={ORANGE} />
                <Text style={s.title}>¿Qué estás buscando?</Text>
                <Text style={s.sub}>Escribí el nombre de un producto</Text>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    root: { flex: 1, backgroundColor: BG },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingHorizontal: 20,
        paddingTop: 52,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: BORDER,
        backgroundColor: BG,
    },
    backBtn: {
        width: 40, height: 40,
        borderRadius: 12,
        backgroundColor: CARD,
        borderWidth: 1, borderColor: BORDER,
        alignItems: "center", justifyContent: "center",
    },
    searchWrap: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: CARD,
        borderWidth: 1, borderColor: BORDER,
        borderRadius: 12,
        paddingHorizontal: 14, paddingVertical: 11,
    },
    searchInput: { flex: 1, fontSize: 14, color: TEXT },
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    title: { fontSize: 18, fontWeight: "800", color: TEXT },
    sub: { fontSize: 13, color: MUTED, textAlign: "center", paddingHorizontal: 40 },
});