import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { I12HoursForecast } from "../../interfaces/weatherInterfaces";

interface IProps {
  weather12Hours: I12HoursForecast[] | undefined;
}

export default function WeatherList({
  weather12Hours,
}: IProps) {

  function choosPicture(IconPhrase:any){
    switch(IconPhrase.toLowerCase()) {
      case 'cloudy':  // if (x === 'value1')
        return 'cloudy'
        break
    
      case 'snow':  // if (x === 'value2')
        return 'snow'
        break
    
      default:
        return 'partly-sunny'
        break
    }
    // const words = IconPhrase.split(' ')
    // for(let i = 0; i<words.length;i++){
    //   if(words[i].toLowerCase() == 'snow' || words[i].toLowerCase() == 'cloudy'){
    //     return words[i].toLowerCase();
    //   }
    // }
    // return false
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.list} horizontal={true} showsHorizontalScrollIndicator={false}>
        {weather12Hours?.map(({ DateTime, Temperature, IconPhrase }: I12HoursForecast, index: number) => {
          console.log(DateTime, Temperature, IconPhrase);

          return (
            <View key={index} style={styles.listItem}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#FFFFFF",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {new Date(DateTime).getHours()}:00

              </Text>
              <Ionicons name={IconPhrase? choosPicture(IconPhrase) : "partly-sunny"} size={50} color="black" />
              <Text
                style={{
                  fontSize: 15,
                  color: "#FFFFFF",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {Math.round(Temperature.Value)}°
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:"95%",
  },
  list: {
    // maxWidth: 150,
    // marginHorizontal:10,
    maxHeight: 120,
    marginLeft: 20,
    marginRight: 20,
  },
  listItem: {
    paddingRight: 15,

  },
  textColor: {
    color: "#FFFFFF",
  },
});
