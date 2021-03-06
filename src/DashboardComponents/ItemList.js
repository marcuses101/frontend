import React from "react";
import { Link } from "react-router-dom";


export function ItemList({items = [] ,projectId}) {

  const listItems = items.map((item) => (
    <li key={item.id}>
      <Link className='reset' to={`/project/${projectId}/item/${item.id}/edit`}> {item.name}</Link>
    </li>
  ));

  return (
    <section>
      <h2>Items</h2>
      <ul>
        <li key='addItem'><Link to={`/project/${projectId}/item/add`}>+ Add Item</Link></li>
      </ul>
      <h3>Edit</h3>
      <ul>
      {listItems}
      </ul>
    </section>
  );
}
