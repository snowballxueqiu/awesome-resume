import githubColors from './github-colors.json';

interface GithubColor {
  color: string;
}

type GithubColors = {
  [key: string]: string | GithubColor;
};

export function getColor(language: string): { bgColor: string; textColor: string } {
  const colorValue = (githubColors as GithubColors)[language];
  const hexColor = 
    typeof colorValue === 'string' ? colorValue : 
    typeof colorValue === 'object' ? colorValue.color : 
    '#cccccc';
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const textColor = brightness > 128 ? '#000000' : '#ffffff';
  
  return {
    bgColor: hexColor,
    textColor
  };
}