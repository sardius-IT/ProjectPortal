export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Welcome to Sardius Job Portal</h1>
      <p>Use the following pages to test backend integration:</p>
      <ul>
        <li><a href="/register">Register User</a></li>
        <li><a href="/get-user">Get User by Email</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </main>
  );
}
