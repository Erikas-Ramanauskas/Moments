import axios from "axios";

axios.defaults.baseURL = "https://django-rest-testing-904eb712a024.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
