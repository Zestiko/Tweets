
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Suspense, lazy } from 'react';


const HomePage = lazy(() => import('../../pages/HomePage'));
const Tweets = lazy(() => import('../../pages/Tweets'));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
