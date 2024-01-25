// import './App.scss';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Home from '../Home/Home';
import HeaderDesktop from '../HeaderDesktop/HeaderDesktop';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import FooterMobile from '../FooterMobile/FooterMobile';
import FooterDesktop from '../FooterDesktop/FooterDesktop';
import Search from '../Search/Search';
import Epoque from '../Epoque/Epoque';
import Detail from '../Detail/Detail';
import Loading from '../Loading/Loading';

function App() {
  const dispatch = useDispatch();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const dinoData = useSelector((state) => state.dino.dinoData);
  const epoqueData = useSelector((state) => state.dino.epoqueData);
  const oneDinoData = useSelector((state) => state.dino.oneDinoData);
  const searchValue = useSelector((state) => state.dino.searchValue);
  const epoqueValue = useSelector((state) => state.dino.epoqueValue);
  const dinoSelect = useSelector((state) => state.dino.dinoSelect);
  const loading = useSelector((state) => state.dino.loading);

  useEffect(() => {
    const action = { type: 'GET_DINO_FROM_API' };
    dispatch(action);
  }, [dispatch, searchValue, epoqueValue, dinoSelect]);

  // console.log('dataEpoque', epoqueData);
  // console.log(isDesktopOrLaptop);
  // console.log(dinoSelect);
  // console.log(oneDinoData);
  // console.log('searchValue', searchValue);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {isDesktopOrLaptop && <HeaderDesktop />}
      {!isDesktopOrLaptop && <HeaderMobile />}

      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search dinos={dinoData} />} />
          <Route
            path="/epoque"
            element={
              <Epoque
                dinos={epoqueData}
                isDesktopOrLaptop={isDesktopOrLaptop}
              />
            }
          />
          <Route
            path="/detail/:slug"
            element={
              <Detail
                dino={oneDinoData}
                isDesktopOrLaptop={isDesktopOrLaptop}
              />
            }
          />
        </Routes>
      </div>

      {!isDesktopOrLaptop && <FooterMobile />}
      {isDesktopOrLaptop && <FooterDesktop />}
    </>
  );
}

export default App;
