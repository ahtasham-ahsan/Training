import React from "react";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import MapComponent from "./MapComponent";

Amplify.configure(awsExports);

const myTheme = createTheme({
  name: "my-theme",
  tokens: {
    colors: {
      brand: {
        primary: { value: "#ff5722" },
        secondary: { value: "#3f51b5" },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: "#ff5722" },
          color: { value: "white" },
          _hover: {
            backgroundColor: { value: "#e64a19" },
          },
        },
      },
    },
  },
});

function App({ signOut, user }) {
  return (
    <ThemeProvider theme={myTheme}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome {user.username}!</h1>
        <button onClick={signOut}>Sign Out</button>
      </div>
      <div>
        <h1>📍 AWS Amplify Geolocation Map</h1>
        <MapComponent />
      </div>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
