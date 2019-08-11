import React, { Component } from 'react';
import styled from 'styled-components'

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  
  render() {
    const { cell } = this.props
    return (
      <CellWrapper>
        <CellCircle color={ cell.cellColor }/>
      </CellWrapper>
    );
  }
}

const CellWrapper = styled.div`
  padding: 15px;
  box-sizing: border-box;
  @media (max-width: 1200px){
    padding: 5px;
  }
`
const CellCircle = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  transition: all .3s cubic-bezier(0.77, 0, 0.175, 1);
  background: ${props => props.color ? props.color : '#171717'};
  @media (max-width: 1200px){
    width: 35px;
    height: 35px;
  }
`