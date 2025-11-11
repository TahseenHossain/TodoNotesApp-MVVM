import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
} from "react-native";
import { useNotesViewModel } from "../viewmodels/NotesViewModel";
import { Note } from "../models/Note";

const NotesView: React.FC = () => {
  const { notes, addNote, deleteNote } = useNotesViewModel();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addNote(input);
    setInput("");
  };

  const renderItem = ({ item }: { item: Note }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#f9f9f9",
        marginVertical: 4,
        borderRadius: 8,
        width: "100%",
      }}
    >
      <Text>{item.text}</Text>
      <Button title='Delete' onPress={() => deleteNote(item.id)} />
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder='Write a note...'
        style={{
          borderWidth: 1,
          borderColor: "#561ed7ff",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
      />
      <Button title='Add Note' onPress={handleAdd} />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default NotesView;
