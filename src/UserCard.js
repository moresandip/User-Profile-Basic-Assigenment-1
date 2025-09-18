import React from "react";

const avatarUrl = (username) =>
  `https://avatars.dicebear.com/v2/avataaars/${encodeURIComponent(username)}.svg?options[mood][]=happy`;

function UserCard({ user }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="text-center p-3">
        <img
          src={avatarUrl(user.username)}
          alt={user.username}
          style={{ width: 120, height: 120 }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text mb-1"><strong>Email:</strong> {user.email}</p>
        <p className="card-text mb-1"><strong>Phone:</strong> {user.phone}</p>
        <p className="card-text"><strong>Company:</strong> {user.company.name}</p>
      </div>
    </div>
  );
}

export default UserCard;
