import React from 'react'

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Grid,
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

import styles from './ResultsList.module.css'

import { formatDate } from '../../utils/dateUtils';

const getPosterUrl = (imageUri) =>
  imageUri
    ? `https://image.tmdb.org/t/p/w200${imageUri}`
    : 'https://placehold.co/200x300?text=No+image'

const ResultsList = (props) => (
  <React.Fragment>
    {props.movies.map((item) => (
      <Grid container xs={12}>
        <Grid item xs={2}>
          <img src={getPosterUrl(item.poster_path)} className={styles.poster} />
        </Grid>
        <Grid item xs={3}>
          {item.original_title}
        </Grid>
        <Grid item xs={2}>
          {formatDate(item.release_date)}
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={() => props.onAdd(item)}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    ))}
  </React.Fragment>
)

export default ResultsList
