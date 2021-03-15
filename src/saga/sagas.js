import {call, fork, put, takeEvery} from 'redux-saga/effects';
import MoviesService from '../service/movies.service';
import {
  fetchRequestTrending,
  fetchTrendingSuccess,
  fetchPopularSuccess,
  fetchRequestPopular,
} from '../features/movies/moviesSlice';

function* fetchMovies(action) {
  try {
    const movies = yield call(MoviesService.getTrendingMovies);
    yield put(fetchTrendingSuccess(movies));
  } catch (e) {
    console.warn(e);
  }
}
function* fetchPopularMovies(action) {
  try {
    const movies = yield call(MoviesService.getPopularMovies);
    yield put(fetchPopularSuccess(movies));
  } catch (e) {
    console.warn(e);
  }
}

function* requestTrending() {
  yield takeEvery(fetchRequestTrending, fetchMovies);
}

function* requestPopular() {
  yield takeEvery(fetchRequestPopular, fetchPopularMovies);
}

function* moviesSagas() {
  yield fork(requestTrending);
  yield fork(requestPopular);
}
export default moviesSagas;
