import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import MenuItem from '@material-ui/core/MenuItem';
import { mainListItems, secondaryListItems } from '../components/listItems';
import List from '@material-ui/core/List';
// import Link from '@material-ui/core/Link';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <br></br>
        <Link href="/dashboard" color="secondary">
          Go to the dashboard page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}