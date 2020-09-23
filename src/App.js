import React, { useState } from "react";
import "./styles.css";
import SwipeableViews from "react-swipeable-views";

const splitItems = (array, n) => {
  let [...arr] = array;
  let res = [];
  while (arr.length) {
    const chunk = arr.splice(0, n);
    // const chunk = {items:arr.splice(0, n)}
    res.push(chunk);
  }
  return res;
};
const chunker = (arr) =>
  arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    []
  );

const newArr = [
  {
    items: [
      { id: "1", name: "Gloves A" },
      { id: "2", name: "Jacket B" },
      { id: 3, name: "T-Shirt C" }
    ]
  },

  {
    items: [
      { id: "1", name: "Gloves D" },
      { id: "1", name: "Gloves E" }
    ]
  }
];

const items = [
  { id: "1", name: "Gloves A" },
  { id: "2", name: "Jacket B" },
  { id: 3, name: "T-Shirt A" },
  { id: "1", name: "Gloves A" },
  { id: "1", name: "Gloves A" }
];

const V = ({ data }) => {
  console.log(data);
  const items = data?.map((i) => (
    <div>
      <span>{i.id}</span>=><span>{i.name}</span>
    </div>
  ));
  return items;
};

export default function App() {
  const [orderIndex, setOrderIndex] = useState(0);
  const [itemsChunk, setItemsChunk] = useState(splitItems(items, 3));
  return (
    <div className="App">
      <button onClick={() => orderIndex > 0 && setOrderIndex(orderIndex - 1)}>
        Prev
      </button>
      <button
        onClick={() =>
          orderIndex < newArr?.length - 1 && setOrderIndex(orderIndex + 1)
        }
      >
        Next
      </button>
      <SwipeableViews
        enableMouseEvents
        index={orderIndex}
        onChangeIndex={(e) => {
          setOrderIndex(e);
        }}
        style={{ width: "100%" }}
      >
        {itemsChunk?.map((i) => (
          <V data={i} />
        ))}
      </SwipeableViews>
    </div>
  );
}
