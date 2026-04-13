import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

const { AMBER, BORDER, MUTED, ORANGE, TEXT } = require('../constants/theme');

const Hero = () => {
    return (
        <View style={s.hero}>
            <View style={s.heroLeft}>
                <View style={s.heroChip}>
                    <Text style={s.heroChipTxt}>Invierno 2025</Text>
                </View>
                <Text style={s.heroTitle}>El descanso{"\n"}que merecés</Text>
                <Text style={s.heroSub}>Hasta 30% off en toda la colección</Text>
                <TouchableOpacity style={s.heroCta}>
                    <Text style={s.heroCtaTxt}>Ver colección</Text>
                    <Feather name="arrow-right" size={14} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={s.heroRight}>
                <Feather name="moon" size={52} color={ORANGE} style={{ opacity: 0.2 }} />
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    // Hero
    hero: {
        margin: 20, marginBottom: 16,
        backgroundColor: AMBER,
        borderRadius: 20, padding: 22,
        flexDirection: "row", alignItems: "center",
        borderWidth: 1, borderColor: "#f5e0b0",
    },
    heroLeft: { flex: 1 },
    heroRight: { paddingLeft: 10 },
    heroChip: {
        alignSelf: "flex-start",
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingHorizontal: 10, paddingVertical: 4,
        marginBottom: 10,
        borderWidth: 1, borderColor: BORDER,
    },

    heroChipTxt: { fontSize: 11, fontWeight: "700", color: MUTED },
    heroTitle: { fontSize: 24, fontWeight: "900", color: TEXT, lineHeight: 28, marginBottom: 8 },
    heroSub: { fontSize: 13, color: MUTED, marginBottom: 18, lineHeight: 18 },
    heroCta: {
        flexDirection: "row", alignItems: "center", gap: 6,
        alignSelf: "flex-start",
        backgroundColor: ORANGE,
        paddingHorizontal: 16, paddingVertical: 10,
        borderRadius: 10,
    },
    heroCtaTxt: { color: "#fff", fontSize: 13, fontWeight: "700" },
})


export default Hero