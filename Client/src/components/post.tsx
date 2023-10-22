import "../assets/styles/post.scss"


type PostProps = {
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  readMoreLink: string;
};
function Post(props: PostProps) {
    return (
        <div className="blog-post">
        <h2 className="post-title">{props.title}</h2>
        <p className="post-meta">Posted on {props.date}</p>
        <img src={props.imageSrc} alt={props.imageAlt} className=""/>
        <p className="post-content">{props.description}</p>
        <a href={props.readMoreLink} className="read-more-link">Read More</a>
    </div>
    );
  }
  
  export default Post;