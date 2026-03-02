import type { User } from "../../models/User";
import classes from "./UserCard.module.css";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  return (
    <div className={classes.root}>
      <h2>{user.name}</h2>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default UserCard;