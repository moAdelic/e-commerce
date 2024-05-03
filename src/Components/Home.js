import "./Home.css"

function Home() {
  return (
    <>
      <div className="home container-fluid my-4 d-flex flex-column gap-3">
        <div
          className="content p-5"
          style={{
            backgroundImage: "url(images/home-img.jpg)",
            backgroundSize: "cover",
            minHeight: "500px",
            backgroundPosition: "center center",
            position: "relative",
          }}
        >
          <span className="fs-4 text-warning text-uppercase">Fashion Zone</span>
          <h1 className="text-white text-uppercase my-3">Awesome Things <br /> Here</h1>
          <span className="text-white" style={{display: "block", maxWidth: "400px"}}>Welcome to BrandStore, your one-stop-shop for all your branding needs. Whether you're looking for a logo, a website, or social media presence, we've got you covered.</span>
        </div>
        <div className="content d-flex gap-3">
          <div className="box w-100">
            <img src={"images/men-fashion-free-img.jpg"} className="w-100 h-100"/>
          </div>
          <div className="box w-100">
            <img src={"images/women-fashion-free-img.jpg"} className="img-fluid w-100 h-100"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
