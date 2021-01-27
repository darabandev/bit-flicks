import ListItem from "../ListItem";

const ListContainer = ({ lists }) => {
  return (
    <>
      <h1>Your Lists</h1>
      <ul>
        {lists.map(list => (
          <ListItem list={list} />
        ))}
      </ul>
    </>
  );
};

export default ListContainer;
