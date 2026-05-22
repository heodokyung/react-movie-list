# react-movie-list

React와 YTS 공개 API로 만든 영화 목록 조회 토이 프로젝트입니다. 

## 주요 기능

- 영화 목록 조회
- 인기순, 평점순, 최신순, 좋아요순 정렬
- 영화 상세 정보 조회
- GitHub Pages 하위 경로(`/react-movie-list`) 대응
- 모바일 반응형 카드 UI

## 바로 보기
[`바로가기`](https://heodokyung.github.io/react-movie-list/)

## 실행 방법

```bash
npm ci
npm start
```

## 빌드

```bash
npm run build
```

## 배포 방식

이 프로젝트는 `.github/workflows/deploy.yml`을 통해 GitHub Pages에 배포합니다.

GitHub 저장소 설정에서 아래처럼 맞춰주세요.

1. `Settings` → `Pages`
2. `Build and deployment` → `Source`를 `GitHub Actions`로 선택
3. `Settings` → `Environments` → `github-pages`
4. Deployment branches가 제한되어 있다면 `main` 브랜치를 허용

기존 `gh-pages` 브랜치 직접 배포 방식은 환경 보호 규칙과 충돌할 수 있어 사용하지 않는 것을 권장합니다.

## 참고

- `npm run deploy`는 현재 빌드 확인용으로만 사용합니다.
- 예전 방식이 꼭 필요하면 `npm run deploy:legacy`를 사용할 수 있지만, GitHub Pages 환경 보호 규칙에서 `gh-pages` 브랜치를 허용해야 합니다.
