import React, { useEffect, useState } from 'react';
import Movie from './../components/Movie';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import axios from 'axios';

const SORT_OPTIONS = [
  { value: 'download_count', label: '인기순' },
  { value: 'rating', label: '평점순' },
  { value: 'year', label: '최신순' },
  { value: 'like_count', label: '좋아요순' },
];

const Page = styled.main`
  min-height: 100vh;
  padding: 36px 20px 56px;
`;

const Header = styled.header`
  max-width: 1120px;
  margin: 0 auto 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d8d8d2;
`;

const Eyebrow = styled.p`
  margin: 0 0 8px;
  color: #6b7280;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;
  color: #111827;
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1.08;
`;

const Description = styled.p`
  max-width: 640px;
  margin: 14px 0 0;
  color: #4b5563;
  font-size: 16px;
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  max-width: 1120px;
  margin: 0 auto 22px;

  @media screen and (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const CountText = styled.p`
  margin: 0;
  color: #4b5563;
  font-size: 14px;
  font-weight: 700;
`;

const SortControl = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4b5563;
  font-size: 14px;
  font-weight: 700;

  select {
    min-width: 132px;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #c9c9c2;
    border-radius: 8px;
    background: #fff;
    color: #111827;
  }
`;

const MovieWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  max-width: 1120px;
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const StateBox = styled.div`
  max-width: 1120px;
  margin: 32px auto 0;
  padding: 24px;
  border: 1px solid #d8d8d2;
  border-radius: 14px;
  background: #fff;
  color: #4b5563;
  text-align: center;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('download_count');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const getMovies = async () => {
      try {
        setLoading(true);
        setError('');

        const res = await axios.get('https://yts.mx/api/v2/list_movies.json', {
          params: {
            sort_by: query,
            limit: 20,
          },
          signal: controller.signal,
        });

        setMovies(res.data?.data?.movies || []);
      } catch (requestError) {
        if (axios.isCancel(requestError)) return;
        setError('영화 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.');
        setMovies([]);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    getMovies();

    return () => controller.abort();
  }, [query]);

  return (
    <Page>
      <Helmet>
        <title>Movie List</title>
      </Helmet>

      <Header>
        <Eyebrow>Movie Archive</Eyebrow>
        <Title>영화 목록</Title>
        <Description>
          인기 영화 정보를 간단하게 확인할 수 있는 React 토이 프로젝트입니다. 과한 장식 없이 영화 카드와 상세 정보에 집중했습니다.
        </Description>
      </Header>

      <Toolbar>
        <CountText>{loading ? '영화 목록을 불러오는 중입니다.' : `${movies.length}개의 영화`}</CountText>
        <SortControl htmlFor="sort-by">
          정렬
          <select id="sort-by" value={query} onChange={(event) => setQuery(event.target.value)}>
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </SortControl>
      </Toolbar>

      {loading && <StateBox>Loading...</StateBox>}
      {!loading && error && <StateBox>{error}</StateBox>}
      {!loading && !error && movies.length === 0 && <StateBox>표시할 영화가 없습니다.</StateBox>}

      {!loading && !error && movies.length > 0 && (
        <MovieWrap>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              movieImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </MovieWrap>
      )}
    </Page>
  );
}

export default Home;
