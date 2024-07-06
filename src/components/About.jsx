const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>DI<del>N</del>E-IN CAFE: The Food You Would Die For</p>
            </div>
            <p className="mid">
            We pride ourselves on offering a personalized and 
            attentive booking service that prioritizes the needs 
            and preferences of our valued guests. Our mission is 
            simple yet profound: to provide a seamless and user-friendly 
            reservation process that allows diners to effortlessly 
            secure a table at our restaurant. With a commitment to 
            excellence, we aim to exceed expectations by delivering 
            exceptional customer services, ensuring that each reservation 
            is handled with care & precision.
            </p>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
