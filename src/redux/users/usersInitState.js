import STATUS from '../../constants';

export const userInitialState = {
  status: STATUS.idle,
  users: [{ user: '', tweets: null, followers: null }],
};
