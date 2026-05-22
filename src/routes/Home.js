import React, { useEffect, useState } from 'react';
import Movie from './../components/Movie';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import axios from 'axios';

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState('download_count');

	// 초기 데이터 셋팅
	useEffect(() => {
		axios({
			method: 'GET',
			url: `https://yts.mx/api/v2/list_movies.json?sort_by=${query}`,
		})
			.then((res) => {
				console.log(res);
				setMovies(res.data.data.movies);
			})
			.catch((error) => {
				console.log(error);
			});
		setLoading(false);
	}, [query]);

	// console.log(movies);

	const MovieWrap = styled.div`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 20px;
		row-gap: 50px;
		max-width: 1200px;
		margin: 0 auto;
		padding: 50px 0;

		@media screen and (max-width: 700px) {
			grid-template-columns: 1fr;
			width: 100%;
		}
	`;

	return (
		<div>
			<Helmet>
				<title>Movie List</title>
			</Helmet>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<MovieWrap>
						{movies.map((movies) => (
							<Movie
								key={movies.id}
								id={movies.id}
								movieImg={movies.medium_cover_image}
								title={movies.title}
								summary={movies.summary}
								genres={movies.genres}
							/>
						))}
					</MovieWrap>
				</div>
			)}
		</div>
	);
}

export default Home;
