import { Profile } from "components/Profile/Profile";
import user from './Data/user'

import { Statistics } from "components/Statistics/Statistics";
import statisticalData from './Data/data';


// import FriendList from './components/FriendList/FriendList';
// import friends from './data/friends.json';

// import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />

      <Statistics title="Upload stats" stats={statisticalData}/>
    </div>
    

    //   <FriendList friends={friends} />

    //   <TransactionHistory items={transactions} />
  );
};
