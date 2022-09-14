import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

export default function ActionAreaCard({height}: {height: string}) {
  return (
    <Card sx={{ maxWidth: 1000, borderRadius: 5, bgcolor: blueGrey, height:{height} }}>
      <h1>hihi</h1>
    </Card>
  );
}