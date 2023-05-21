import { useDispatch } from 'react-redux';
import { getUsersThunk } from '../../redux/users/userOperations';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectorGetUsers } from '../../redux/users/usersSlice';
import TweetCard from '../../components/TweetCard';
import scss from './Tweets.module.scss';
import { Link } from 'react-router-dom';

const Tweets = () => {
  const users = useSelector(selectorGetUsers);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const handelClick = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    dispatch(getUsersThunk(page));
  }, [dispatch, page]);

  return (
    <>
      <nav className={scss.nav}>
        <Link to={location.state?.from ?? '/'} className={scss.button}>
          Back
        </Link>
      </nav>
      <div className={scss.container}>
        <ul className={scss.cards}>
          {users.map((user, i) => {
            return <TweetCard key={i} user={user} />;
          })}
        </ul>
        {users.length >= 12 ? null : (
          <button className={scss.button} onClick={handelClick}>
            LoadMore
          </button>
        )}
      </div>
    </>
  );
};

export default Tweets;
