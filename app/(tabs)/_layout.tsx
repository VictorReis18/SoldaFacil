import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="calefatores" options={{ title: "Calefatores" }} />
      <Tabs.Screen
        name="churrasqueiras"
        options={{ title: "Churrasqueiras" }}
      />
      <Tabs.Screen name="fornos" options={{ title: "Fornos" }} />
      <Tabs.Screen name="fogoes" options={{ title: "Fogões" }} />
    </Tabs>
  );
}
