/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TodoInput from './src/components/TodoInput';
import TodoItemComponent from './src/components/TodoItemComponent';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Array<string>>([]);
  const onAddTodo = (todoEle: string) => {
    setTodoList([...todoList, todoEle]);
  };

  const onDeleteTodo = (index: number) => {
    // todoList.splice(index, 1);

    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="dark-content" />
        <Text style={styles.headerText}>Todo App</Text>
        <TodoInput onAddTodo={onAddTodo} />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          bounces={true}>
          {todoList.map((todo, index) => (
            <TodoItemComponent
              key={index}
              index={index}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    gap: 30,
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollView: {
    flex: 1,
    marginBottom: 30,
  },
  scrollViewContent: {
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
});

export default App;
