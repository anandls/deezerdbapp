import { axiosClient } from "./axiosinstance";

export function makeRequest(URL, params = null) {
    const makeTypeRequest = params !== null ? URL + "/" + params : URL;

    return axiosClient.get(`${makeTypeRequest}`).then((response) => response);
}
