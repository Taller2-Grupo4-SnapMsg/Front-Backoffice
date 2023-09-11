/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
//import Link from '@mui/joy/Link';
import useScript from '../../service/loadScripts/useScript';
import LinearProgress from '@mui/joy/LinearProgress';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Badge from '@mui/joy/Badge';
import Sheet from '@mui/joy/Sheet';
import Logo from '../smallLogo/SmallLogo';
import ColorSchemeToggle from '../colorSchemeToggle/ColorSchemeToggle';

const Dropdown = styled('i')(({ theme }) => ({
  color: theme.vars.palette.text.tertiary,
}));


const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default function Sidebar() {
  const status = useScript(`https://unpkg.com/feather-icons`);

  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: {
          xs: 'fixed',
          md: 'sticky',
        },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 1.5,
        py: 3,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '224px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '256px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',

          opacity: 'calc(var(--SideNavigation-slideIn, 0) - 0.2)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Logo />
        <Typography fontWeight="xl">SnapMessage</Typography>
        <ColorSchemeToggle sx={{ ml: 'auto' }} />
      </Box>
      {/*<Input startDecorator={<i data-feather="search" />} placeholder="Search" />*/}
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <List
          sx={{
            '--ListItem-radius': '8px',
            '--List-gap': '4px',
            '--List-nestedInsetStart': '40px',
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem>
              <ListItemButton>
                <ListItemDecorator>
                  <i data-feather="home" />
                </ListItemDecorator>
                <ListItemContent>Home</ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="search" />
              </ListItemDecorator>
              <ListItemContent>Explore</ListItemContent>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Stack spacing={1} direction="row">
                  <Badge badgeContent={2}>
                  <i data-feather="bell" />
                  </Badge>
                </Stack>
              </ListItemDecorator>
              <ListItemContent>Notifications</ListItemContent>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem nested>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="user" />
              </ListItemDecorator>
              <ListItemContent>Profile</ListItemContent>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/messages" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Stack spacing={1} direction="row">
                  <Badge badgeContent={5}>
                    <i data-feather="mail" />
                  </Badge>
                </Stack>
              </ListItemDecorator>
              <ListItemContent>Messages</ListItemContent>
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
        <List
          sx={{
            mt: 'auto',
            flexGrow: 0,
            '--ListItem-radius': '8px',
            '--List-gap': '8px',
          }}
        >
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="life-buoy" />
              </ListItemDecorator>
              <ListItemContent>Supports</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="settings" />
              </ListItemDecorator>
              <ListItemContent>Settings</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar variant="outlined" src="/static/images/avatar/3.jpg" />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography fontSize="sm" fontWeight="lg">
            Siriwat K.
          </Typography>
          <Typography level="body-xs">siriwatk@test.com</Typography>
        </Box>
        <IconButton variant="plain" color="neutral">
          <i data-feather="log-out" />
        </IconButton>
      </Box>
    </Sheet>
  );
}


