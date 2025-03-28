// App.js (واجهة اللعبة)
import React, { useState, useEffect } from "react";

function App() {
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    // هنا يمكنك إضافة كود الاتصال بـ Socket.io
  }, []);

  return (
    <div>
      <h1>لعبة الفقاعات</h1>
      <div>
        {players.map((player, index) => (
          <div key={index}>{player.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
