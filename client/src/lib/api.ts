import axios from "axios";
import { PUBLIC_BASE_URI } from "$env/static/public";

export const api = axios.create({
    baseURL: PUBLIC_BASE_URI,
    withCredentials: true,
});
