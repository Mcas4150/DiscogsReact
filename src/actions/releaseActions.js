import axios from "axios";
import { ROOT_URL } from "../utils/setAuthToken";
import { FETCH_RELEASE } from "./types";

export function fetchRelease(release_id) {
  const url = `${ROOT_URL}/releases/${release_id}`;
  const request = axios.get(url);

  return {
    type: FETCH_RELEASE,
    payload: request
  };
}
