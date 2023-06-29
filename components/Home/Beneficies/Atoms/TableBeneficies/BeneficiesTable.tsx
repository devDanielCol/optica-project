import { Box, Paper, Typography, Grid, Button } from "@mui/material";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import SpeedIcon from "@mui/icons-material/Speed";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useState } from "react";
import useTheme from "../../../../../util/hooks/useTheme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import ArticleIcon from "@mui/icons-material/Article";
import ShieldIcon from "@mui/icons-material/Shield";

const BeneficiesTable = () => {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const theme = useTheme();

  return (
    <Box
      component={Paper}
      elevation={0}
      sx={{
        mt: 3,
      }}
    >
      <Grid container>
        <Grid item xs={12} sx={{ my: 2 }}>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid
              xs={4}
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "2rem" },
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                Beneficio
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "2rem" },
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                Descripcion
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container sx={{ my: { xs: 0.3, md: 2 } }}>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MonetizationOnIcon
                sx={{
                  fontSize: {
                    xs: "1rem",
                    md: "2rem",
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.6rem",
                    md: "1.1rem",
                  },
                  textAlign: { xs: "center", md: "center" },
                }}
              >
                Precios por debajo de su valor comercial
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.6rem",
                    md: "1.1rem",
                  },
                  textAlign: { xs: "center", md: "center" },
                }}
              >
                Desde un 30 a un 50% de descuento
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: "#00CC46",
                  fontSize: {
                    xs: "1rem",
                    md: "2rem",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ my: 2 }}>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CalendarMonthIcon
                sx={{
                  fontSize: {
                    xs: "1rem",
                    md: "2rem",
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.6rem",
                    md: "1.1rem",
                  },
                  textAlign: { xs: "center", md: "center" },
                }}
              >
                Al alcance de todos
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.6rem",
                    md: "1.1rem",
                  },
                  textAlign: { xs: "center", md: "center" },
                }}
              >
                Facil acceso con descuentos de nómina
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: "#00CC46",
                  fontSize: {
                    xs: "1rem",
                    md: "2rem",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2 }}>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AccountBalanceIcon
                sx={{
                  fontSize: {
                    xs: "1rem",
                    md: "2rem",
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.6rem",
                    md: "1.1rem",
                  },
                  textAlign: { xs: "center", md: "center" },
                }}
              >
                Facil facturación y registro contrable
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.6rem",
                    md: "1.1rem",
                  },
                  textAlign: { xs: "center", md: "center" },
                }}
              >
                Totalmente facil de manejar evitando carga laboral
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: "#00CC46",
                  fontSize: {
                    xs: "1rem",
                    md: "2rem",
                  },
                }}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              width: "100%",
              height: seeMore ? "550px" : "95px",
              overflow: "hidden",
              position: "relative",
              transition: "all .2s",
              transitionTimingFunction: "revert-layer",
            }}
          >
            <Box>
              <Grid container sx={{ my: 2 }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <WhereToVoteIcon
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Todo en las instalaciones de tu empresa
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Evitando permisos y ausentismos laborales
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#00CC46",
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ my: 2 }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SpeedIcon
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    {" "}
                    Tiempos de entrega acelerados
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Entrega desde 8 días despues de realizada la campaña
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#00CC46",
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ my: 2 }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FamilyRestroomIcon
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Descuentos automatizados para la familia
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Posibiidad de adquirirlo en el descuento de nómina si es
                    requerido
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#00CC46",
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ my: 2 }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BarChartIcon
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Entrega de informe estadistico exhaustivo
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    reglamentado en el artículo 8 de la resolución 2346 de 2007
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#00CC46",
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ my: 2 }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PriceCheckIcon
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Campaña de salud visual empresarial
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Se realiza sin ningun costo para el empresa
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#00CC46",
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ my: 2 }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <VisibilityIcon
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    La mejor tecnologia en examen visual
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Compurarizados y equipos sofisticados a tu servicio
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#00CC46",
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ my: 2 }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <HighQualityIcon
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Profesinales altamente capacitados
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Para formulacion y adaptación de lentes de contacto
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#00CC46",
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ mt: 2 }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ArticleIcon
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Te entregamos una certificación de participación
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Soporte ante SG-SST requerido por la secretaria de salud
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#00CC46",
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid container sx={{ my: 2 }}>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ShieldIcon
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Garantia en nuestros productos
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0.6rem",
                        md: "1.1rem",
                      },
                      textAlign: { xs: "center", md: "center" },
                    }}
                  >
                    Te damos garantía de 12meses y una poliza gratis que cubre
                    el 20 hasta el 50% en tus gafas
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#00CC46",
                      fontSize: {
                        xs: "1rem",
                        md: "2rem",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "95px",
                backgroundImage: `linear-gradient(0deg, ${theme.palette.background.paper}, transparent 70%)`,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Button
                onClick={() => {
                  setSeeMore(!seeMore);
                }}
                variant="contained"
                sx={{
                  py: 0.2,
                  backgroundColor: "custom.footer",
                  color: "white",
                  textTransform: "lowercase",
                  borderRadius: 4,
                  mb: 1,
                  fontSize: {
                    xs: "0.7rem",
                    md: "1rem",
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "custom.footer",
                  },
                }}
              >
                {seeMore ? "ver menos" : "ver más"}
                <ExpandMoreIcon
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      md: "1.5rem",
                    },
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BeneficiesTable;
