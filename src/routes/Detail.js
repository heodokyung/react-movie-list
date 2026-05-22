import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 36px 20px 70px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 700px) {
    gap: 15px;
  }
`;

const Title = styled.h1`
  position: relative;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #222;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 24px;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  width: 200px;
  flex: 0 0 auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  @media screen and (max-width: 700px) {
    width: 120px;
  }
`;

const DetailView = styled.div`
  width: calc(100% - 220px);
  color: #333;
  font-size: 22px;
  line-height: 1.35;

  p + p {
    margin-top: 16px;
  }

  @media screen and (max-width: 700px) {
    width: calc(100% - 140px);
    font-size: 16px;
    line-height: 1.45;
  }
`;

const LinkButton = styled(Link)`
  display: block;
  width: fit-content;
  min-width: 120px;
  height: 40px;
  margin-top: 56px;
  padding: 0 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 38px;
  text-align: center;
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

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let ignore = false;

    const getMovie = async () => {
      try {
        setLoading(true);
        setErrorMessage('');

        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);

        if (!response.ok) {
          throw new Error('영화 상세 정보를 불러오지 못했습니다.');
        }

        const json = await response.json();
        const movie = json.data?.movie;

        if (!movie) {
          throw new Error('영화 상세 데이터가 없습니다.');
        }

        if (!ignore) {
          setView(movie);
        }
      } catch (error) {
        if (!ignore) {
          setView(null);
          setErrorMessage(error.message || '영화 상세 정보를 불러오지 못했습니다.');
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    getMovie();

    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <Wrapper>
      <Helmet>
        <title>{view ? view.title_long : 'Movie Details'}</title>
      </Helmet>

      {loading ? (
        <StateBox>Loading...</StateBox>
      ) : errorMessage ? (
        <>
          <StateBox>{errorMessage}</StateBox>
          <LinkButton to="/">목록보기</LinkButton>
        </>
      ) : (
        view && (
          <>
            <Title>{view.title_long}</Title>
            <FlexBox>
              <ImgWrap>
                <img src={view.medium_cover_image} alt={view.title} />
              </ImgWrap>
              <DetailView>
                <p>{view.description_full || view.description_intro || '등록된 줄거리가 없습니다.'}</p>
                <p>Rating : {view.rating || '-'} / 10</p>
                <p>Running Time : {view.runtime ? `${view.runtime}Min` : '-'}</p>
              </DetailView>
            </FlexBox>
            <LinkButton to="/">목록보기</LinkButton>
          </>
        )
      )}
    </Wrapper>
  );
}

export default Detail;
