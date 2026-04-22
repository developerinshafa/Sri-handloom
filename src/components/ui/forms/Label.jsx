export default function Label({ 
    htmlFor, 
    children, 
    required = false,
    ...rest 
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-left text-sm font-medium text-gray-700"
      {...rest}
    >
      {children} 
        {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}