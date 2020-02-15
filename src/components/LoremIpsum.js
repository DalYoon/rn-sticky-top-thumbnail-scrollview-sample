import React from 'react';
import styled from 'styled-components/native';

export default () => (
  <>
    <Title>Lorem Ipsum</Title>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
    <Content>{LOREM_IPSUM}</Content>
  </>
);

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const Content = styled.Text`
  margin-top: 16px;
  font-size: 15px;
`;

const LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
