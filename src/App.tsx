import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistic/Statistic";
import FriendsList from "./components/FriendsList/FriendsList";
import TransactionList from "./components/TransactionList/TransactionList";

import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import "./App.css";

function App() {
  const { name, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendsList friends={friends} />

      <TransactionList items={transactions} />
    </>
  );
}

export default App;
