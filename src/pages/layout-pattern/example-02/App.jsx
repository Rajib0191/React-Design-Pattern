import React from "react";
import { authors } from "./data/authors";
import { books } from "./data/books";
import SmallAuthorListItem from "./component/SmallAuthorListItem";
import SmallBookListItem from "./component/SmallBookListItem";
import RegularList from "./component/RegularList";
import Modal from "./component/Modal";

const App = () => {
  return (
    <div className="h-screen bg-gray-900 flex flex-col md:flex-row px-2 gap-4 md:justify-center overflow-auto py-2">
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />

      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />

      <Modal>
        <SmallAuthorListItem author={authors[0]} />
      </Modal>
    </div>
  );
};

export default App;
