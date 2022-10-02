import axios from "axios";

const instance = axios.create({
    baseURL: 'http://universities.hipolabs.com/search?name=',
    timeout: 1000
  });