export const API_MSG_URL = 'http://127.0.0.1:3000/api/messages';

export const getGreeting = () => fetch(API_MSG_URL)
  .then(res => res.json())
  .then(greeting => greeting)
  .catch(() => '');