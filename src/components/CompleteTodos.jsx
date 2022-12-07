export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了タスク</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>リストに戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
