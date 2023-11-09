import * as React from "react";

export default function ProfileInformation({userData}) {
    return (
        <div>
            <h1>Profile Information</h1>
            <p>Email: {userData.email}</p>
            <p>Username: {userData.username}</p>
            <p>First Name: {userData.name}</p>
            <p>Last Name: {userData.last_name}</p>
            <p>Bio: {userData.bio}</p>
        </div>
    );
}