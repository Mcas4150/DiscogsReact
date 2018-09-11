import axios from "axios";
// import { ROOT_URL, TOKEN } from "../utils/setAuthToken";
// import { ROOT_URL, API_KEY } from "../utils/setAuthToken";
import {
  FETCH_COLLECTION_NEXT_PAGE,
  FETCH_USER_COLLECTION,
  UPDATE_COVER_SIZE
} from "./types";

const ROOT_URL = "https://api.discogs.com";
const SECRET = "jxrdTYxLPZtiwDXVwHjjapLAwaxSWMUE";
const API_KEY = "zhoMtFDOpwphirLMGTgSnvyjczlewyTsopTapYJE";
const TOKEN = `?key=${API_KEY}&secret=${SECRET}`;

export function fetchUserCollection(username, items = 50) {
  const url = `${ROOT_URL}/users/${username}/collection/folders/0/releases?token=${API_KEY}&per_page=${items}`;
  const request = axios.get(url);

  return {
    type: FETCH_USER_COLLECTION,
    payload: request
  };
}

export function fetchCollectionNextPage(url) {
  const request = axios.get(url);

  return {
    type: FETCH_COLLECTION_NEXT_PAGE,
    payload: request
  };
}

export function updateCoverSize(size) {
  return {
    type: UPDATE_COVER_SIZE,
    size: size
  };
}
