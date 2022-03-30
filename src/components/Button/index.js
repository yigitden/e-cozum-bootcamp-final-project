import { Button } from "@mui/material";

const ButtonTemp = ({ onClick, variant, text, size }) => {
  return (
    <Button onClick={onClick} variant={variant} size={size}>
      {text}
    </Button>
  );
};

export default ButtonTemp;
