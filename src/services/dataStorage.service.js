import { URL_CONSTANTS } from '../constants/url.constants';

export const retrieveCategories = async () => await fetch(URL_CONSTANTS.DATABASE_URL + URL_CONSTANTS.CATEGORIES_TABLE)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => console.log(error));

export const retrieveVideos = async () => await fetch(URL_CONSTANTS.DATABASE_URL + URL_CONSTANTS.VIDEOS_TABLE)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => console.log(error));

export const saveCategories = async (categories) => {
  await fetch(URL_CONSTANTS.DATABASE_URL + URL_CONSTANTS.CATEGORIES_TABLE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categories),
  }).catch((error) => console.log(error));
};

export const saveVideos = async (videos) => {
  await fetch(URL_CONSTANTS.DATABASE_URL + URL_CONSTANTS.VIDEOS_TABLE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(videos),
  }).catch((error) => console.log(error));
};
