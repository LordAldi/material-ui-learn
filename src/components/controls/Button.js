import { Button as MUIButton, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));
const Button = ({ children, size, color, variant, onClick, ...other }) => {
  const classes = useStyles();
  return (
    <MUIButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
