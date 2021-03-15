import React from 'react';
import {MainContainer} from '../atoms/Container';
import {DetailsContainer} from '../atoms/DetailsContainer';
import {Subtitle} from '../atoms/Subtitle';
import {Title} from '../atoms/Title';
import {MovieImage} from '../molecules/MovieImage';

const PopularMovieCard = ({item}) => {
  return (
    <MainContainer>
      <MovieImage movieId={item.ids.tmdb} />
      <DetailsContainer>
        <DetailsContainer>
          <Title>{item.title}</Title>
          <Subtitle>{item.year}</Subtitle>
        </DetailsContainer>
      </DetailsContainer>
    </MainContainer>
  );
};

export default PopularMovieCard;
