import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  "./Message.css";


export default function Message({ message }) {
  return (
      <Card style={{ width: '300px'}} variant="outlined" className={message.author === 'Good' ? 'messageGood' : 'message'}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              { message.text }
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              { message.author }
            </Typography>
          </CardContent>
      </Card>
  );
}