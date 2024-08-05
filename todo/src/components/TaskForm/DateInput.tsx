import { TextField } from "@mui/material";

interface PropsType {
  onChange: (e: any) => void;
  value: string | null;
  name: string;
}

const DateInput: React.FC<PropsType> = ({
  value,
  onChange,
  name,
}: PropsType) => {
  return (
    <TextField
      sx={{ width: "100%" }}
      label="Deadline"
      type="date"
      value={value}
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      name={name}
    />
  );
};

export default DateInput;
