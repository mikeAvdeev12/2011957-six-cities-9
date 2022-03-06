import {ReviewsArray} from '../types/reviews';

export const reviews: ReviewsArray = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river of Amsterdam.',
    date: 'Sat Mar 05 2022 14:07:36 GMT+0300 (Moscow Standard Time)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: false,
      name: 'Oliver.conner',
    },
  },
  {
    id: 2,
    user: {
      id: 16,
      isPro: true,
      name: 'Mollie',
      avatarUrl: 'https://9.react.pages.academy/static/avatar/7.jpg',
    },
    rating: 2,
    comment: 'This villa is perfect in every way: the view on mountains and waterfalls',
    date: '2022-02-24T21:48:13.667Z',
  },
];
