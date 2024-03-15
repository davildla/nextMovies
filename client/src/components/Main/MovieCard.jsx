import React, { forwardRef } from 'react';
import { Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import MovieInfoModal from './MovieInfoModal';

const MovieCard = forwardRef(({ title, image, rating, released, ...rest }, ref) => {
    return (
        <Grid item xs={6} sm={4} md={3} lg={2}>
            <div className="max-w-[185px] rounded overflow-hidden pb-12 flex flex-col" ref={ref}>
                <img
                    title={`${title} (${released})`}
                    className="w-[185px] h-[260px]"
                    src={image}
                    alt={`${title} (${released})`}
                    loading='lazy'
                />
                <div className="h-14 overflow-hidden pt-2">
                    <span title={`${title} (${released})`} className="line-clamp-2">{title} ({released})</span>
                </div>
                <p className="text-gray-700 text-base mb-2 flex items-center pt-2">
                    <StarIcon className="mr-2 text-black" /> {rating || 'Unknown'}
                </p>
                <MovieInfoModal {...{ title, image, rating, released, ...rest }} />
            </div>
        </Grid>
    );
});

export default MovieCard;
