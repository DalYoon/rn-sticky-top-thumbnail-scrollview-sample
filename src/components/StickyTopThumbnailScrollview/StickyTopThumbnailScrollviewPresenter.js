import React from 'react';
import {Animated, StyleSheet, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import LoremIpsum from '../LoremIpsum';

const IMAGE_SOURCE =
  'https://cdn.mos.cms.futurecdn.net/XWRZCcWsDjdG29nQYJuDpb.png';

export default ({
  scrollListener,
  thumbnailTop,
  thumbnailDefaultSize,
  thumbnailSize,
}) => (
  <Container>
    <Thumbnail
      style={{height: thumbnailSize, top: thumbnailTop}}
      source={{uri: IMAGE_SOURCE}}
    />

    <ScrollView
      onScroll={scrollListener}
      scrollEventThrottle={16}
      style={styles.scrollviewContainer}
      contentContainerStyle={[
        {paddingTop: thumbnailDefaultSize},
        styles.contentContainer,
      ]}>
      <LoremIpsum />
    </ScrollView>
  </Container>
);

const styles = StyleSheet.create({
  scrollviewContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
});

const Container = styled.View`
  flex: 1;
`;

const Thumbnail = styled(Animated.Image)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 10;
`;
