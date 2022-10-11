import { Profile } from "components/Profile/Profile";
import user from './Data/user'

// import Statistics from './components/Statistics/Statistics';
// import statisticalData from './data/statistical-data.json';

// import FriendList from './components/FriendList/FriendList';
// import friends from './data/friends.json';

// import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user}/>
    </div>
    // <Statistics title="Upload stats" stats={statisticalData} />
    //   <Statistics stats={statisticalData} />

    //   <FriendList friends={friends} />

    //   <TransactionHistory items={transactions} />
  );
};
