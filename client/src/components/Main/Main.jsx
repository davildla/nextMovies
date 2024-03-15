import React, { useRef, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { useIntersection } from '@mantine/hooks';
import useGetMovies from '../../hooks/useGetMovies';
import { Grid, Container, CircularProgress } from '@mui/material';
import ExpandingSearchBar from '../ExpandingSearchBar'

function Main() {
    const lastMovieRef = useRef(null);
    const [search, setSearchText] = useState('');
    const { data, status, fetchNextPage, hasNextPage } = useGetMovies({ search });
    const { ref, entry } = useIntersection({ root: lastMovieRef.current, threshold: 1 });

    useEffect(() => {
        if (entry?.isIntersecting && hasNextPage) fetchNextPage();
    }, [entry]);

    const onEnter = (event) => {
        setSearchText(event.target.value);
    };

    if (status === 'pending') return (
        <div className="flex items-center justify-center h-screen overflow-auto bg-[#52d2f2]">
            <CircularProgress color="inherit" />
        </div>
    )

    const movies = data?.pages.flatMap(page => page.data);

    return (
        <div className="flex-grow overflow-auto bg-[#52d2f2] ">
            <div className="text-center font-bold my-5 lg:my-20">
                <h1 className="text-xl lg:text-6xl">
                    EXPLORE YOUR NEXT<br /> MOVIES AND TV SHOWS
                </h1>
            </div>
            <Container>
                <Grid container spacing={1}>
                    {
                        movies.map((movie, index) => (
                            (index === movies.length - 1) ?
                                <MovieCard {...movie} key={index} ref={ref} />
                                : <MovieCard {...movie} key={index} />
                        ))
                    }
                </Grid>
            </Container>
            <ExpandingSearchBar onEnter={onEnter} search={search} />
        </div>
    );
}

export default Main;

