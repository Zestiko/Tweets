import { useDispatch } from 'react-redux';
import { getUsersThunk } from '../redux/users/userOperations'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectorGetUsers, selectorUsersStatus } from '../redux/users/usersSlice';
import TweetCard from '../components/TweetCard'
import scss from './Tweets.module.scss'

const Tweets = () => {
  const users = useSelector(selectorGetUsers);

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <div className={scss.container}>
      <ul className={scss.cards}>
        {users.map((user, i) => {
          return <TweetCard key={i} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default Tweets;
