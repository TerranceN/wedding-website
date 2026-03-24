"use client";

import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  type BoxProps,
} from "@mui/material";
import { type ReactElement } from "react";
import { useTranslation } from "next-export-i18n";
import ResponsiveSchedule from "../components/ResponsiveSchedule";

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

function TitleSection({ id }: { id?: string }) {
  const theme = useTheme();
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  return (
    <Section id={id}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          ...(isMediumOrSmaller
            ? {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }
            : {}),
        }}
      >
        <Typography
          fontFamily="Messaline"
          fontSize={{
            xs: 60,
            sm: 75,
            lg: 90,
          }}
          sx={{
            width: "fit-content",
            textShadow: "1px 1px 8px #000000",
            marginBottom: "-10px",
            ...(isMediumOrSmaller
              ? {
                  marginTop: "60vh",
                  textAlign: "center",
                }
              : {
                  position: "relative",
                  left: "7vw",
                  top: "30vh",
                }),
          }}
          whiteSpace="pre-line"
        >
          {t("international.title-section.title")}
        </Typography>
      </Box>
      <img
        src={"/Images/DrinkingCoffee.webp"}
        style={{
          maxWidth: "unset",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          objectPosition: "70% 20%",
          objectFit: "cover",
        }}
      />
    </Section>
  );
}

function ConstructionSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      sx={{
        background: "white",
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
          Work in Progress
        </Typography>
        <Stack
          sx={{
            background: "white",
            padding: "4vw",
          }}
        >
          <Typography whiteSpace="pre-line" color="#2D2B25">
            We're hard at work putting this information together for you. Please
            check back in later this week for travel recommendations and more
            information about Poland!
          </Typography>
        </Stack>
      </Stack>
    </Section>
  );
}

export default function Home() {
  const sections: {
    [key: string]: {
      component: (props: { id: string }) => ReactElement;
      label: string;
    };
  } = {
    title: {
      component: TitleSection,
      label: "Title",
    },
    construction: {
      component: ConstructionSection,
      label: "Construction",
    },
  };

  return (
    <Stack>
      {...Object.entries(sections).map(([key, { component: Component }]) => (
        <Component key={key} id={key} />
      ))}
    </Stack>
  );
}
