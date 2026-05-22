import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Movie({ id, movieImg, title, summary, genres }) {
	const ListEl = styled.div`
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 24px 32px;
		box-shadow: 4px 4px 24px #ddd;
		background-color: #f8f8f8;
	`;

	const ImgWrap = styled.div`
		position: relative;
		width: 150px;
		top: -34px;
		img {
			width: 100%;
			height: auto;
			border-radius: 4px;
		}
		overflow: hidden;
		@media screen and (max-width: 700px) {
			width: 100px;
			top: 0;
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
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
	`;

	const Summary = styled.p`
		font-size: 16px;
		line-height: 20px;
	`;

	const SubList = styled.ul`
		margin-top: 16px;
		li {
			font-size: 14px;
		}
		li + li {
			margin-top: 8px;
		}
	`;

	return (
		<ListEl>
			<ImgWrap>
				<img src={movieImg} alt={`${title} Cover IMAGE`} />
			</ImgWrap>
			<DetailView>
				<Link to={`movie/${id}`}>
					<Title>{title}</Title>
					<Summary>
						{summary.length > 200 ? `${summary.slice(0, 200)} ...` : summary}
					</Summary>
				</Link>
				{genres == null ? (
					''
				) : (
					<SubList>
						{genres.map((g) => (
							<li key={g}>- {g}</li>
						))}
					</SubList>
				)}
			</DetailView>
		</ListEl>
	);
}

export default Movie;
