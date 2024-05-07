import { create } from "zustand";
import axios from "axios";
import { ServiceConfig } from "../types";

const API_BASE_URL = "https://no23.lavina.tech/books";

const useServiceStore = create<ServiceConfig>((set) => ({
  data: [],
  loading: false,
  error: "",
  render: "",
  getBooks: async (signature: string) => {
    set({ loading: true });
    try {
      const res = await axios.get(API_BASE_URL, {
        headers: {
          "Content-Type": "application/json",
          Key: "MyUserKey",
          Sign: signature,
        },
      });
      const getdata = await res?.data;
      set({ data: getdata?.data, error: "" });
    } catch (error) {
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },
  deleteBook: async (id: number, signature: string) => {
    set({ loading: true });
    try {
      const res = await axios.delete(`${API_BASE_URL}/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Key: "MyUserKey",
          Sign: signature,
        },
      });
      const getdata = await res?.data;
      set({ data: getdata?.data, error: "" });
    } catch (error) {
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },
  addBook: async (data, signature) => {
    set({ loading: true });
    try {
      const res = await axios.post(API_BASE_URL, data, {
        headers: {
          "Content-Type": "application/json",
          Key: "MyUserKey",
          Sign: signature,
        },
      });
      const getdata = await res?.data;
      set({ render: getdata?.data, error: "" });
    } catch (error) {
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },
  updateBook: async (signature, data) => {
    set({ loading: true });
    try {
      const res = await axios.put(`${API_BASE_URL}/${data?.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Key: "MyUserKey",
          Sign: signature,
        },
      });
      const getdata = await res?.data;
      set({ render: getdata?.data, error: "" });
    } catch (error) {
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useServiceStore;
