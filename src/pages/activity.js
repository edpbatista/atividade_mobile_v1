import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import moment from 'moment';

export default function App() {
  const [atividades, setAtividades] = useState([]);
  const [nome, setNome] = useState('');
  const [dataLimite, setDataLimite] = useState('');

  const adicionarAtividade = () => {
    if (nome.trim() === '') {
      alert('O campo nome é obrigatório.');
      return;
    }
    if (dataLimite.trim() === '') {
      alert('O campo data é obrigatório.');
      return;
    }

    const dataMoment = moment(dataLimite, 'DD/MM/YYYY', true);
    if (!dataMoment.isValid()) {
      alert('Data inválida. Por favor, digite uma data no formato DD/MM/YYYY.');
      return;
    }

    const novaAtividade = {
      nome: nome,
      dataLimite: dataLimite
    };

    setAtividades([...atividades, novaAtividade]);
    setNome('');
    setDataLimite('');
    alert('Atividade adicionada com sucesso!');
  };

  const removerAtividade = (index) => {
    const novasAtividades = [...atividades];
    novasAtividades.splice(index, 1);
    setAtividades(novasAtividades);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Atividades</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da atividade"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data limite (DD/MM/YYYY)"
        value={dataLimite}
        onChangeText={(text) => setDataLimite(text)}
        keyboardType="numeric"
        maxLength={10}
      />
      <Button title="Adicionar" onPress={adicionarAtividade} />

      <View>
        {atividades.map((atividade, index) => (
          <View key={index} style={styles.atividade}>
            <Text>{atividade.nome} - {atividade.dataLimite}</Text>
            <Button title="Excluir" onPress={() => removerAtividade(index)} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 8,
    marginBottom: 16,
    width: '80%',
  },
  atividade: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    padding: 16,
    marginBottom: 8,
    width: '80%',
  },
});
