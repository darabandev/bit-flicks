import NewList from "../NewList";
import ListItem from "../ListItem";
import "./ListContainer.css";

const ListContainer = ({ lists }) => {
  return (
    <div className="list-container">
      <h1 className="list-header">Lists</h1>
      <ul>
        {lists.map(list => (
          <ListItem key={list.id} list={list} />
        ))}
      </ul>
      <NewList />
    </div>
  );
};

export default ListContainer;
