import { fork } from 'redux-saga/effects';

import watchMediaSaga from './watcher';

export default function* startForman() {
	yield fork(watchMediaSaga);
}