import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const ls = [];
      results.forEach((e) => {
        ls.push({
          status: e.status,
          value: e.status === 'fulfilled' ? e.value : `${e.reason}`,
        });
      });
      return ls;
    });
}
