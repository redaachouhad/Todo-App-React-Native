import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface TodoItemComponentProps {
  todo: string;
  onDeleteTodo: (index: number) => void;
  index: number;
}

const TodoItemComponent: React.FC<TodoItemComponentProps> = ({
  todo,
  onDeleteTodo,
  index,
}) => {
  const onPress = () => {
    onDeleteTodo(index);
  };
  return (
    <View style={styles.todoItemBox}>
      <Text style={styles.todoItem}>{todo}</Text>
      <TouchableOpacity onPress={onPress} style={styles.deleteBtn}>
        <Text style={styles.deleteBtnText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItemBox: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 14,
  },
  todoItem: {
    flex: 1,
    fontSize: 17,
    flexShrink: 1,
    textAlign: 'justify',
  },
  deleteBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  deleteBtnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TodoItemComponent;
