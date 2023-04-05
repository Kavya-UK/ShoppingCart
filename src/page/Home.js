import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Shoedetails } from "../componets/ShoeDetails";
import MultiActionAreaCard from "../componets/ShoeCard";

export default function Home() {
  return (

    <React.Fragment>
      <CssBaseline />
      <Container sx={{ pt: 12 }} maxWidth="lg">
        <Grid
          container
          sx={{
            "--Grid-borderWidth": "2px",
            border: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            borderRadius:2
            
          }}
        >
          {Shoedetails.map((info) => {
            return (
              <Grid sx={{ pl: 5, py: 2 }} md={4} xs={12} sm={6}>
                <MultiActionAreaCard
                  shoeId={info.id}
                  srcImage={info.image}
                  shoeTitle={info.name}
                  shoeInfo={info.description}
                  shoePrice={info.price}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>

    // <div>

    // </div>
  );
}
