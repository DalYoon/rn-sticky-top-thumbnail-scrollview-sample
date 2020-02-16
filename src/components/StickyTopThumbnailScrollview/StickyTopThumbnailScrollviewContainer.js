import React from 'react';
import {Animated} from 'react-native';
import StickyTopThumbnailScrollviewPresenter from './StickyTopThumbnailScrollviewPresenter';

export default () => {
  const animationScale = new Animated.Value(0);
  const animationTranslateY = new Animated.Value(0);
  const thumbnailDefaultSize = 300;

  const thumbnailSize = animationScale.interpolate({
    inputRange: [0, thumbnailDefaultSize],
    outputRange: [thumbnailDefaultSize, thumbnailDefaultSize * 2],
    extrapolate: 'clamp',
  });

  const thumbnailTop = animationTranslateY.interpolate({
    inputRange: [0, thumbnailDefaultSize],
    outputRange: [0, -thumbnailDefaultSize],
    extrapolate: 'clamp',
  });

  const scrollListener = ({nativeEvent}) => {
    const {contentOffset} = nativeEvent;
    const nagativeY = -1 * contentOffset.y;

    animationScale.setValue(nagativeY);
    animationTranslateY.setValue(contentOffset.y);
  };

  return (
    <StickyTopThumbnailScrollviewPresenter
      scrollListener={scrollListener}
      thumbnailDefaultSize={thumbnailDefaultSize}
      thumbnailTop={thumbnailTop}
      thumbnailSize={thumbnailSize}
    />
  );
};
