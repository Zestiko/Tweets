import { useDispatch } from 'react-redux';
import { getUsersThunk } from '../redux/users/userOperations'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectorGetUsers, selectorUsersStatus } from '../redux/users/usersSlice';
import TweetCard from '../components/TweetCard'

const Tweets = () => {
  const users = useSelector(selectorGetUsers);

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <>
      {users.map((user,i) => {
       return <TweetCard key={i} user={user} />;
      })}
    </>
  );
};

export default Tweets;
