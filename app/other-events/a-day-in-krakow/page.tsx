"use client";

import { Box, Stack, Typography, type BoxProps } from "@mui/material";
import { useTranslation } from "next-export-i18n";

function Section(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={{
        minHeight: "100svh",
        ...props.sx,
      }}
    ></Box>
  );
}

export default function Page() {
  const { t } = useTranslation();

  return (
    <Section
      sx={{
        background: "#CCC1B7",
        color: "#2D2B25",
      }}
    >
      <Stack sx={{ margin: "2vh 10vw" }}>
        <Typography
          fontFamily="Messaline"
          fontSize={{
            md: 80,
            sm: 70,
            xs: 50,
          }}
          whiteSpace="pre-line"
          color="#2D2B25"
        >
          {t("other-events.a-day-in-krakow.title")}
        </Typography>
        <Stack
          sx={{
            background: "white",
            padding: "4vw",
            borderRadius: "2px",
            marginTop: "20px",
          }}
        >
          <Typography>TODO</Typography>
        </Stack>
      </Stack>
    </Section>
  );
}
