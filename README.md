# react-movie-list

React로 만든 영화 목록 포트폴리오 프로젝트입니다.

기존에는 외부 영화 API(YTS)에 의존했지만, 무료 API 도메인/DNS/CORS 이슈로 GitHub Pages에서 화면이 비는 문제가 발생할 수 있어 현재는 정적 샘플 데이터 기반으로 동작합니다. 따라서 배포 환경이나 네트워크 상태와 관계없이 바로보기 화면이 안정적으로 표시됩니다.

## 주요 기능

- 영화 목록 표시
- 장르 필터
- 인기순, 평점순, 최신순, 제목순 정렬
- 영화 상세 페이지
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

## 데이터 수정 위치

영화 목록 데이터는 아래 파일에서 관리합니다.

```txt
src/data/movies.js
```

새 영화를 추가하려면 `LOCAL_MOVIES` 배열에 항목을 추가하면 됩니다.

## 참고

- `npm run deploy`는 현재 빌드 확인용으로만 사용합니다.
- 예전 방식이 꼭 필요하면 `npm run deploy:legacy`를 사용할 수 있지만, GitHub Pages 환경 보호 규칙에서 `gh-pages` 브랜치를 허용해야 합니다.
