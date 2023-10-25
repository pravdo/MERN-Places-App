import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Pravdo",
      image:
        "https://images.pexels.com/photos/5579177/pexels-photo-5579177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
