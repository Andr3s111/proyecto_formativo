import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const { AMBER, BORDER, CARD, MUTED, ORANGE, TEXT } = require('../constants/theme');
import { StyleSheet } from 'react-native'

const Stats = () => {
    return (
        <View style={s.statsRow}>
            {[
                { icon: "truck" as const, label: "Envío gratis", sub: "+$100.000" },
                { icon: "refresh-cw" as const, label: "Devolución", sub: "30 días" },
                { icon: "star" as const, label: "Valoración", sub: "4.9 / 5" },
            ].map((item, i) => (
                <View key={i} style={[s.statItem, i < 2 && s.statBorder]}>
                    <Feather name={item.icon} size={16} color={ORANGE} />
                    <Text style={s.statLabel}>{item.label}</Text>
                    <Text style={s.statSub}>{item.sub}</Text>
                </View>
            ))}
        </View>
    )
}

const s = StyleSheet.create({
    statsRow: {
        flexDirection: "row",
        marginHorizontal: 20, marginBottom: 24,
        backgroundColor: CARD,
        borderRadius: 16, borderWidth: 1, borderColor: BORDER,
        paddingVertical: 14,
    },

    statItem: { flex: 1, alignItems: "center", gap: 4 },
    statBorder: { borderRightWidth: 1, borderRightColor: BORDER },
    statLabel: { fontSize: 11, fontWeight: "700", color: TEXT },
    statSub: { fontSize: 10, color: MUTED },
})

export default Stats
