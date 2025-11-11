import React from "react";
import NotesView from "./src/views/NotesView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <NotesView />
    </SafeAreaView>
  );
}
