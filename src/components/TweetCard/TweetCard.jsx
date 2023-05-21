import scss from './TweetCard.module.scss'
import PropTypes from 'prop-types';
import logo from '../../img/TweetCard/Vector.png'
import banner from '../../img/TweetCard/picture2 1.png'
import { useDispatch, useSelector } from 'react-redux';
import { updateFollowershUsersThunk } from '../../redux/users/userOperations';
import { setFollowers, setFollowersValue, unsetFollowers } from '../../redux/followers/followersSlice';

const TweetCard = ({ user }) => {
  const { id, avatar, followers, tweets, user: userName } = user
  const followingUsers = useSelector(setFollowersValue);
  
  const dispatch = useDispatch();
  const isFollowing = followingUsers.includes(id);
  // console.log("🚀 ~ file: TweetCard.jsx:15 ~ TweetCard ~ isFollowing:", isFollowing)
  
  const heldelClick = () => {
    if (!isFollowing) {
      dispatch(updateFollowershUsersThunk({ id, followers: followers + 1 }));
      dispatch(setFollowers(id));
    } else {
      dispatch(updateFollowershUsersThunk({ id, followers: followers - 1 }));
      dispatch(unsetFollowers(id));
    }
  }

  return (
    <li className={scss.card}>
      <img className={scss.logo} src={logo} alt="logo" />
      <img className={scss.banner} src={banner} alt="logo" />
      <div className={scss.line}></div>
      <div className={scss.ellipse}>
        <div className={scss.ellipse__inner}>
          <img className={scss.avatar} src={avatar} alt="" />
        </div>
      </div>
      <div className={scss.container}>
        <h2 className={scss['user--name']}> {userName}</h2>
        <p>{tweets} tweets</p>
        <p>{followers?.toLocaleString('en')} followers</p>
        <button
          onClick={heldelClick}
          className={isFollowing ? scss.button__following : scss.button}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </li>
  );


}

TweetCard.propTypes = {
  user: PropTypes.shape({
    user: PropTypes.string,
    avatar: PropTypes.string,
    tweets: PropTypes.number,
    followers: PropTypes.number,
    id: PropTypes.string,
  }),
};


export default TweetCard;