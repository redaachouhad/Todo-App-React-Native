import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({onAddTodo}) => {
  const [text, setText] = useState('');
  const onPress = () => {
    if (text.trim() === '') {
      return;
    }
    onAddTodo(text);
    setText('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Add new todo ..."
      />
      <TouchableOpacity style={styles.addTodoBtn} onPress={onPress}>
        <Text style={styles.textBtn}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    fontSize: 17,
  },
  addTodoBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TodoInput;
