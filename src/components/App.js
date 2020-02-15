import React from 'react';
import styled from 'styled-components/native';
import BouncingThumbnail from './BouncingThumbnail';

export default () => (
  <Container>
    <BouncingThumbnail />
  </Container>
);

const Container = styled.View`
  flex: 1;
`;
