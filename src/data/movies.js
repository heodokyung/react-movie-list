export const MOVIE_SORT_OPTIONS = [
  { value: 'popular', label: '인기순' },
  { value: 'rating', label: '평점순' },
  { value: 'year', label: '최신순' },
  { value: 'title', label: '제목순' },
];

export const MOVIE_CATEGORY_OPTIONS = [
  { value: 'all', label: '전체' },
  { value: 'sci-fi', label: 'SF' },
  { value: 'action', label: '액션' },
  { value: 'drama', label: '드라마' },
  { value: 'animation', label: '애니메이션' },
  { value: 'classic', label: '클래식' },
];

export const LOCAL_MOVIES = [
  {
    id: 'inception-2010',
    title: 'Inception',
    title_long: 'Inception (2010)',
    year: 2010,
    rating: 8.8,
    runtime: 148,
    popularity: 98,
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    category: 'sci-fi',
    summary:
      '꿈속에 들어가 생각을 훔치는 전문가가 불가능에 가까운 임무를 맡으며 현실과 꿈의 경계가 흔들리는 이야기입니다.',
    description_full:
      '도미닉 코브는 타인의 꿈속에서 정보를 훔치는 특수한 기술을 가진 인물입니다. 그는 잃어버린 삶을 되찾기 위해 한 사람의 무의식에 새로운 생각을 심어야 하는 위험한 작전에 뛰어듭니다.',
  },
  {
    id: 'interstellar-2014',
    title: 'Interstellar',
    title_long: 'Interstellar (2014)',
    year: 2014,
    rating: 8.7,
    runtime: 169,
    popularity: 96,
    genres: ['Adventure', 'Drama', 'Sci-Fi'],
    category: 'sci-fi',
    summary:
      '인류의 미래를 찾기 위해 우주로 떠난 탐사대와 지구에 남은 가족의 시간이 서로 다르게 흘러가는 SF 드라마입니다.',
    description_full:
      '기후 변화와 식량난으로 지구가 한계에 다다른 미래, 전직 조종사 쿠퍼는 인류가 살아갈 새 행성을 찾기 위해 웜홀 너머의 우주로 향합니다. 거대한 우주 탐사와 가족에 대한 마음이 함께 그려집니다.',
  },
  {
    id: 'parasite-2019',
    title: 'Parasite',
    title_long: 'Parasite (2019)',
    year: 2019,
    rating: 8.5,
    runtime: 132,
    popularity: 94,
    genres: ['Drama', 'Thriller'],
    category: 'drama',
    summary:
      '서로 다른 계층의 두 가족이 얽히며 예측하기 어려운 방향으로 전개되는 블랙 코미디 드라마입니다.',
    description_full:
      '반지하에 사는 기택 가족은 박 사장 가족의 집에 하나둘씩 들어가게 됩니다. 처음에는 기회처럼 보였던 관계가 점차 긴장과 균열로 번지며 사회적 격차와 욕망을 드러냅니다.',
  },
  {
    id: 'mad-max-fury-road-2015',
    title: 'Mad Max: Fury Road',
    title_long: 'Mad Max: Fury Road (2015)',
    year: 2015,
    rating: 8.1,
    runtime: 120,
    popularity: 90,
    genres: ['Action', 'Adventure'],
    category: 'action',
    summary:
      '황폐한 사막 세계에서 자유를 향해 질주하는 인물들의 거칠고 압도적인 추격 액션입니다.',
    description_full:
      '자원이 고갈된 미래의 사막에서 맥스와 퓨리오사는 폭압적인 지배자로부터 벗어나려는 사람들과 함께 생존을 건 질주를 시작합니다. 단순하지만 강렬한 액션 구성이 특징입니다.',
  },
  {
    id: 'the-dark-knight-2008',
    title: 'The Dark Knight',
    title_long: 'The Dark Knight (2008)',
    year: 2008,
    rating: 9.0,
    runtime: 152,
    popularity: 99,
    genres: ['Action', 'Crime', 'Drama'],
    category: 'action',
    summary:
      '배트맨과 조커의 대립을 통해 정의, 혼돈, 선택의 무게를 다룬 슈퍼히어로 범죄 드라마입니다.',
    description_full:
      '고담시를 지키려는 배트맨 앞에 예측 불가능한 범죄자 조커가 나타납니다. 조커는 도시의 질서와 사람들의 신념을 흔들며 배트맨에게 가장 어려운 선택을 강요합니다.',
  },
  {
    id: 'spirited-away-2001',
    title: 'Spirited Away',
    title_long: 'Spirited Away (2001)',
    year: 2001,
    rating: 8.6,
    runtime: 125,
    popularity: 93,
    genres: ['Animation', 'Adventure', 'Family'],
    category: 'animation',
    summary:
      '신비로운 세계에 들어간 소녀가 두려움을 넘어 성장해 가는 애니메이션 판타지입니다.',
    description_full:
      '치히로는 부모님과 함께 낯선 터널을 지나 이상한 세계에 들어갑니다. 그곳에서 이름과 기억을 잃지 않기 위해 일하며, 다양한 존재들과 만나며 조금씩 용기를 배워갑니다.',
  },
  {
    id: 'wall-e-2008',
    title: 'WALL·E',
    title_long: 'WALL·E (2008)',
    year: 2008,
    rating: 8.4,
    runtime: 98,
    popularity: 88,
    genres: ['Animation', 'Adventure', 'Family'],
    category: 'animation',
    summary:
      '쓰레기로 뒤덮인 지구에 남은 로봇이 새로운 만남을 통해 거대한 변화를 만들어 가는 이야기입니다.',
    description_full:
      '오래전 인간이 떠난 지구에서 청소 로봇 월이는 홀로 남아 매일 같은 일을 반복합니다. 어느 날 탐사 로봇 이브를 만나며 월이는 인류와 지구의 미래를 바꿀 여정에 휘말립니다.',
  },
  {
    id: 'the-godfather-1972',
    title: 'The Godfather',
    title_long: 'The Godfather (1972)',
    year: 1972,
    rating: 9.2,
    runtime: 175,
    popularity: 95,
    genres: ['Crime', 'Drama'],
    category: 'classic',
    summary:
      '한 범죄 가문의 권력과 가족, 충성, 선택의 대가를 묵직하게 그려낸 고전 범죄 드라마입니다.',
    description_full:
      '콜레오네 가문은 막강한 영향력을 가진 범죄 조직입니다. 전쟁과 거래, 가족 내부의 변화 속에서 막내 마이클은 원하지 않았던 세계로 점점 깊이 들어가게 됩니다.',
  },
  {
    id: 'pulp-fiction-1994',
    title: 'Pulp Fiction',
    title_long: 'Pulp Fiction (1994)',
    year: 1994,
    rating: 8.9,
    runtime: 154,
    popularity: 91,
    genres: ['Crime', 'Drama'],
    category: 'classic',
    summary:
      '여러 인물의 사건이 비선형적으로 얽히며 독특한 대사와 리듬으로 전개되는 범죄 영화입니다.',
    description_full:
      '킬러, 복서, 갱단 보스와 그의 아내 등 서로 다른 인물들의 이야기가 교차합니다. 시간 순서를 비튼 구성과 개성 강한 대사로 영화적 리듬을 만들어냅니다.',
  },
  {
    id: 'whiplash-2014',
    title: 'Whiplash',
    title_long: 'Whiplash (2014)',
    year: 2014,
    rating: 8.5,
    runtime: 107,
    popularity: 87,
    genres: ['Drama', 'Music'],
    category: 'drama',
    summary:
      '최고의 드러머가 되고 싶은 학생과 냉혹한 지도자의 관계를 강렬하게 그린 음악 드라마입니다.',
    description_full:
      '재즈 드러머를 꿈꾸는 앤드류는 유명 음악학교에서 혹독한 지도자 플레처를 만납니다. 인정받고 싶은 욕망과 한계를 밀어붙이는 압박 속에서 두 사람의 관계는 점점 극단으로 향합니다.',
  },
  {
    id: 'arrival-2016',
    title: 'Arrival',
    title_long: 'Arrival (2016)',
    year: 2016,
    rating: 7.9,
    runtime: 116,
    popularity: 84,
    genres: ['Drama', 'Mystery', 'Sci-Fi'],
    category: 'sci-fi',
    summary:
      '외계 생명체와의 소통을 통해 언어, 시간, 선택의 의미를 탐구하는 차분한 SF 영화입니다.',
    description_full:
      '지구 곳곳에 정체불명의 비행체가 나타나자 언어학자 루이스는 외계 생명체와의 소통 임무를 맡습니다. 언어를 이해할수록 시간과 삶을 바라보는 방식도 달라집니다.',
  },
  {
    id: 'john-wick-2014',
    title: 'John Wick',
    title_long: 'John Wick (2014)',
    year: 2014,
    rating: 7.4,
    runtime: 101,
    popularity: 86,
    genres: ['Action', 'Crime', 'Thriller'],
    category: 'action',
    summary:
      '은퇴한 킬러가 소중한 것을 빼앗긴 뒤 다시 어둠의 세계로 돌아가는 스타일리시 액션입니다.',
    description_full:
      '존 윅은 과거를 뒤로하고 조용히 살고 있었지만, 예상치 못한 사건으로 모든 것이 무너집니다. 그는 자신만의 방식으로 과거의 세계에 다시 발을 들입니다.',
  },
];

export function getMovies({ sort = 'popular', category = 'all' } = {}) {
  const filteredMovies = category === 'all'
    ? LOCAL_MOVIES
    : LOCAL_MOVIES.filter((movie) => movie.category === category);

  return [...filteredMovies].sort((a, b) => {
    if (sort === 'rating') return b.rating - a.rating;
    if (sort === 'year') return b.year - a.year;
    if (sort === 'title') return a.title.localeCompare(b.title);
    return b.popularity - a.popularity;
  });
}

export function getMovieById(id) {
  return LOCAL_MOVIES.find((movie) => movie.id === id) || null;
}
