import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import ButtonNavigate from '../components/button';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { DataContext } from '../components/context/dataContext';

export default function ActivityScreen() {
  const navigation = useNavigation();
  const { todoList, setTodoList } = useContext(DataContext);
  const [todoItem, setTodoItem] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    hideDatePicker();
    setSelectedDate(date);
  };

  const handleAddTodo = () => {
    if (todoItem.length === 0 || selectedDate === '') {
      return;
    }

    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: Math.random().toString(), value: todoItem, date: selectedDate },
    ]);
    setTodoItem('');
    setSelectedDate('');
  };

  const handleRemoveTodo = (todoId) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Atividades</Text>
      <TextInput
        placeholder="Digite uma atividade..."
        value={todoItem}
        onChangeText={setTodoItem}
      />
      <TouchableOpacity onPress={showDatePicker}>
        <Text>Escolher Data</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      <Button onPress={handleAddTodo} title="Adicionar" />
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.value}</Text>
            <Text>{item.date.toString()}</Text>
            <Button
              onPress={() => handleRemoveTodo(item.id)}
              title="Remover"
            />
          </View>
        )}
      />
      <ButtonNavigate navigation={navigation} location="HomeScreen">
        Voltar
      </ButtonNavigate>
    </View>
  );
}
