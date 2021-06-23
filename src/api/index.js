// 放置所有请求后端接口的逻辑
// api
// fetch
// axios
import { http } from "../utils/http";
export function apiLogin({ username, password }) {
  // server path
  return http.post("/login", {
    username,
    password,
  });
}

export function apiGetPhotos() {
  // token
  return http.get("/getPhotos");
}

export function apiUpload(file) {
  const formData = new FormData();
  formData.append("img", file);

  return http.post("/upload", formData);
}
