export default function Input({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  ...rest
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full p-1 px-3 bg-gray-100 rounded-md ${className}`}
      {...rest}
    />
  );
}
