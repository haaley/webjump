import React from 'react';
import {MainContainer} from '../atoms/Container';
import {Title} from '../atoms/Title';
import {MovieImage} from '../molecules/MovieImage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DetailsContainer} from '../atoms/DetailsContainer';
import {ViewersContainer} from '../atoms/ViewersContainer';
import {Subtitle} from '../atoms/Subtitle';

const MovieCard = ({item}) => {
  return (
    <MainContainer>
      <MovieImage movieId={item.movie.ids.tmdb} />
      <DetailsContainer>
        <DetailsContainer>
          <Title>{item.movie.title}</Title>
          <Subtitle>{item.movie.year}</Subtitle>
        </DetailsContainer>
        <ViewersContainer>
          <Icon name="eye" size={30} color="#900" />
          <Title>{item.watchers}</Title>
        </ViewersContainer>
      </DetailsContainer>
    </MainContainer>
  );
};

export default MovieCard;
