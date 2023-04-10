export default function PostDataStatic(props) {

  return (
    <>
      <strong>User ID:</strong> {props.post.userId}<br />
      <strong>Title:</strong> {props.post.title}<br />
      <strong>Body:</strong> {props.post.body}<br />
    </>
  );
}
