import TextField from "@mui/material/TextField";

interface PropsType {
  onChange: (e: any) => void;
  value: string;
  onBlur: (e: any) => void;
  name: string;
}

export default function DescriptionInput({
  value,
  onChange,
  onBlur,
  name,
}: PropsType) {
  return (
    <TextField
      onChange={onChange}
      value={value}
      fullWidth
      label="Description"
      id="fullWidth"
      name={name}
      multiline
      rows={4}
      onBlur={onBlur}
    />
  );
}
