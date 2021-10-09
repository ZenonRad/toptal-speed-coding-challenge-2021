import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export interface IDisplayProps {
  children: string;
  label: string;
  error?: boolean;
  id?: string;
  className?: string;
}

const Display = (props: IDisplayProps) => {
  const { id = "display", label, children, error = false, className } = props;

  return (
    <Grid
      item
      container
      id={id}
      className={className}
      spacing={1}
      style={error ? { backgroundColor: "red", color: "white" } : {}}
    >
      <Grid item>
        <Typography variant="body1" fontWeight="bold">
          {label}
        </Typography>
      </Grid>
      <Grid item>:</Grid>
      <Grid item>
        <Typography variant="body1">{children}</Typography>
      </Grid>
    </Grid>
  );
};

export default Display;
