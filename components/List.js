import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

// import axios from "axios";

const DATA = [
  {
    id: "1",
    title: "Adventure With A Stranger in Paris",
    description:
      "One of my best travel experience stories was when I went on a romantic road trip with a guy, who I only met once for 5 minutes at a party in the South of France...",
    image: "http://192.168.43.134:5001/uploads/s-9tj4od3cHAp6JHVM2aj10i.png",
  },
  {
    id: "2",
    title: "Bersenandung di senja Kuta",
    description:
      "Sang bagaskara sudah beberapa menit lalu berangkat ke peraduannya di ufuk sebelah barat. aku meninggalkan pantai kuta meski pengujung yang menikmati sunset masih belum berkurang, bahkan ...",
    image: "http://192.168.43.134:5001/uploads/tc69CXWu8JNE7L4E7JfXT75v.png",
  },
  {
    id: "3",
    title: "The Langham, Sydney",
    description:
      "After landing at the airport (coming from the sunshine coast) we were a little lost on how to work with the public transport. We soon realised that easily enough the train had a straight-line route to where we were ...",
    image: "http://192.168.43.134:5001/uploads/d4BMo0p1976wXDmk-jvY6xuj.png",
  },
  {
    id: "4",
    title: "Beautiful Travel Friendship",
    description:
      "I’ve been in Playa del Carmen, Mexico for a few weeks now for my divemaster training. I spent every day in the water with customers and my instructor. I loved it! We shared the boat with another ...",
    image: "http://192.168.43.134:5001/uploads/015SpDd0eGQa6_rCdjRIq2Wq.png",
  },
  {
    id: "5",
    title: "My Birthday In A Private Cabin",
    description:
      "A travel story I want to share is from Czechia. Imagine exiting a train in the middle of the rural Czech countryside somewhere 90 minutes east of Prague, dragging your bag down a lonely dirt road—with ...",
    image: "http://192.168.43.134:5001/uploads/z8mNuiHCqV0OqtCKB8ejALMX.png",
  },
  {
    id: "6",
    title: "48 Hours In London",
    description:
      "Let’s start at the very beginning. The Tower of London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on ...",
    image: "http://192.168.43.134:5001/uploads/kASN241EbV7bMGtnYvYgGId2.png",
  },
  {
    id: "7",
    title: "Meetin The President Of Ecuador",
    description:
      "My best travel story is from a time I was in a small city called Salinas on the south coast of Ecuador. I was just hanging with a local friend and surfing every day before I started to head ...",
    image: "http://192.168.43.134:5001/uploads/BxsqxhWCwDt35Bzpti2hrI_j.png",
  },
  {
    id: "8",
    title: "Meetin The President Of Ecuador",
    description:
      "My best travel story is from a time I was in a small city called Salinas on the south coast of Ecuador. I was just hanging with a local friend and surfing every day before I started to head ...",
    image: "http://192.168.43.134:5001/uploads/BxsqxhWCwDt35Bzpti2hrI_j.png",
  },
];

export default function List() {
  // const [data, setData] = useState("");

  // //get data journey
  // const getJourney = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://192.168.43.134:5001/api/v2/journey`
  //     );
  //     setData(response.data.data.journey);
  //     // console.log(response.data.data.journey);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getJourney();
  // }, []);
  // // console.log(data);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Journey List</Text>

      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.card}>
              {console.log(item.image)}
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    marginTop: 50,
  },
  image: {
    left: 15,
    resizeMode: "cover",
    height: 200,
    width: "100%",
    justifyContent: "center",
  },
  button: {
    left: 105,
    width: 210,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E86DE",
    marginBottom: 15,
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    fontWeight: "bold",
  },
  description: {
    marginLeft: 20,
  },
});
