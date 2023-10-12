import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './data/user.json'
import { Profile } from './components/profile/Profile';
import data from './data/data.json';
import { Statistics } from './components/statistics/Statistics.jsx';
import friends from './data/friends.json';
import { FriendList } from 'components/friendList/FriendList';
import transactions from './data/transactions.json';
import { TransactionHistory } from './components/transaction-history/TransactionHistory';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
  <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </App>
  </React.StrictMode>
);
