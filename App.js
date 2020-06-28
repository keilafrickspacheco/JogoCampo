import React, { Component } from 'react';
import {StyleSheet, View,Text} from 'react-native';

import params from './src/params'
// import Field from './src/components/Field'
import MineField from './src/components/MineField'
import {createMineBoard} from './src/functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.creatState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols*rows*params.difficultLevel)
  }

  creatState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return{
      board:createMineBoard(rows,cols,this.minesAmount()),
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Inciando o Mines !!!</Text>
        <Text style={styles.instructions}> Tamanho da grade: 
        {params.getRowsAmount()}*{params.getColumnsAmount()} </Text>
      
        {/* <Field/>
        <Field opened/>
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={4}/>
        <Field opened nearMines={5}/>
        <Field opened nearMines={6}/>
        <Field mined/>
        <Field mined opened/>
        <Field mined opened exploded/>
        <Field flagged />
        <Field flagged opened/> */}

        <View style={styles.board}>
          <MineField board={this.state.board}/>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end'
  },
  board: {
    alignItems:'center',
    backgroundColor:'#AAA'
  }
});
