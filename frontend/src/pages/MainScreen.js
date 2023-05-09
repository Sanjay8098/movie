import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Modal,
  Typography,
} from "@mui/material";

const MainScreen = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [img, setImg] = useState("");
  const [discription, setDiscription] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  React.useEffect(() => {
    const getMovies = async () => {
      await axios
        .get("http://localhost:3003/api/get")
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setData(res.data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getMovies();
  }, []);
  const handleSubmit = async () => {
    try {
      await axios
        .post("http://localhost:3003/api/add", {
          title: title,
          year: year,
          genre: genre,
          dis: discription,
          img: img,
        })
        .then((res) => {
          console.log(res);
          if (res.data) {
            alert(res.data);
            // setOpen(!open)
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <center>
        <h1>Welcome to Home</h1>
      </center>
      {/* <button style={{ float: "right" }} onClick={() => setOpen(!open)}>
        Add new
      </button> */}
      <button style={{ 
  float: "right",
  backgroundColor: "green",
  fontSize: "20px"
}} onClick={() => setOpen(!open)}>
  Add new
</button>

      <Modal open={open}>
        <Box sx={style}>
          <center>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              Add a movie
            </Typography>
          </center>
          {/* <Typography>title:</Typography>
          <input onChange={(e) => setTitle(e.target.value)} />
          <Typography>year:</Typography>
          <input onChange={(e) => setYear(e.target.value)} />
          <Typography>genre:</Typography>
          <input onChange={(e) => setGenre(e.target.value)} />
          <Typography>image url:</Typography>
          <input onChange={(e) => setImg(e.target.value)} />
          <Typography>discription:</Typography>
          <input onChange={(e) => setDiscription(e.target.value)} />
          <br /> */}
          <center>
            <div>
              {/* <Button onClick={handleSubmit}>Submit</Button>
              <Button onClick={() => setOpen(!open)}>cancel</Button> */}

              <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Title:</Typography>
<input sx={{ p: 1, borderRadius: 2, border: '1px solid blue', mb: 2 }} onChange={(e) => setTitle(e.target.value)} />

<Typography sx={{ fontWeight: 'bold', mb: 1 }}>Year:</Typography>
<input sx={{ p: 1, borderRadius: 2, border: '1px solid grey', mb: 2 }} onChange={(e) => setYear(e.target.value)} />

<Typography sx={{ fontWeight: 'bold', mb: 1 }}>Genre:</Typography>
<input sx={{ p: 1, borderRadius: 2, border: '1px solid grey', mb: 2 }} onChange={(e) => setGenre(e.target.value)} />

<Typography sx={{ fontWeight: 'bold', mb: 1 }}>Image URL:</Typography>
<input sx={{ p: 1, borderRadius: 2, border: '1px solid grey', mb: 2 }} onChange={(e) => setImg(e.target.value)} />

<Typography sx={{ fontWeight: 'bold', mb: 1 }}>Description:</Typography>
<input sx={{ p: 1, borderRadius: 2, border: '1px solid grey', mb: 2 }} onChange={(e) => setDiscription(e.target.value)} />

<Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
  <Button sx={{ mr: 1 }} onClick={handleSubmit}>Submit</Button>
  <Button onClick={() => setOpen(!open)}>Cancel</Button>
</Box>

            </div>
            <div>
              
            </div>
          </center>
        </Box>
      </Modal>
      <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <div style={{ flexDirection: "row", display: "flex" }}>
              {data.map((item, index) => (
                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                  <CardHeader
                    title={item.title}
                    subheader={item.release_year + ", " + item.genre}
                  ></CardHeader>
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.img}
                    alt="Paella dish"
                  />
                  
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.discription}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MainScreen;
