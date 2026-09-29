export default function ProjectCard(props) {
  return (
    <div className="item">
      <img src={props.imageURL} alt="" />
      <div className="down-content">
        <h4>{props.title}</h4>
        <a href="#">
          <i className="fa fa-link" />
        </a>
      </div>
    </div>
  );
}
