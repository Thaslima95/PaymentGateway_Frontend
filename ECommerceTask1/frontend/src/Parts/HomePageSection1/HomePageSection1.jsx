import React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import ListComponent from "../../Components/ListComponent/ListComponent";

import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
import { Grid } from "@mui/material";

import { ThemeProvider } from "@mui/material";
import {
  BannerImg,
  buttontheme,
} from "../../Components/BannerTheme/BannerTheme";
import { LearnMoreButton } from "../../Components/BannerTheme/BannerTheme";
import {
  bannertheme1,
  bannertheme2,
} from "../../Components/BannerTheme/BannerTheme";
export default function HomePageSection1() {
  const [categories, setCategories] = useState([]);

  useMemo(() => {
    ApiCalls.getCategoris()
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid
      container
      xs
      sx={{ top: "162px", position: "absolute", border: "1px solid red" }}
    >
      <Grid item md={1}>
        item1
      </Grid>
      <Grid container xs={12} md={9} sx={{ border: "1px solid blue" }}>
        <Grid
          item
          xs={4}
          md={3}
          sx={{ border: "1px solid red", display: { xs: "none", md: "block" } }}
        >
          {categories.map((c) => {
            return (
              <ListComponent category={c} sx={{ listDecoration: "none" }} />
            );
          })}
        </Grid>
        <Grid item xs={4} md={7} sx={{ border: "1px solid red" }}>
          <BannerImg component="div">
            <ThemeProvider theme={bannertheme1}>
              <Typography variant="subtitle1">Latest trending</Typography>
            </ThemeProvider>
            <ThemeProvider theme={bannertheme2}>
              <Typography variant="h1">Electronic items</Typography>
            </ThemeProvider>
            <LearnMoreButton>
              <ThemeProvider theme={buttontheme}>
                <Typography variant="subtitle1">Learn More</Typography>
              </ThemeProvider>
            </LearnMoreButton>
          </BannerImg>
        </Grid>
        <Grid item xs={4} md={2} sx={{ border: "1px solid red" }}>
          right
        </Grid>
      </Grid>
      <Grid item spacing={4}>
        item3
      </Grid>
    </Grid>
  );
}
