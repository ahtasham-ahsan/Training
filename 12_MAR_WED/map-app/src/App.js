// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;import React from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import "./App.css";

Amplify.configure(awsExports);

const App = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <div className="container">
      {/* Navigation Bar */}
      <header className="navbar">
        <h2>My Awesome App</h2>
        <button className="signout-btn" onClick={signOut}>Sign Out</button>
      </header>

      {/* Welcome Section */}
      <main className="welcome-section">
        {/* <h1>Welcome, {user?.username} 🎉</h1> */}
        <h1>Welcome {user?.attributes?.name} 🎉</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus lacinia odio vitae vestibulum vestibulum. 
          Cras venenatis euismod malesuada.
        </p>
      </main>
    </div>
  );
};

export default withAuthenticator(App);
