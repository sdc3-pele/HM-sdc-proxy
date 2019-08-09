import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 500,
  duration: "60s",
  rps: 500
};

export default function() {
  //let res = http.post("http://127.0.0.1:3000/api/photos/?val=[123,456,789]");
  //let res = http.get("http://127.0.0.1:3000/api/photos/11");
  let res = http.get("http://127.0.0.1:8000/11");

  check(res, {
    "status was 200": (r) => r.status == 200,
  });
  sleep(1);
};
