import './TShirt.css'

function TShirt() {
  return (
    <div className="page-container tshirt-page">
      <div className="page-content">
        <h1>Forever 25 T-Shirt</h1>
        <p className="page-intro">
          Support The Wallace Foundation with our exclusive Forever 25 T-Shirt collection.
        </p>

        <section className="tshirt-showcase">
          <div className="tshirt-display">
            <div className="tshirt-image-placeholder">
              <p>T-Shirt Image</p>
            </div>
            <div className="tshirt-details">
              <h2>Limited Edition Forever 25</h2>
              <p className="price">$25.00</p>
              <p className="description">
                Show your support with this premium quality t-shirt. Available in multiple
                sizes and colors. All proceeds support our health awareness programs.
              </p>

              <div className="size-selector">
                <h3>Select Size</h3>
                <div className="size-options">
                  <button className="size-btn">S</button>
                  <button className="size-btn">M</button>
                  <button className="size-btn">L</button>
                  <button className="size-btn">XL</button>
                  <button className="size-btn">XXL</button>
                </div>
              </div>

              <div className="color-selector">
                <h3>Select Color</h3>
                <div className="color-options">
                  <button className="color-btn black" aria-label="Black"></button>
                  <button className="color-btn white" aria-label="White"></button>
                  <button className="color-btn gold" aria-label="Gold"></button>
                </div>
              </div>

              <button className="cta-button add-to-cart">Add to Cart</button>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <h2>Your Impact</h2>
          <p>
            Every t-shirt purchased directly supports our mission to provide awareness
            about physical, mental, and emotional health in our community.
          </p>
          <div className="impact-stats">
            <div className="stat-item">
              <h3>100%</h3>
              <p>of profits go to the foundation</p>
            </div>
            <div className="stat-item">
              <h3>Premium</h3>
              <p>quality materials</p>
            </div>
            <div className="stat-item">
              <h3>Limited</h3>
              <p>edition design</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TShirt
