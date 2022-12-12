import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CHECKER() {
  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
      <Checkbox
        {...label}
        icon={<ThumbUpIcon />}
        checkedIcon={<ThumbUpIcon />}
      />
    </div>
  );
}