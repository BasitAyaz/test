function MyInput(props) {
  const { type, onChange, placeholder,className } = props;
  return (
    <div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}

export default MyInput;
