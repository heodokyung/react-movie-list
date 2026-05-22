import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Page = styled.main`
  min-height: 100vh;
  padding: 36px 20px 56px;
  background: #f5f5f2;
`;

const Wrapper = styled.article`
  max-width: 960px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  margin-bottom: 22px;
  padding: 0 14px;
  border: 1px solid #c9c9c2;
  border-radius: 8px;
  background: #fff;
  color: #374151;
  font-size: 14px;
  font-weight: 800;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 32px;
  padding: 24px;
  border: 1px solid #d8d8d2;
  border-radius: 16px;
  background: #fff;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Poster = styled.div`
  overflow: hidden;
  border-radius: 12px;
  background: #e5e7eb;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 760px) {
    max-width: 260px;
  }
`;

const DetailView = styled.div`
  min-width: 0;
`;

const Title = styled.h1`
  margin: 0;
  color: #111827;
  font-size: clamp(30px, 5vw, 48px);
  font-weight: 850;
  letter-spacing: -0.05em;
  line-height: 1.12;
`;

const MetaList = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin: 20px 0;

  div {
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #fafafa;
  }

  dt {
    color: #6b7280;
    font-size: 12px;
    font-weight: 800;
  }

  dd {
    margin: 4px 0 0;
    color: #111827;
    font-size: 15px;
    font-weight: 800;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Description = styled.p`
  margin: 0;
  color: #374151;
  font-size: 16px;
  line-height: 1.75;
`;

const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 5px 10px;
    border: 1px solid #d1d5db;
    border-radius: 999px;
    color: #374151;
    font-size: 13px;
    font-weight: 800;
  }
`;

const StateBox = styled.div`
  max-width: 960px;
  margin: 32px auto 0;
  padding: 24px;
  border: 1px solid #d8d8d2;
  border-radius: 14px;
  background: #fff;
  color: #4b5563;
  text-align: center;
`;

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const getMovie = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`);

        if (!response.ok) {
          throw new Error('영화 상세 정보를 불러오지 못했습니다.');
        }

        const json = await response.json();
        const nextMovie = json.data?.movie;

        if (!nextMovie) {
          throw new Error('영화 상세 데이터가 없습니다.');
        }

        if (!cancelled) {
          setMovie(nextMovie);
        }
      } catch (requestError) {
        if (!cancelled) {
          setError(requestError.message || '영화 정보를 불러오는 중 문제가 발생했습니다.');
          setMovie(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    getMovie();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <Page>
      <Helmet>
        <title>{movie ? `${movie.title} | Movie Details` : 'Movie Details'}</title>
      </Helmet>

      <Wrapper>
        <BackLink to="/">← 목록으로</BackLink>

        {loading && <StateBox>Loading...</StateBox>}
        {!loading && error && <StateBox>{error}</StateBox>}

        {!loading && !error && movie && (
          <Card>
            <Poster>
              <img src={movie.large_cover_image || movie.medium_cover_image} alt={`${movie.title} 포스터`} />
            </Poster>

            <DetailView>
              <Title>{movie.title_long || movie.title}</Title>

              <MetaList>
                <div>
                  <dt>Rating</dt>
                  <dd>{movie.rating ? `${movie.rating} / 10` : '-'}</dd>
                </div>
                <div>
                  <dt>Runtime</dt>
                  <dd>{movie.runtime ? `${movie.runtime}분` : '-'}</dd>
                </div>
                <div>
                  <dt>Year</dt>
                  <dd>{movie.year || '-'}</dd>
                </div>
              </MetaList>

              <Description>
                {movie.description_full || movie.description_intro || '등록된 줄거리가 없습니다.'}
              </Description>

              {Array.isArray(movie.genres) && movie.genres.length > 0 && (
                <Genres aria-label="장르">
                  {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </Genres>
              )}
            </DetailView>
          </Card>
        )}
      </Wrapper>
    </Page>
  );
}

export default Detail;
