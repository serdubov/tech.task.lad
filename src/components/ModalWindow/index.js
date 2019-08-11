import React, { Component } from 'react';
import styled from 'styled-components'

export default class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  
  render() {
    const { winner } = this.props
    return (
      <ModalWindowWrapper>
        <ModalWindowBox color={winner.color}>
          <ModalWindowTitle>
            {
              winner.name ? `Победил ${winner.name}` : 'Ничья'
            }
          </ModalWindowTitle>
          <ModalWindowSubTitle>
            {
              winner.name ? 'Поздравляем!' : 'Победила дружба'
            }
          </ModalWindowSubTitle>
          <ModalWindowButton
            onClick={() => this.props.onNemGame()}
          >Новая игра</ModalWindowButton>
        </ModalWindowBox>
      </ModalWindowWrapper>
    );
  }
}

const ModalWindowWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalWindowBox = styled.div`
  background: #171717;
  /* box-shadow: 0px 0px 40px #ff1d1d; */
  box-shadow: ${props => props.color ? `0px 0px 40px ${props.color}` : `#FFFFFF`};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 35px;
`
const ModalWindowTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  padding: 10px 15px;
  margin: 0;
`
const ModalWindowSubTitle = styled.div`
  font-size: 18px;
  color: #FFFFFF;
  padding: 10px 15px;
`
const ModalWindowButton = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  padding: 10px 15px;
  border-radius: 8px;
  background: #4E4E4E;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px 0;
  transition: all .3s cubic-bezier(0.77, 0, 0.175, 1);
  &:hover {
    background: #4E4E4E8c;
  }
`