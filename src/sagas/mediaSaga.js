import { call, put } from 'redux-saga/effects';

import { flickrImages, shutterStockVideos } from '../api/api';
import * as types from '../constants/actionTypes';

export function* searchMediaSaga({ payload }) {
	try {
		const videos = yield call(shutterStockVideos, payload);
		const images = yield call(flickrImages, payload);

		yield	[
			put({ type: types.FLICKR_IMAGES_SUCCESS, videos }),
			put({ type: types.SELECTED_IMAGE, image: images[0] }),
			put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
			put({ type: types.SELECTED_VIDEO, video: videos[0] })
		];
	} catch (error) {
		yield put({ type: types.SEARCH_MEDIA_ERROR, error });
	}
}