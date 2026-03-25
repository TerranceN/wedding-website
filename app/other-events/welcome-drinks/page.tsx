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
    <Stack>
      <Section
        sx={{
          background: "white",
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
            {t("other-events.welcome-drinks.title")}
          </Typography>
          <Stack
            sx={{
              padding: "0 2vw",
            }}
            spacing={2}
          >
            <Typography whiteSpace="pre-line">
              {t("other-events.welcome-drinks.details")}
            </Typography>
            <img
              src="/Images/Brewery.webp"
              style={{ objectFit: "contain", padding: "20px 0" }}
            />
          </Stack>
        </Stack>
      </Section>
    </Stack>
  );
}
