const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">
          Cafe DI<del>N</del>E-In
          </div>
          <div className="right">
            <p>Sector 5, JNV Colony, Bikaner, Rajasthan </p>
            <p>Open: 10:00 AM - 11:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            {/* <p>Developed By HIMANSHU</p> */}
            <h4>Ph: 8929786479</h4>
          </div>
          <div className="right">
            <p> &copy; All Rights Reserved By Cafe DI<del>N</del>E-In.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;