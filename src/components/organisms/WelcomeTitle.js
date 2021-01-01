import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const roll = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0,-55%,0);
    visibility: visible;
  }
  1% {
    opacity: 1;
	  transform: translate3d(0,0%,0);
  }
  12% {
    opacity: 1;
    transform: translate3d(0,0%,0);
    visibility: visible;
  }
  13% {
    opacity: 0;
    transform: translate3d(0,55%,0);
    visibility: hidden;
  }
  100% {
    opacity: 0;
    visibility: visible;
  }
`;

const words = [
  'Startup🚀',
  'Studio🎨',
  'Restaurant🍽️',
  'Barbershop💈',
  'Store🏪',
  // 'Kapsalon💇',
  // 'Eetcafé☕',
  'Cafe☕',
  'Business💼',
];

const delay = 2;

const Word = styled.span`
  position: absolute;
  opacity: 0;
  left: 0;
  white-space: nowrap;
  bottom: 0;
  overflow: hidden;
  animation: ${(props) =>
    css`
      ${roll} ${props.length * delay}s linear infinite 0s
    `};
`;

const WordContainer = styled.span`
  position: relative;
`;

const Roller = (props) => {
  return (
    <WordContainer>
      {words.map((word, index, arr) => (
        <Word
          key={word}
          length={arr.length}
          style={{ animationDelay: `${index * delay}s` }}
        >
          {word}
        </Word>
      ))}
    </WordContainer>
  );
};

const Center = styled.div`
  text-align: center;
  height: ${(props) => props.fullHeight && 'calc(100vh - 5rem)'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hello = styled.h2`
  justify-content: center;
  font-size: 2.5em;
  margin-left: -3.5em;
  line-height: 3em;
  display: flex;
`;
const WelcomeTitle = (props) => {
  return (
    <Center fullHeight={props.fullHeight}>
      <Hello>
        We design things for your&nbsp;
        <Roller />
      </Hello>
    </Center>
  );
};

export { WelcomeTitle };
