import axios from "axios";
// import { ROOT_URL } from "../utils/setAuthToken";
import { FETCH_RELEASE } from "./types";

const ROOT_URL = "https://api.discogs.com";
const SECRET = "jxrdTYxLPZtiwDXVwHjjapLAwaxSWMUE";
const API_KEY = "zhoMtFDOpwphirLMGTgSnvyjczlewyTsopTapYJE";
const TOKEN = `?key=${API_KEY}&secret=${SECRET}`;

export function fetchRelease(release_id) {
  const url = `${ROOT_URL}/releases/${release_id}`;
  const request = axios.get(url);

  return {
    type: FETCH_RELEASE,
    payload: request
  };
}
