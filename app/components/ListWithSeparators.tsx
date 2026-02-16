import { Stack } from "@mui/material";
import React from "react";
import { PropsWithChildren } from "react";
import { intersperse } from "../utils";

function ListWithSeparators({ children }: PropsWithChildren<object>) {
  return (
    <Stack direction="row" spacing="8px" alignItems={"center"}>
      {intersperse(
        React.Children.toArray(children),
        <div
          style={{
            width: "2px",
            height: "14px",
            marginTop: "-2px",
            backgroundColor: "#2D2B25",
          }}
        />,
      )}
    </Stack>
  );
}

export default ListWithSeparators;
