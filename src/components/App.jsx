import React from "react";
import Entry from "./Entry";
import Heading from "./Heading";
import emojipedia from "../emojipedia";
import Footer from "./Footer";

function createEntry(emojipedia) {
  return (
    <Entry
      id={emojipedia.id}
      name={emojipedia.name}
      emoji={emojipedia.emoji}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      <Footer />
    </div>
  );
}

export default App;
