"use client";
import { useState } from "react";

export default function GetUser() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await fetch(`http://localhost:8080/api/users/email?email=${email}`);
    const data = await res.json();
    setUser(data);
  };

  return (
    <main style={{ padding: 20 }}>
      <h2>Find User by Email</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
      <button onClick={fetchUser}>Search</button>

      {user && (
        <div style={{ marginTop: 10 }}>
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      )}
    </main>
  );
}
