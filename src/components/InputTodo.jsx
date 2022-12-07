const style = {
  backgroundColor: "antiquewhite",
  borderRadius: "10px",
  height: "100%",
  padding: "5px",
  margin: "5px",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
