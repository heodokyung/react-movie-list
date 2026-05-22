import React, { useMemo, useState } from 'react';
import Movie from './../components/Movie';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { getMovies, MOVIE_CATEGORY_OPTIONS, MOVIE_SORT_OPTIONS } from '../data/movies';

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
  margin-bottom: 42px;

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
    max-width: 620px;
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

const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 700px) {
    align-items: stretch;
    margin-top: 18px;
  }

  @media screen and (max-width: 520px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const SelectBox = styled.label`
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

  @media screen and (max-width: 520px) {
    justify-content: space-between;

    select {
      min-width: 150px;
    }
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

const MetaText = styled.p`
  margin: -22px 0 28px;
  color: #888;
  font-size: 14px;
  text-align: right;

  @media screen and (max-width: 700px) {
    margin: -8px 0 22px;
    text-align: left;
  }
`;

function Home() {
  const [sort, setSort] = useState('popular');
  const [category, setCategory] = useState('all');

  const movies = useMemo(() => getMovies({ sort, category }), [sort, category]);

  return (
    <Page>
      <Helmet>
        <title>Movie List</title>
      </Helmet>

      <TopArea>
        <TitleGroup>
          <h1>Movie List</h1>
          <p>
            외부 API 장애와 네트워크 차단에 영향받지 않도록, 포트폴리오용 영화 샘플 데이터를 안정적으로 보여줍니다.
          </p>
        </TitleGroup>

        <ControlGroup>
          <SelectBox htmlFor="movie-category">
            장르
            <select id="movie-category" value={category} onChange={(event) => setCategory(event.target.value)}>
              {MOVIE_CATEGORY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </SelectBox>

          <SelectBox htmlFor="movie-sort">
            정렬
            <select id="movie-sort" value={sort} onChange={(event) => setSort(event.target.value)}>
              {MOVIE_SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </SelectBox>
        </ControlGroup>
      </TopArea>

      <MetaText>{movies.length}개의 영화가 표시됩니다.</MetaText>

      {movies.length === 0 ? (
        <StateBox>표시할 영화가 없습니다.</StateBox>
      ) : (
        <MovieWrap>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              movieImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
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
