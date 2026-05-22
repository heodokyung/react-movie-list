import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListEl = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 260px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px 32px;
  box-shadow: 4px 4px 18px rgba(0, 0, 0, 0.07);
  background-color: #f8f8f8;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 8px 22px rgba(0, 0, 0, 0.09);
  }

  @media screen and (max-width: 700px) {
    min-height: auto;
    padding: 18px;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  top: -34px;
  overflow: hidden;
  width: 150px;
  min-height: 220px;
  flex: 0 0 auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #eee;

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  @media screen and (max-width: 700px) {
    top: 0;
    width: 100px;
    min-height: 146px;
  }
`;

const PosterFallback = styled.div`
  display: grid;
  width: 100%;
  min-height: 220px;
  place-items: center;
  padding: 14px;
  color: #555;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;

  @media screen and (max-width: 700px) {
    min-height: 146px;
    font-size: 14px;
  }
`;

const DetailView = styled.div`
  width: calc(100% - 170px);

  a {
    display: block;
  }

  @media screen and (max-width: 700px) {
    width: calc(100% - 120px);
  }
`;

const Title = styled.p`
  margin-bottom: 8px;
  color: #222;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

const Meta = styled.p`
  margin-bottom: 14px;
  color: #777;
  font-size: 14px;
  font-weight: 700;
`;

const Summary = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.45;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

const SubList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;

  li {
    padding: 4px 8px;
    border: 1px solid #ddd;
    border-radius: 999px;
    background: #fff;
    color: #666;
    font-size: 13px;
  }
`;

function Movie({ id, movieImg, title, year, rating, summary = '', genres }) {
  const shortSummary = summary.length > 200 ? `${summary.slice(0, 200)} ...` : summary;

  return (
    <ListEl>
      <ImgWrap>
        {movieImg ? (
          <img src={movieImg} alt={`${title} cover`} loading="lazy" />
        ) : (
          <PosterFallback aria-hidden="true">{title}</PosterFallback>
        )}
      </ImgWrap>

      <DetailView>
        <Link to={`/movie/${id}`} aria-label={`${title} 상세 보기`}>
          <Title>{title}</Title>
          <Meta>
            {year || '-'} · Rating {rating || '-'}
          </Meta>
          {shortSummary && <Summary>{shortSummary}</Summary>}
        </Link>

        {Array.isArray(genres) && genres.length > 0 && (
          <SubList aria-label={`${title} 장르`}>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </SubList>
        )}
      </DetailView>
    </ListEl>
  );
}

export default Movie;
