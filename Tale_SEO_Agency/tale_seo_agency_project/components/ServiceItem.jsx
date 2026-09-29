export default function ServiceItem(props) {
  return (
    <div className="col-lg-6 col-sm-6">
      <div className="service-item">
        <div className="icon">
          <img
            src={props.imageURL}
            alt="discover SEO"
            className="templatemo-feature"
          />
        </div>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}
