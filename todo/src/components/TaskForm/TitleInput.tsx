import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";

interface PropsType {
  value: string;
  onChange: (e: ChangeEvent | string) => void;
  onBlur: (e: any) => void;
  name: string;
}

export default function TitleInput({
  onChange,
  value,
  onBlur,
  name,
}: PropsType) {
  return (
    <TextField
      required
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      fullWidth
      label="Title"
      id="fullWidth"
      name={name}
    />
  );
}
