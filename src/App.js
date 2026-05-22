import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

const getBaseName = () => {
  if (!process.env.PUBLIC_URL) return '/';

  try {
    return new URL(process.env.PUBLIC_URL, window.location.origin).pathname.replace(/\/$/, '') || '/';
  } catch {
    return process.env.PUBLIC_URL.replace(/\/$/, '') || '/';
  }
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    min-width: 320px;
    background: #f5f5f2;
    color: #1f2933;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  body,
  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename={getBaseName()}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
