export default async function Read(props) {
  const res = await fetch(`http://localhost:9999/topics/${props.patams.id}`);
  const topic = await res.json();

  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.body}</p>
      parameters : {props.params.id}
    </>
  );
}
