import { NavLink } from 'react-router-dom';
import scss from './HomePage.module.scss';
import cat from '../../img/HomePage/cat.jpg';

const HomePage = () => {
  return (
    <div className={scss.container}>
      <h1 className={scss.tittle}>
        Hello, my name is Voyn. <br />
        My owner thought he could do everything in one day, so we have what we
        have. <br />
        Click the button below.
      </h1>
      <img className={scss.img} src={cat} alt="" />

      <NavLink to="/tweets" className={scss.button}>
        Click me
      </NavLink>
    </div>
  );
};

export default HomePage;
