import { Stack } from "expo-router";
import AppHeader from "../../../components/header/AppHeader";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <AppHeader showSearch={true} />,
        contentStyle: { backgroundColor: "#fffdf9" },
        animation: "slide_from_right",
      }}
    >
      {/* ── Única pantalla que existe por ahora ── */}
      <Stack.Screen
        name="index"
        options={{
          header: () => <AppHeader showSearch={true} />,
        }}
      />
    </Stack>
  );
}