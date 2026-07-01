import React from "react";

function Footer() {
  return (
    <div className="footer-page">
      <div className="foot">
        <div className="left">
          <div className="one">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <p>21 Aadarsh Nagar</p>
              <p>
                <b>Indore, MP</b>
              </p>
            </div>
          </div>
          <div className="one">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="text">
              <p>
                <b>+91 4321569823</b>
              </p>
            </div>
          </div>
          <div className="one">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text">
              <p>
                <a href="#">support@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <p>
            <b>About The Company</b>
          </p>
          <p className="grey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi
            est laboriosam natus, itaque libero facere sunt, quam quidem, unde
            praesentium quas omnis quaerat voluptatibus hic officiis quibusdam
            aliquid? Qui!
          </p>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <p>
          Copyright &copy; 2025-26, Made with Simple Ideas, All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
