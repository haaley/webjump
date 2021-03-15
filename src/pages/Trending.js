import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MovieCard from '../components/organisms/MovieCard';
import {
  fetchRequestTrending,
  selectTrendingMoviesState,
} from '../features/movies/moviesSlice';
const height = Dimensions.get('window').height;

export default function Trending() {
  const dispatch = useDispatch();
  const moviesState = useSelector(selectTrendingMoviesState);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchRequestTrending());
  }, [dispatch]);

  const renderItem = ({item}) => {
    return <MovieCard item={item} />;
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchRequestTrending());
    setRefreshing(false);
  }, [dispatch]);

  return (
    <FlatList
      style={{height: height}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListEmptyComponent={<ActivityIndicator />}
      data={moviesState}
      renderItem={renderItem}
      keyExtractor={item => item.movie.ids.trakt}
    />
  );
}
