import 'whatwg-fetch';
import firebase from 'firebase';
import config from '../config';

const baseUrl = config.api.url;

//read with auth
async function getOptions(opts ={}) {
  const token = await firebase.auth().currentUser.getToken();

  return {
    method: opts.method || 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'default',
    body: typeof opts.body === 'object' ? JSON.stringify(opts.body) : opts.body
  };
}

//simple read
async function getVisits() {
  try {
    const url = `${baseUrl}/visits`;
    const options = await getOptions();
    const response = await fetch(url, options);
    const visits = await response.json();

    return visits;
  } catch (e) {
    console.log('api: getVisits: error: ', e);
  }
}

//create
async function createVisit(formValues) {
  try {
    const url = `${baseUrl}/visits`;
    const options = await getOptions({ method: 'POST', body: formValues });
    const response = await fetch(url, options);
    const visit = await response.json();

    return visit;
  } catch (e) {
    console.log('api: createVisit: error: ', e);
  }
}

//update
async function updateVisit(badgeNum) {
  try {
    const url = `${baseUrl}/visits/${badgeNum}`;
    console.log('api: updateVisit: url: ', url);
    const options = await getOptions({ method: 'PATCH', body: badgeNum });
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (e) {
    console.log('api: updateVisit: error: ', e);
  }
}

//destroy
async function deleteTask(spaceId, taskId) {
  try {
    const url = `${baseUrl}/spaces/${spaceId}/tasks/${taskId}`;
    const options = await getOptions({ method: 'DELETE', taskId: taskId });
    const response = await fetch(url, options);
    const task = await response.json();

    return task;
  } catch (e) {
    console.log('api: updateTask: error: ', e);
  }
}

const api = {
 //api functions go here to be exported as an api object :)
};

export default api;
