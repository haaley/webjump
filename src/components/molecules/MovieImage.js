import React, {useCallback, useEffect} from 'react';
import {useState} from 'react/cjs/react.development';
import FanartService from '../../service/fanArt.service';
import ImageCard from '../atoms/ImageCard';
import ImagePlaceholder from '../atoms/ImagPlaceholder';

export function MovieImage(props) {
  const [url, setUrl] = useState();
  const {movieId} = props;

  const requestImage = useCallback(async () => {
    const imageUrl = await FanartService.getMoviePosterImage(movieId);
    setUrl(imageUrl);
  }, [movieId]);

  useEffect(() => {
    requestImage();
  }, [requestImage]);

  return url ? <ImageCard source={{uri: url}} /> : <ImagePlaceholder />;
}
