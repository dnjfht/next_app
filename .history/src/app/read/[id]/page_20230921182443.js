export default async function Read(props) {
  const res = await fetch(`http://localhost:9999/topics/${props.patams.id}`);
  return (
    <>
      <h2>Read</h2>
      parameters : {props.params.id}
    </>
  );
}
