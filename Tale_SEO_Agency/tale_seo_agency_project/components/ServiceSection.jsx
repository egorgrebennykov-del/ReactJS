import ServiceItem from "./ServiceItem";

export default function ServiceSection() {
  return (
    <div className="services section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>
                    We Provide <em>Different Services</em> &amp;
                    <span>Features</span> For Your Agency
                  </h2>
                  <div className="line-dec" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    doers eiusmod.
                  </p>
                </div>
              </div>

              <ServiceItem
                imageURL="assets/images/services-01.jpg"
                title="Discover More on Latest SEO Trends"
              />

              <ServiceItem
                imageURL="assets/images/services-02.jpg"
                title="Real-Time Big Data Analysis"
              />

              <ServiceItem
                imageURL="assets/images/services-03.jpg"
                title="Precise Data Analysis &amp; Prediction"
              />

              <ServiceItem
                imageURL="assets/images/services-04.jpg"
                title="SEO Marketing &amp; Social Media"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
