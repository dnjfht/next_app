// 사용자와 상호작용을 하는 컴포넌트 => Client Component

export default function Create() {
  return (
    <form onSubmit={() => {}}>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
