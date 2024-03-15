import { useInfiniteQuery } from '@tanstack/react-query';
const base =  `http://localhost:8080/api`;

const useGetMovies = ({ search = '' }) => {

    const fetchMovies = async ({ pageParam = 1 }) => {
        const url = `${base}/movies/get-paginated?page=${pageParam}&search=${search}`;
        const encodedUrl = encodeURI(url);
        const response = await fetch(encodedUrl);
        const json = await response.json();
        return { ...json, prevOffset: pageParam };
    };

    const res = useInfiniteQuery({
        queryKey: ["movies", search],
        queryFn: fetchMovies,
        staleTime: 5 * 60 * 1000,
        keepPreviousData: true,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset >= lastPage?.meta?.totalPageCount) {
                return undefined;
            } else {
                return lastPage.prevOffset + 1;
            }
        }
    });

    return res;

};

export default useGetMovies;
