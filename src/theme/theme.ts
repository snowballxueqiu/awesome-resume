import { createTheme, MantineColorsTuple } from '@mantine/core';

const primary: MantineColorsTuple = [
  '#f0f4ff',
  '#dde4f4',
  '#bbc7e3',
  '#96a8d3',
  '#778dc5',
  '#637cbc',
  '#5874b7',
  '#4763a1',
  '#3d5791',
  '#314981'
];

export const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    primary
  },
  fontFamily: 'var(--font-geist-sans)',
  headings: {
    fontFamily: 'var(--font-geist-sans)'
  }
});