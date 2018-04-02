import axios from 'axios';

const instatce = axios.create({
  baseURL: 'https://burger-app-aff3d.firebaseio.com/'
});

export default instatce;