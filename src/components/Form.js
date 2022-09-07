import React from 'react';
import LinkIcon from '@mui/icons-material/Link';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import '../index.css';

function Form() {
    return (
        <div>
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
                <br/><br/>
                <InputLabel htmlFor="input-url">
                        Enter your URL
                    </InputLabel>
                    <Input
                        id="input-url"
                        startAdornment={
                            <InputAdornment position="start">
                                <LinkIcon />
                            </InputAdornment>
                        }
                    />
                </Grid>
                <br/><br/>
                <Grid item style={{ backgroundColor: 'white' }}>
                    <i>
                        <p>
                        <Button variant="outlined" color="success">Shorten</Button>
                        </p>
                    </i>
                </Grid>
            </Grid>
        </div>
    );
}

export default Form;