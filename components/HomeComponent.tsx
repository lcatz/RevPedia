import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Article',
    author: 'John Doe',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat nostrum accusantium. Iste facere soluta amet nulla porro ex nemo debitis labore modi, ab, quas voluptatibus. Totam labore, nisi id obcaecati voluptatem quia atque amet ex eligendi dicta commodi facere laboriosam est reiciendis. Error quidem velit iste praesentium quam quo.',
  },
  {
    id: '2',
    title: 'Second Article',
    author: 'Jane Doe',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit quaerat qui corporis provident eos veritatis recusandae minus amet eius quo deleniti animi dignissimos suscipit illum, porro magni aspernatur incidunt dolor aliquid dolorum a eligendi nihil! Unde sapiente amet cumque cupiditate recusandae saepe delectus ab nisi soluta reprehenderit. Magnam, placeat?',
  },
  {
    id: '3',
    title: 'Third Article',
    author: 'Anonymous',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab eum accusamus quia alias nemo id officia voluptate, ex quaerat reiciendis repudiandae. Praesentium, impedit. Eum minus inventore ducimus numquam animi nulla facilis quidem? Esse repellendus possimus minima voluptas doloremque mollitia nam ullam? Nam cupiditate, autem aut fugit culpa tempora! Ea?',
  },
];

const Item = ({ title, author, text }) => (
  <View style={styles.item}>
    <Text style={[styles.title, { fontFamily: 'AlfaSlabOne_400Regular' }]}>
      {title}
    </Text>
    <Text style={{ marginVertical: 9 }}>By {author}</Text>
    <Text style={{ fontStyle: 'italic' }}>By {text}</Text>
  </View>
);

export default function HomeComponent() {
  const renderItem = ({ item }) => (
    <Item title={item.title} author={item.author} text={item.text} />
  );
  return (
    <View>
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 21,
          fontFamily: 'AlfaSlabOne_400Regular',
          margin: 15,
        }}>
        Welcome to RevPedia!
      </Text>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffe6b4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
