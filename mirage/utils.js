const IMAGES_IN_CDN = [
  'https://www.fairplanet.org/wp-content/uploads/2019/05/elephant-botswana.1558904658.jpg',
  'https://kentattractions.co.uk/wp-content/uploads/2017/06/ANIMAL-GALLERY_Rothschild-Giraffes_2.jpg',
  'https://images.wallpaperscraft.com/image/zebra_animal_wildlife_186273_3840x2160.jpg',
  'https://mission-blue.org/wp-content/uploads/2018/08/KM-2235.jpg',
  'https://african-parrot.com/wp-content/uploads/2020/05/macaw-scarlet-1.png',
];

const PUBLISHED_DATES = [
  Date.now(),
  Date.now() - 100,
  Date.now() - 10000,
  Date.now() - 1000000,
  Date.now() - 10000000,
  Date.now() - 100000000,
  Date.now() - 1000000000,
  Date.now() - 10000000000,
];

export function getRandomWholeNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomDate() {
  const index = getRandomWholeNumber(0, PUBLISHED_DATES.length - 1);
  return PUBLISHED_DATES[index];
}

export function getImageFromCDN() {
  const index = getRandomWholeNumber(0, IMAGES_IN_CDN.length - 1);
  return IMAGES_IN_CDN[index];
}
