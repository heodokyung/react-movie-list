import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { getMovieById } from '../data/movies';

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
    display: block;
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
    text-align: left;
  }
`;

const Poster = styled.div`
  display: grid;
  width: 200px;
  min-height: 300px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f1f1f1;
  color: #555;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
  padding: 18px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    min-height: 180px;
    margin-bottom: 18px;
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
    width: 100%;
    font-size: 16px;
    line-height: 1.45;
  }
`;

const MetaList = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 24px;

  div {
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #fff;
  }

  dt {
    margin-bottom: 6px;
    color: #777;
    font-size: 13px;
    font-weight: 700;
  }

  dd {
    color: #222;
    font-size: 16px;
    font-weight: 700;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
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
  const view = getMovieById(id);

  return (
    <Wrapper>
      <Helmet>
        <title>{view ? view.title_long : 'Movie Details'}</title>
      </Helmet>

      {!view ? (
        <>
          <StateBox>영화 상세 정보를 찾을 수 없습니다.</StateBox>
          <LinkButton to="/">목록보기</LinkButton>
        </>
      ) : (
        <>
          <Title>{view.title_long}</Title>
          <FlexBox>
            <Poster aria-label={`${view.title} 포스터`}>
              {view.medium_cover_image ? <img src={view.medium_cover_image} alt={view.title} /> : view.title}
            </Poster>
            <DetailView>
              <p>{view.description_full || view.summary || '등록된 줄거리가 없습니다.'}</p>
              <MetaList>
                <div>
                  <dt>Rating</dt>
                  <dd>{view.rating ? `${view.rating} / 10` : '-'}</dd>
                </div>
                <div>
                  <dt>Running Time</dt>
                  <dd>{view.runtime ? `${view.runtime}Min` : '-'}</dd>
                </div>
                <div>
                  <dt>Year</dt>
                  <dd>{view.year || '-'}</dd>
                </div>
              </MetaList>
            </DetailView>
          </FlexBox>
          <LinkButton to="/">목록보기</LinkButton>
        </>
      )}
    </Wrapper>
  );
}

export default Detail;
