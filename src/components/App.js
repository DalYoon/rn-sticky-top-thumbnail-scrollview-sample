import React from 'react';
import styled from 'styled-components/native';
import StickyTopThumbnailScrollview from './StickyTopThumbnailScrollview';

export default () => (
  <Container>
    <StickyTopThumbnailScrollview />
  </Container>
);

const Container = styled.View`
  flex: 1;
`;
