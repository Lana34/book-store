import { useState } from "react";
import "../Tabs/tabs.css";
import { IBookDetails } from "../../types/books/books";

export const Tabs = ({ authors, desc }: IBookDetails) => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <>
      <div className="bookDetails__tabs">
        <p
          className={
            activeTab === "Description"
              ? "bookDetails__tab activeTab"
              : "bookDetails__tab"
          }
          id="Description"
          onClick={(e) => setActiveTab((e.target as Element).id)}
        >
          Description
        </p>
        <p
          className={
            activeTab === "Authors"
              ? "bookDetails__tab activeTab"
              : "bookDetails__tab"
          }
          id="Authors"
          onClick={(e) => setActiveTab((e.target as Element).id)}
        >
          Authors
        </p>
      </div>
      <div className="bookDetails__tabContent">
        {activeTab === "Description" ? desc : authors}
      </div>
    </>
  );
};
