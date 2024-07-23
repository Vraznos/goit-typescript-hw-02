import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./components/userData.json";
import friends from "./components/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./components/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <div>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
};

export default App;
