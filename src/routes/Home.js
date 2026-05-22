import React, { useEffect, useState } from 'react';
import Movie from './../components/Movie';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import axios from 'axios';

const SORT_OPTIONS = [
  { value: 'download_count', label: '다운로드순' },
  { value: 'rating', label: '평점순' },
  { value: 'year', label: '최신순' },
  { value: 'like_count', label: '좋아요순' },
];

const Page = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 46px 20px 70px;

  @media screen and (max-width: 700px) {
    padding: 28px 15px 50px;
  }
`;

const TopArea = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 48px;

  @media screen and (max-width: 700px) {
    display: block;
    margin-bottom: 26px;
  }
`;

const TitleGroup = styled.div`
  h1 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  p {
    margin-top: 8px;
    color: #777;
    font-size: 16px;
    line-height: 1.45;
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 28px;
    }
  }
`;

const SortBox = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #555;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;

  select {
    height: 38px;
    padding: 0 32px 0 12px;
    border: 1px solid #d7d7d7;
    border-radius: 6px;
    background: #fff;
    color: #222;
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    margin-top: 18px;
  }
`;

const MovieWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;

const StateBox = styled.div`
  padding: 46px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  color: #666;
  font-size: 18px;
  text-align: center;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('download_count');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let ignore = false;

    const getMovies = async () => {
      try {
        setLoading(true);
        setErrorMessage('');

        const response = await axios.get('https://yts.mx/api/v2/list_movies.json', {
          params: {
            sort_by: query,
            limit: 20,
          },
        });

        const nextMovies = response.data?.data?.movies || [];

        if (!ignore) {
          setMovies(nextMovies);
        }
      } catch (error) {
        if (!ignore) {
          setMovies([]);
          setErrorMessage('영화 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.');
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    getMovies();

    return () => {
      ignore = true;
    };
  }, [query]);

  return (
    <Page>
      <Helmet>
        <title>Movie List</title>
      </Helmet>

      <TopArea>
        <TitleGroup>
          <h1>Movie List</h1>
          <p>YTS 영화 정보를 기준으로 인기 영화 목록을 보여줍니다.</p>
        </TitleGroup>

        <SortBox htmlFor="movie-sort">
          정렬
          <select id="movie-sort" value={query} onChange={(event) => setQuery(event.target.value)}>
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </SortBox>
      </TopArea>

      {loading ? (
        <StateBox>Loading...</StateBox>
      ) : errorMessage ? (
        <StateBox>{errorMessage}</StateBox>
      ) : movies.length === 0 ? (
        <StateBox>표시할 영화가 없습니다.</StateBox>
      ) : (
        <MovieWrap>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              movieImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </MovieWrap>
      )}
    </Page>
  );
}

export default Home;
