import { all } from 'redux-saga/effects';
import { apiReqs } from './apis';

export default function* rootSaga() {
    yield all([
        ...apiReqs
    ])
}
