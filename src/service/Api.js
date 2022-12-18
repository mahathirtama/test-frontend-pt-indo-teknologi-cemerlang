import axios from 'axios';

class BaseService {
  baseURL = "";

  constructor(subURL = "") {
    this.baseURL = `${process.env.VUE_APP_BASE_URL}${subURL}`;
  }

  async get(search, page) {
    const res = await axios.get(`${process.env.VUE_APP_BASE_URL}`, {
      params: {
        apikey: "271ab1b1",
        s: search,
        page: page
      },
    });
    return res.data;
  }

  async getOne(id) {
    const res = await axios.get(`${process.env.VUE_APP_BASE_URL}`, {
      params: {
        apikey: "271ab1b1",
        i: id,
      },
    });
    return res.data;
  }

  async post(payload = {}) {
    const res = await axios.post(`${this.baseURL}`, payload);
    return res.data;
  }

  async put(id, payload = {}) {
    const res = await axios.put(`${this.baseURL}/${id || ""}`, payload);
    return res.data;
  }

  async delete(id) {
    const res = await axios.delete(`${this.baseURL}/${id}`);
    return res.data;
  }
}

export default BaseService;
