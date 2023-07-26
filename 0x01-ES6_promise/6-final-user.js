import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((results) => {
      const output = [];

      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          output.push({ status: 'fulfilled', value: result.value });
        } else {
          output.push({ status: 'rejected', value: result.reason });
        }
      });

      return output;
    });
}
