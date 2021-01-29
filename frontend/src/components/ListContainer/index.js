import NewList from "../NewList";
import ListItem from "../ListItem";
import { Link } from "react-router-dom";
import "./ListContainer.css";

const ListContainer = ({ lists }) => {
  return (
    <div className="list-container">
      <h1 className="list-header">Lists</h1>
      <ul>
        {lists.map(list => (
          <Link to={`/lists/${list.id}`}>
            <ListItem key={list.id} list={list} />
          </Link>
        ))}
      </ul>
      <NewList />
    </div>
  );
};

export default ListContainer;
