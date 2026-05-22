import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setView(json.data.movie);
    // console.log('d:', json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const Wrapper = styled.div`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
  `;

  const FlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 700px) {
      align-items: flex-start;
      padding: 0 15px;
    }
  `;

  const Title = styled.h1`
    position: relative;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #222;
    margin-bottom: 20px;
    @media screen and (max-width: 700px) {
      font-size: 24px;
    }
  `;

  const ImgWrap = styled.div`
    position: relative;
    width: 200px;
    img {
      width: 100%;
      height: auto;
    }
    @media screen and (max-width: 700px) {
      width: 140px;
    }
  `;

  const DetailView = styled.div`
    width: calc(100% - 220px);
    font-size: 24px;
    line-height: 28px;
    p + p {
      margin-top: 16px;
    }
    @media screen and (max-width: 700px) {
      width: calc(100% - 165px);
      font-size: 18px;
      line-height: 24px;
    }
  `;

  const LinkButton = styled(Link)`
    display: block;
    padding: 0 20px;
    height: 40px;
    line-height: 38px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    margin-top: 100px;
    font-weight: bold;
  `;
  return (
    <div>
      <Helmet>
        <title>Movie Details</title>
      </Helmet>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Wrapper>
          <Title>{view.title_long}</Title>
          <FlexBox>
            <ImgWrap>
              <img src={view.medium_cover_image} alt={view.title} />
            </ImgWrap>
            <DetailView>
              <p>{view.description_full}</p>
              <p>Rating : {view.rating} / 5</p>
              <p>Running Time : {view.runtime}Min</p>
            </DetailView>
          </FlexBox>
          <LinkButton to={process.env.PUBLIC_URL + '/'}>목록보기</LinkButton>
        </Wrapper>
      )}
    </div>
  );
}

export default Detail;
