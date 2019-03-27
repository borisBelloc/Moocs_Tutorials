// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
{/* <Text style={styles.title_text}>tex tezxt</Text> */}

class FilmItem extends React.Component {
  render() {
    return (

      <View style={styles.main_container}>
        <View style={styles.gauche}></View>

        <View style={styles.droite}>

          <View style={styles.orange }>
            <Text style={[styles.border_black, styles.orange_t_gauche]}>Titre du film</Text>
            <Text style={[styles.border_black, styles.orange_t_droite]}>Vote</Text>
          </View>

          <View style={styles.red}>
            <Text style={[styles.red_t, styles.border_black]}>Description</Text>
          </View>

          <View style={styles.purpel}>
            <Text style={[styles.purpel_t, styles.border_black]}>Sorti le 00/00/0000</Text>
          </View>


        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  border_black : {
    borderColor: '#000000',
    borderWidth: 1,
  },
  main_container: {
    backgroundColor : "#a2273c",
    flex : 1,
    flexDirection: "row",
    height: 190,
  },
  gauche: {
    backgroundColor : "#5eabdb",
    flex : 1,
  },
  droite: {
    backgroundColor : "#5edbb3",
    flexDirection: "column",
    flex : 2,
    padding : 5,
    alignItems: 'center'
  },
  orange: {
    backgroundColor : "#fcc350",
    flexDirection: "row",
    justifyContent: 'space-between',
    padding : 1,
    margin : 2,
    height: 40,
    width : 220,
  },
  orange_t_gauche: {
    backgroundColor : "#f7dca5",
    flex : 2,
    marginRight : 1,
    padding : 5,
  },
  orange_t_droite: {
    backgroundColor : "#f7dca5",
    width : 50,
    flex : 1,
    marginLeft : 1,
    padding : 5,
  },
  red: {
    backgroundColor : "#ed3d43",
    padding : 1,
    margin : 2,
    height: 80,
    width : 220,
    justifyContent: 'center',
  },
  red_t: {
    backgroundColor : "#f7dca5",
    flex : 2,
    marginRight : 1,
    padding : 5,
    
  },
  purpel: {
    backgroundColor : "#df68f2",
    padding : 1,
    margin : 2,
    height: 30,
    width : 220,
    
  },
})
// Remettre l'export si envie de tester le fichier !
// export default FilmItem