import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListEl = styled.article`
  display: grid;
  grid-template-columns: 128px minmax(0, 1fr);
  gap: 20px;
  min-height: 220px;
  padding: 18px;
  border: 1px solid #d8d8d2;
  border-radius: 14px;
  background: #fff;
  transition:
    border-color 0.18s ease,
    transform 0.18s ease;

  &:hover {
    border-color: #9ca3af;
    transform: translateY(-2px);
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 92px minmax(0, 1fr);
    gap: 14px;
    padding: 14px;
  }
`;

const ImgWrap = styled.div`
  overflow: hidden;
  align-self: flex-start;
  border-radius: 10px;
  background: #e5e7eb;

  img {
    width: 100%;
    height: auto;
  }
`;

const DetailView = styled.div`
  min-width: 0;
`;

const Title = styled.h2`
  margin: 0;
  color: #111827;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.25;

  @media screen and (max-width: 520px) {
    font-size: 18px;
  }
`;

const Meta = styled.p`
  margin: 8px 0 0;
  color: #6b7280;
  font-size: 14px;
  font-weight: 700;
`;

const Summary = styled.p`
  margin: 14px 0 0;
  color: #4b5563;
  font-size: 15px;
  line-height: 1.55;
`;

const SubList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 4px 8px;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    color: #4b5563;
    font-size: 12px;
    font-weight: 700;
  }
`;

function Movie({ id, movieImg, title, summary = '', genres, year, rating }) {
  const shortSummary = summary.length > 170 ? `${summary.slice(0, 170)}...` : summary;

  return (
    <ListEl>
      <ImgWrap>
        <img src={movieImg} alt={`${title} 포스터`} loading="lazy" />
      </ImgWrap>

      <DetailView>
        <Link to={`/movie/${id}`} aria-label={`${title} 상세 보기`}>
          <Title>{title}</Title>
          <Meta>
            {year || '연도 정보 없음'} · 평점 {rating || '-'}
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
