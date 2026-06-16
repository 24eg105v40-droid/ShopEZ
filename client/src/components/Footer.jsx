function Footer() {
  return (
  <footer
  style={{
    background: "#EFEAE2",
    padding: "40px 40px",
    marginTop: "20px",
  }}
>
      <h2>ShopEZ</h2>

      <p
        style={{
          marginTop: "15px",
          color: "#666",
        }}
      >
        Modern essentials for everyday living.
      </p>

      <div
        style={{
          display: "flex",
          gap: "100px",
          marginTop: "40px",
        }}
      >
        <div>
          <h4>Shop</h4>
          <p>Fashion</p>
          <p>Beauty</p>
          <p>Electronics</p>
          <p>Home</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>Contact</p>
          <p>FAQ</p>
          <p>Orders</p>
        </div>

        <div>
          <h4>Follow</h4>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Email</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;