import React, { Component } from 'react';
import styled from 'styled-components'
import _ from 'lodash'
import Cell from '../Cell'

export default class PlayingFiled extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  
  render() {
    const { cells, colorColumn } = this.props
    return (
      <PlayingFiledWrapper>
        {
          _.map(cells, (cellColumn, index) => {
            return(
              <PlayingFiledColumn key={index} color={colorColumn} onClick={() => this.props.onhundleCellsState(index)}>
                {
                  _.map(cellColumn, (cell, index) => {
                    return(
                      <Cell key={index} cell={cell}/>
                    )
                  })
                } 
              </PlayingFiledColumn>
            )
          })
        }
      </PlayingFiledWrapper>
    );
  }
}

const PlayingFiledWrapper = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: center;
  padding: 15px;
  border-radius: 20px;
  background: #4E4E4E;
  box-sizing: border-box;
`
const PlayingFiledColumn = styled.div`
  border-radius: 25px;
  transition: all .3s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  &:hover{
    background-color: ${props => props.color + `8c`};
  }
`