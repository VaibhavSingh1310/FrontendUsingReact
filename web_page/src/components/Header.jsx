export default function Header({ cartCount }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      
      <img
        src="/Logo.jpg"
        alt="logo"
        width="50"
      />
      <div>
        <h2>My Mobile Store</h2>
        <p>Cart Item Count: {cartCount}</p>
      </div>

    </div>
  );
}