import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PopularMovieCard from '../components/organisms/PopularMovieCard';
import {
  fetchRequestPopular,
  selectPopularMoviesState,
} from '../features/movies/moviesSlice';
const height = Dimensions.get('window').height;

export default function Popular() {
  const dispatch = useDispatch();
  const moviesState = useSelector(selectPopularMoviesState);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchRequestPopular());
    console.log(moviesState);
  }, [dispatch, moviesState]);

  const renderItem = ({item}) => {
    return <PopularMovieCard item={item} />;
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchRequestPopular());
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
      keyExtractor={item => item.ids.trakt}
    />
  );
}
