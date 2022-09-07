import React, { useEffect, useState } from 'react'
import './App.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './index.css';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

function App() {

    const [loading, setLoading] = React.useState(true);
    function handleClick() {
      setLoading(true);
    }

  const [url, setUrl] = useState("");

  function shortenUrl() {
    let data = { url };
    let shortenedUrl = "https://url-shortener-spring-rishabh.herokuapp.com/";
    fetch('https://url-shortener-spring-rishabh.herokuapp.com/generate/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      response.json().then((result) => {
        shortenedUrl += result.shortLink;
        console.log(shortenedUrl);
        document.getElementById("shortUrl").innerHTML = shortenedUrl;
        document.getElementById("shortUrl").href = shortenedUrl;
      })
    })
  }
  return (
    <div>
      <div id='form'>
        <Grid
          container
          spacing={0}
          align="center"
          justify="center"
          direction="column"
          style={{ backgroundColor: 'white' }}
        >
          <Grid item style={{ backgroundColor: 'white' }}>
            <h2>URL Shortener Using Spring Boot and ReactJS</h2>
            <br /><br />
            <TextField
              required
              id="input-url"
              label="Enter your URL"
              value={url}
              onChange={(e) => { setUrl(e.target.value) }}
              name="url"
            />
          </Grid>
          <br /><br />
          <Grid item style={{ backgroundColor: 'white' }}>
            <i>
              <p>
                <Button variant="outlined" color="success" type="button" onClick={shortenUrl}>Shorten</Button>
              </p>
            </i>
          </Grid>
          <Grid item style={{ backgroundColor: 'white' }}>
            <i>
              <br/>
                <a href='#' id="shortUrl"></a>
            </i>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default App;
