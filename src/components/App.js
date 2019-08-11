import React from 'react';
import styled from 'styled-components'
import Main from './Main'

export default function App() {
  return (
    <AppWrapper>
      <Main />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100%;
`