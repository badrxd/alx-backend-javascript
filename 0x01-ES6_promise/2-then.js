export default async function handleResponseFromAPI(promise) {
  await promise
    .then(() => ({ status: 200, body: 'Success' }))
    .catch(() => Error(''))
    .finally(() => { console.log('Got a response from the API'); });
}
