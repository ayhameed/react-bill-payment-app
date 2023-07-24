import React from "react";
import '../globals.css'; // Import the globals.css file

function MyApp({ Component, pageProps }) {
  // This is the root component that wraps every page in your Next.js app
  return (
    <React.Fragment>
      {/* Place any global layout components or header/footer here */}
      <Component {...pageProps} />
      {/* Place any global footer components here */}
    </React.Fragment>
  );
}

export default MyApp;
