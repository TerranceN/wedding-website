"use client";

import {
  Box,
  Grid,
  Stack,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
  type BoxProps,
} from "@mui/material";
import { MuiMarkdown } from "mui-markdown";
import { type ReactElement } from "react";
import { useSelectedLanguage, useTranslation } from "next-export-i18n";
import ResponsiveSchedule from "../components/ResponsiveSchedule";
import styled from "@emotion/styled";
import { PropsOf } from "@emotion/react";

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
          color="#faf1e1"
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

const StyleableMuiMarkdown = (
  props: PropsOf<typeof MuiMarkdown> & { sx?: SxProps; className?: string },
) => {
  const { sx, className, ...rest } = props;

  return (
    <Box sx={sx} className={className}>
      <MuiMarkdown {...rest} />
    </Box>
  );
};

const StyledMarkdown = styled(StyleableMuiMarkdown)`
  & {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      &:not(:first-child) {
        margin-top: 24px;
      }
    }

    ol,
    ul {
      overflow: auto;
      padding: 0 0 0 1em;
    }

    ul {
      list-style: outside;
    }

    ol {
      list-style: nu;
      list-style-position: outside;
    }

    ol ol {
      list-style: lower-alpha;
    }

    img[src$="#float-left"] {
      float: left;
      clear: left;
      padding-right: 8px;
      padding-bottom: 8px;
    }

    img[src$="#inline"] {
      display: inline;
    }

    div.clear {
      clear: both;
    }

    .nowrap {
      display: block;
      overflow: hidden;
    }

    .title {
      font-family: "Messaline";

      @media (width >= 1150px) {
        font-size: 80px;
      }
      @media (980px <= width < 1150px) {
        font-size: 70px;
      }
      @media (0px <= width < 980px) {
        font-size: 50px;
      }
    }
  }
`;

function PolandWelcomeSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      sx={{
        background: "white",
      }}
    >
      <Stack sx={{ margin: "2vh 10vw" }}>
        <Stack
          sx={{
            background: "white",
          }}
        >
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
            Welcome To Poland
          </Typography>
          <StyledMarkdown
            sx={{
              "*": {
                fontSize: "18px",
              },
              img: {
                width: {
                  xs: "auto",
                  sm: "30vw",
                },
                marginRight: "20px",
                float: {
                  xs: "unset !important",
                  sm: "left !important",
                },
              },
              a: {
                color: "#2D2B25",
                textDecorationColor: "#2D2B25",
              },
            }}
          >
            {t("international.welcome-section.content")}
          </StyledMarkdown>
        </Stack>
      </Stack>
    </Section>
  );
}

function PolandFAQSection({ id }: { id?: string }) {
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
          Poland FAQ
        </Typography>
        <Stack
          sx={{
            background: "white",
          }}
        >
          <StyledMarkdown>
            {t("international.poland-faq-section.content")}
          </StyledMarkdown>
        </Stack>
      </Stack>
    </Section>
  );
}

function PolishWeddingsSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      sx={{
        background: "white",
      }}
    >
      <Stack sx={{ margin: "2vh 10vw" }}>
        <Stack
          sx={{
            background: "white",
          }}
        >
          <Typography
            fontFamily="Messaline"
            fontSize={{
              md: 80,
              sm: 70,
              xs: 50,
            }}
            whiteSpace="pre-line"
            color="#2D2B25"
            sx={{
              display: "inline-block",
            }}
          >
            Polish Weddings
          </Typography>
          <StyledMarkdown
            sx={{
              img: {
                width: {
                  xs: "auto",
                  sm: "30vw",
                },
                marginRight: "20px",
                float: {
                  xs: "unset !important",
                  sm: "left !important",
                },
              },

              "*": {
                fontSize: "18px !important",
              },
            }}
          >
            {t("international.polish-weddings-section.content")}
          </StyledMarkdown>
        </Stack>
      </Stack>
    </Section>
  );
}

function PolishCheatSheetSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      sx={{
        background: "white",
      }}
    >
      <Stack sx={{ margin: "2vh 10vw" }}>
        <Stack
          sx={{
            background: "white",
          }}
        >
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
            Polish Cheat Sheet
          </Typography>
          <Grid container spacing={8}>
            {["letters", "key-words"].map((key) => (
              <Grid
                key={key}
                size={{
                  xs: 12,
                  lg: key === "letters" ? 5 : 7,
                }}
              >
                <StyledMarkdown
                  sx={{
                    "& > *": {
                      overflow: "visible",
                    },

                    "th:first-child, td:first-child": {
                      textAlign: "center",
                    },

                    "th:last-child": {
                      paddingLeft: "0px",
                    },

                    th: {
                      borderColor: "#2D2B25",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      padding: {
                        xs: "8px 8px 8px 8px",
                      },
                    },

                    td: {
                      paddingLeft: "20px",
                      border: "none",
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      padding: {
                        xs: "8px 8px 8px 20px",
                      },

                      em: {
                        display: {
                          xs: "block",
                          sm: "inline",
                        },
                      },
                    },

                    "tbody tr:first-child td": {
                      paddingTop: "24px",
                    },
                  }}
                >
                  {t(`international.cheat-sheet-section.${key}`)}
                </StyledMarkdown>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Section>
  );
}

function TravellingPolandSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      sx={{
        background: "white",
      }}
    >
      <Stack sx={{ margin: "2vh 10vw" }}>
        <Stack
          sx={{
            background: "white",
          }}
        >
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
            Travelling Poland
          </Typography>
          <StyledMarkdown
            sx={{
              "div.map-area": {
                'img[src$="#float-left"]': {
                  width: {
                    xs: "80vw",
                    sm: "40vw",
                  },
                },
                clear: {
                  xs: "both",
                  sm: "unset",
                },
                img: {
                  width: {
                    xs: "20px",
                    sm: "3vw",
                  },
                },
              },
              "h5, h6": {
                img: {
                  marginTop: "-10px",
                  width: "30px",
                },
              },
            }}
          >
            {t(`international.travelling-poland-section.content`)}
          </StyledMarkdown>
        </Stack>
      </Stack>
    </Section>
  );
}

function InternationalTravelSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      sx={{
        background: "white",
      }}
    >
      <Stack sx={{ margin: "2vh 10vw" }}>
        <Stack
          sx={{
            background: "white",
          }}
        >
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
            International Travel
          </Typography>
          <StyledMarkdown
            sx={{
              "div.map-area": {
                '.map img[src$="#float-left"]': {
                  width: {
                    xs: "80vw",
                    md: "40vw",
                  },
                },
                ".right-side": {
                  clear: {
                    xs: "both",
                    md: "unset",
                  },
                },
                img: {
                  width: "40px",
                },
              },
            }}
          >
            {t(`international.international-travel-section.content`)}
          </StyledMarkdown>
        </Stack>
      </Stack>
    </Section>
  );
}

function HikingGuideSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      sx={{
        background: "white",
      }}
    >
      <Stack sx={{ margin: "2vh 10vw" }}>
        <Stack
          sx={{
            background: "white",
          }}
        >
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
            Tatry Hiking Guide
          </Typography>
          <StyledMarkdown
            sx={{
              ".img-stack": {
                display: "flex",
                justifyContent: "space-between",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                img: {
                  flex: "1 1 auto",
                  padding: "20px",
                  minWidth: 0,
                },
              },
            }}
          >
            {t(`international.hiking-guide-section.content`)}
          </StyledMarkdown>
        </Stack>
      </Stack>
    </Section>
  );
}

function NotTranslatedSection({ id }: { id?: string }) {
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
          Niedostępne w języku polskim
        </Typography>
        <Stack
          sx={{
            background: "white",
            padding: "4vw",
          }}
        >
          <Typography whiteSpace="pre-line" color="#2D2B25">
            {`Ta sekcja przeznaczona jest dla gości zagranicznych i jest dostępna wyłącznie w języku angielskim.`}
          </Typography>
        </Stack>
      </Stack>
    </Section>
  );
}

export default function Home() {
  const { lang } = useSelectedLanguage();

  const sections: {
    [key: string]: {
      component: (props: { id: string }) => ReactElement;
    };
  } = {
    title: {
      component: TitleSection,
    },
    ...(lang === "en"
      ? {
          polandWelcome: {
            component: PolandWelcomeSection,
          },
          polandFaq: {
            component: PolandFAQSection,
          },
          polishCheatSheet: {
            component: PolishCheatSheetSection,
          },
          polishWeddings: {
            component: PolishWeddingsSection,
          },
          travellingPoland: {
            component: TravellingPolandSection,
          },
          internationalTravel: {
            component: InternationalTravelSection,
          },
          hikingGuide: {
            component: HikingGuideSection,
          },
        }
      : {
          notTranslated: {
            component: NotTranslatedSection,
          },
        }),
  };

  return (
    <Stack>
      {...Object.entries(sections).map(([key, { component: Component }]) => (
        <Component key={key} id={key} />
      ))}
    </Stack>
  );
}
