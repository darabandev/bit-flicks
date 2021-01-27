const ListItem = ({ list }) => {
  return <li key={list.id}>{list.name}</li>;
};

export default ListItem;
