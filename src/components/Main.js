import React, { Component } from 'react'
import styled from 'styled-components'
import User from './User'
import PlayingFiled from './PlayingField'
import ModalWindow from './ModalWindow'
import Logo from '../assets/icon/lad.svg'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: 0,
          name: 'Игрок 1',
          color: '#ff1d1d',
          run: true
        },
        {
          id: 1,
          name: 'Игрок 2',
          color: '#1d77ff',
          run: false
        }
      ],
      gameСells: [
        [ { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null } ],
        [ { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null } ],
        [ { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null } ],
        [ { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null } ],
        [ { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null } ],
        [ { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null } ],
        [ { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null }, { cellState: false, cellColor: '', player: null } ]
      ],
      colorColumn: '',
      winner: {
        modal: false,
        name: '',
        color: ''
      }
    }
    this.hundleUserRun = this.hundleUserRun.bind(this)
    this.hundleCellsState = this.hundleCellsState.bind(this)
    this.nemGame = this.nemGame.bind(this)
  }

  componentDidMount() {
    if(this.state.users[0].run){
      this.setState({ colorColumn: this.state.users[0].color })
    } else {
      this.setState({ colorColumn: this.state.users[1].color })
    }
  }

  nemGame() {
    const stateCopy = Object.assign({}, this.state)
    stateCopy.gameСells.forEach(function(arr) {
      arr.forEach(function(el) {
        el.cellState = false
        el.cellColor = ''
        el.player = null
      })
    })
    stateCopy.winner.modal = false
    stateCopy.winner.name = ''
    stateCopy.winner.color = ''
    this.setState(stateCopy)
  }

  deadHeat() {
    const { gameСells, winner } = this.state
    let deadHeatBool = true
    gameСells.forEach(arr => {
      arr.forEach(el => {
        if(el.player === null){
          deadHeatBool = false
          return deadHeatBool
        }
      })
    })
    if (deadHeatBool && !winner.modal) {
      winner.modal = true
      this.setState({ winner })
    }
    return deadHeatBool
  }

  componentDidUpdate() {
    const { users, gameСells, winner } = this.state
    if (!this.deadHeat() && !winner.modal) {
      gameСells.forEach(arr => {
        for(let i = 0; i < 3; i++) {
          if(arr[i].player !== null && arr[i].player === arr[i+1].player && arr[i].player === arr[i+2].player && arr[i].player === arr[i+3].player) {
            winner.modal = true
            winner.name = users[arr[i].player].name
            winner.color = users[arr[i].player].color
            this.setState({ winner })
          }
        }
      })
      for(let i = 0; i < 4; i++){
        for(let j = 0; j < gameСells[i].length; j++){
          if(gameСells[i][j].player !== null && gameСells[i][j].player === gameСells[i+1][j].player && gameСells[i][j].player === gameСells[i+2][j].player  && gameСells[i][j].player === gameСells[i+3][j].player) {
            winner.modal = true
            winner.name = users[gameСells[i][j].player].name
            winner.color = users[gameСells[i][j].player].color
            this.setState({ winner })
          }
        }
      }
    }
  }

  hundleUserRun() {
    const stateCopy = Object.assign({}, this.state)
    stateCopy.users.forEach(function(el) {
      el.run = !el.run
      if(el.run) {
        stateCopy.colorColumn = el.color
      }
    })

    this.setState(stateCopy)
  }

  hundleCellsState(index) {
    const stateCopy = Object.assign({}, this.state)
    const cells = stateCopy.gameСells[index]
    const colorCells = stateCopy.users[0].run ? stateCopy.users[0].color : stateCopy.users[1].color
    const playerId = stateCopy.users[0].run ? stateCopy.users[0].id : stateCopy.users[1].id
    for(let i = cells.length - 1; i >= 0; i--) {
      if (!cells[i].cellState){
        cells[i].cellState = true
        cells[i].cellColor = colorCells
        cells[i].player = playerId
        stateCopy.gameСells[index] = cells
        this.setState(stateCopy)
        this.hundleUserRun()
        break
      }
    }
  }
  
  render() {
    const { users, gameСells, colorColumn, winner } = this.state
    return (
      <MainWrapper>
        <MainWrapperBlur blur={winner.modal}>
          <MainTitle>Игра 4 в ряд</MainTitle>
          <MainScreen>
            <MainScreenUser>
              <User
                userName={users[0].name}
                userColor={users[0].color}
                userRun={users[0].run}
              />
            </MainScreenUser>
            <MainScreenGame>
              <PlayingFiled cells={gameСells} colorColumn={colorColumn} onhundleCellsState={this.hundleCellsState}/>
            </MainScreenGame>
            <MainScreenUser>
              <User
                userName={users[1].name}
                userColor={users[1].color}
                userRun={users[1].run}
              />
            </MainScreenUser>
          </MainScreen>
        </MainWrapperBlur>
        {
          winner.modal ? (
            <ModalWindow winner={winner} onNemGame={this.nemGame}/>
          ) : null
        }
      </MainWrapper>
    )
  }
}

const MainDescription = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
`
const MainDescriptionTitle = styled.div`
  font-size: 16px;
  color: #FFFFFF;
  padding: 10px;
  margin: 0 5px 0 0;
`
const MainDescriptionLogo = styled.img`
  width: 60px;
`
const MainWrapper = styled.div`
  width: 100%;
  background-color: #171717;
`
const MainWrapperBlur = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: #171717;
  filter: ${props => props.blur ? 'blur(10px)' : null};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MainTitle = styled.h1`
  font-size: calc(20px + 2vmin);
  color: #FFFFFF;
  margin: 0;
  padding: 25px 30px;
  text-align: center;
`
const MainScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const MainScreenUser = styled.div`
  flex: 1 1 auto;
  margin: 15px;
  display: flex;
  justify-content: center;
`
const MainScreenGame = styled.div`
  flex: 0 1 auto;
  margin: 15px;
  display: flex;
  justify-content: center;
`
