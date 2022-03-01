import { all } from "redux-saga/effects";
import { logInStart } from "../containers/LoginPage/saga";
import { registerStart } from "../containers/RegisterPage/saga";

import { api as logInApi } from "../api/carsBackend/logInApi";
import { api as registerApi } from "../api/carsBackend/registerApi";
import { api as createCarApi } from "../api/carsBackend/createCarApi";
import { api as getCarsApi } from "../api/carsBackend/getCarsApi";
import { api as editCarApi } from "../api/carsBackend/editCarApi";
import { api as removeCarApi } from "../api/carsBackend/removeCarApi";

export default function* rootSaga() {
  yield all([logInStart(logInApi), registerStart(registerApi)])
}