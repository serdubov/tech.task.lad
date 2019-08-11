import React, { Component } from 'react'
import styled from 'styled-components'

export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const { userName, userColor, userRun } = this.props
    return (
      <UserWrapper run={userRun} color={ userColor }>
        <UserTitle>{ userName }</UserTitle>
        <UserCircle color={ userColor }/>
        <UserRun run={userRun}>
          Ход игрока
        </UserRun>
      </UserWrapper>
    )
  }
}

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 50px;
  background: #4E4E4E;
  box-shadow: ${props => props.run ? `0px 0px 40px ${props.color}` : null};
  border-radius: 20px;
  transition: all .3s cubic-bezier(0.77, 0, 0.175, 1);
`
const UserTitle = styled.h2`
  font-size: 18px;
  color: #FFFFFF;
  margin: 0;
  padding: 15px 5px;
  text-align: center;
`
const UserCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 15px;
  box-sizing: border-box;
`
const UserRun = styled.div`
  font-size: 16px;
  color: #FFFFFF;
  margin: 0;
  padding: 15px 5px;
  text-align: center;
  box-sizing: border-box;
  opacity: ${props => props.run ? '1' : '0'};
  transition: all .3s cubic-bezier(0.77, 0, 0.175, 1);
`
