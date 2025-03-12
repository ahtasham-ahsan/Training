import "./App.css";
// import Amplify from 'aws-amplify';
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import { listSongs } from "./graphql/queries";
import { useEffect, useState } from "react";
import { GraphQLAPI, graphqlOperation } from "@aws-amplify/api-graphql";
import { IconButton, Paper } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

// Amplify.configure(awsExports);
let API = GraphQLAPI;
Amplify.configure(awsconfig);

function App() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const songData = await API.graphql(graphqlOperation(listSongs));
      const songList = songData.data.listSongs.items;
      console.log("Song List", songList);
      setSongs(songList);
    } catch (error) {
      console.log("Error on fetching songs", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              <h1>Welcome, {user.username}!</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </header>

      <div className="songList">
        {songs.map((song) => {
          return (
            <Paper variant="outlined" elevation={2} key={song.id}>
              <div className="songCard">
                <IconButton aria-label="play">
                  <PlayArrowIcon />
                </IconButton>
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}

export default withAuthenticator(App);
