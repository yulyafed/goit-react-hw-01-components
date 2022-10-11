import { Profile } from "components/Profile/Profile";
import user from './Data/user'

import { Statistics } from "components/Statistics/Statistics";
import statisticalData from './Data/data';


import { FriendList } from 'components/FriendList/FriendList';
import friends from './Data/friends';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './Data/transactions';

export const App = () => {
  return (
    <div>
      <Profile user={user} />

      <Statistics title="Upload stats" stats={statisticalData}/>
      <FriendList friends={friends} />
    </div>
    
          //   <TransactionHistory items={transactions} />
  );
};
