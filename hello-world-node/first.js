// eslint-disable-next-line import/prefer-default-export
export const hello = (event, context, callback) => {
  console.log('hi user!');
  const p = new Promise((resolve) => {
    resolve('success');
  });
  p
    .then(() => callback(null, 'hello-world'))
    .catch(e => callback(e));
};
