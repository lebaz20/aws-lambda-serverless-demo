import AWS from 'aws-sdk';

const client = new AWS.Lambda();

// eslint-disable-next-line import/prefer-default-export
export const hello = (event, context, callback) => {
  console.log('hi user!');
  const functionsListPromise = new Promise((resolve, reject) => {
  	const functionsList = client.listFunctions({}, (error, data) => {
  		if (error) {
  			reject(error); // an error occurred
  		} else {
  			resolve(data); // successful response
  		}
	});
  });
  functionsListPromise
    .then(body => callback(null, body))
    .catch(e => callback(e));
};
