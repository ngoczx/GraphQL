const movies = [
  { id: '1', name: 'Game of thrones', genre: 'Fantasy', rate: '9.5', chanel: 'HBO' },
  { id: '2', name: 'Shameless', genre: 'Comedy', rate: '8.0', chanel: 'HBO' },
  { id: '3', name: 'Elite', genre: 'School', rate: '7.0', chanel: 'HBO' },
];

const directors = [
  { id: 1, name: 'Michael Bay', age: 50 },
  { id: 2, name: 'John', age: 45 },
  { id: 3, name: 'Tommy', age: 33 },
];

const chanel = [
  {
    id: 1,
    name: 'HBO',
  },
  {
    id: 2,
    name: 'FOX',
  },
  {
    id: 3,
    name: 'MCU',
  },
];

module.exports = {
  directors,
  movies,
  chanel,
};
