import axios from "axios";

const baseUrl = "https://phonebook-backend-w8y5.onrender.com/api/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const updatePhonebook = (newPerson) => {
  return axios.post(baseUrl, newPerson);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const modifyNumber = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`);
};

const backendServices = {
  getAll,
  updatePhonebook,
  deletePerson,
  modifyNumber,
};

export default backendServices;
