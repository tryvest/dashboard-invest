import React from 'react'
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const logo = (
      <Box sx={{ width: 300, height: 60, ...sx }} >
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 1000 1000" style={{enableBackground: 'new 0 0 1000 1000', xml:space="preserve"}}>
          <style type="text/css">
            .st0{fill='#FFFFFF'}
            .st1{fill='#00D69E'}
            .st2{fill='#002735'}
          </style>


          <rect className="st0" width="1000" height="1000"/>
          <path className="st1" d="M386.47,455.74c-40.16,0-72.84,32.67-72.84,72.84v35c0,7.01,5.7,12.71,12.71,12.71s12.71-5.7,12.71-12.71v-35
	c0-26.15,21.27-47.42,47.42-47.42c7.01,0,12.71-5.7,12.71-12.71S393.47,455.74,386.47,455.74z"/>
          <path className="st1" d="M324.07,470.96c-18.22-29.16-49.61-46.57-83.96-46.57c-7.01,0-12.71,5.7-12.71,12.71s5.7,12.71,12.71,12.71
	c25.53,0,48.86,12.94,62.4,34.63c2.34,3.74,6.37,5.98,10.79,5.98c1.1,0,2.11-0.5,2.77-1.37c1.28-1.71,0.66-3.84-0.13-6.53
	c-0.17-0.59-0.41-1.42-0.57-2.09c1.05-0.4,2.25-0.66,3.35-0.9c2.5-0.54,5.08-1.09,6.11-3.52
	C325.46,474.48,325.21,472.79,324.07,470.96z"/>
          <path className="st1" d="M382.08,424.38c-54.55,0-98.94,44.38-98.94,98.94c0,7.01,5.7,12.71,12.71,12.71s12.71-5.7,12.71-12.71
	c0-40.54,32.98-73.52,73.52-73.52c7.01,0,12.71-5.7,12.71-12.71S389.09,424.38,382.08,424.38z"/>
          <path className="st1" d="M235.73,455.74c-7.01,0-12.71,5.7-12.71,12.71s5.7,12.71,12.71,12.71c26.15,0,47.42,21.27,47.42,47.42v35
	c0,7.01,5.7,12.71,12.71,12.71s12.71-5.7,12.71-12.71v-35C308.56,488.42,275.89,455.74,235.73,455.74z"/>
          <g>
            <path className="st2" d="M528.27,540.41c4.59,0,9.16,0,13.73-0.01c0.28,0,0.42,0.11,0.53,0.34c1.35,2.64,3.69,3.81,6.47,4.13
		c2.67,0.31,5.3,0.04,7.7-1.32c2.66-1.5,3.93-3.92,4.17-6.85c0.15-1.84,0.03-3.7,0.03-5.72c-0.75,0.84-1.44,1.52-2.23,2.1
		c-1.99,1.47-4.23,2.35-6.68,2.51c-4.54,0.31-8.88-0.48-12.84-2.79c-5.24-3.06-7.95-7.81-8.99-13.66c-0.31-1.73-0.39-3.47-0.38-5.22
		c0-7.22,0.01-14.44-0.01-21.67c0-0.7,0.15-0.93,0.89-0.92c3.82,0.04,7.63,0.04,11.45,0c0.67-0.01,0.81,0.19,0.81,0.83
		c-0.02,7.54-0.05,15.09,0.03,22.63c0.05,4.18,2.93,7.29,7.06,7.94c1.82,0.29,3.6,0.19,5.34-0.39c3.44-1.14,5.57-4.11,5.58-7.81
		c0.02-7.4,0.02-14.79-0.01-22.19c0-0.76,0.14-1.03,0.97-1.01c3.79,0.05,7.57,0.04,11.36,0.01c0.64-0.01,0.83,0.13,0.83,0.8
		c-0.02,14.47-0.01,28.95-0.02,43.42c-0.01,5.22-1.34,10.01-4.8,14.04c-2.81,3.29-6.42,5.32-10.57,6.4
		c-5.7,1.47-11.41,1.53-17.02-0.41c-6.73-2.32-10.94-7.11-13.08-13.81C528.46,541.35,528.26,540.93,528.27,540.41z"/>
            <path className="st2" d="M466.08,468.58c9.26,0,18.53,0.01,27.79-0.02c0.75,0,1.03,0.12,1.01,0.96c-0.06,3.67-0.06,7.34,0,11.01
		c0.01,0.88-0.26,1.01-1.06,1.01c-6.7-0.03-13.4-0.01-20.1-0.04c-0.74,0-0.89,0.19-0.89,0.91c0.02,17.85,0.01,35.7,0.03,53.56
		c0,0.72-0.1,0.97-0.92,0.96c-3.93-0.05-7.87-0.05-11.8,0c-0.75,0.01-0.89-0.22-0.89-0.92c0.02-17.82,0.01-35.65,0.04-53.47
		c0-0.84-0.2-1.04-1.04-1.03c-6.67,0.04-13.34,0-20.01,0.04c-0.84,0.01-0.97-0.26-0.96-1.01c0.04-3.7,0.04-7.4,0-11.1
		c-0.01-0.76,0.21-0.88,0.91-0.88C447.49,468.59,456.78,468.58,466.08,468.58z"/>
            <path className="st2" d="M730.91,505.63c-1.72,0-3.41,0-5.09,0c-2.65,0-5.3,0-7.95,0c-0.3,0-0.61,0.09-0.8-0.32
		c-1.08-2.25-3.05-3.25-5.37-3.72c-2.18-0.44-4.34-0.29-6.48,0.26c-0.79,0.21-1.53,0.56-2.12,1.16c-1.29,1.31-1,3.34,0.62,4.2
		c1.18,0.63,2.5,0.73,3.8,0.86c3.93,0.41,7.9,0.56,11.81,1.22c2.87,0.48,5.59,1.39,7.89,3.25c3.28,2.65,4.28,6.26,4.06,10.28
		c-0.34,6.24-3.75,10.33-9.32,12.76c-4.55,1.98-9.36,2.43-14.27,2.09c-3.69-0.26-7.24-1.03-10.53-2.79
		c-4.73-2.52-7.64-6.4-8.73-11.65c-0.1-0.46-0.01-0.61,0.48-0.61c4.16,0.02,8.33,0.01,12.49,0.01c0.24,0,0.46-0.01,0.59,0.25
		c1.13,2.29,3.2,3.2,5.54,3.62c2.54,0.46,5.09,0.5,7.62-0.13c0.65-0.16,1.26-0.43,1.82-0.82c0.99-0.7,1.44-1.66,1.28-2.86
		c-0.14-1.13-0.87-1.8-1.88-2.19c-1.27-0.49-2.61-0.54-3.94-0.7c-3.64-0.42-7.31-0.61-10.92-1.26c-3.45-0.61-6.58-1.96-8.99-4.6
		c-4.44-4.87-4.19-12.92,0.52-17.77c2.44-2.52,5.48-4,8.85-4.77c6.42-1.46,12.77-1.36,18.9,1.29c5.36,2.32,8.8,6.33,10.02,12.11
		C730.85,505.05,730.87,505.31,730.91,505.63z"/>
            <path className="st2" d="M747.48,513.3c0-3.42-0.02-6.33,0.02-9.24c0.01-0.64-0.14-0.84-0.81-0.83c-3.09,0.04-6.18,0-9.26,0.03
		c-0.64,0.01-0.89-0.09-0.88-0.83c0.05-3.44,0.03-6.87,0.01-10.31c-0.01-0.61,0.17-0.79,0.78-0.78c2.18,0.04,4.37,0.02,6.55,0.01
		c2.68-0.01,3.6-0.94,3.6-3.64c0.01-3.7,0.04-7.4-0.03-11.09c-0.02-0.93,0.28-1.07,1.11-1.06c3.67,0.05,7.34,0.05,11.01,0
		c0.81-0.01,1.07,0.13,1.06,1.01c-0.05,4.66-0.01,9.32-0.04,13.98c0,0.65,0.16,0.83,0.82,0.83c4.66-0.03,9.32,0.01,13.98-0.04
		c0.81-0.01,0.94,0.24,0.93,0.97c-0.04,3.35-0.04,6.7,0,10.05c0.01,0.7-0.13,0.92-0.88,0.91c-4.66-0.04-9.32,0-13.98-0.04
		c-0.7,0-0.87,0.19-0.87,0.87c0.03,4.4,0.01,8.79,0.02,13.19c0,1.23,0.09,2.45,0.48,3.62c0.74,2.19,2.61,3.44,5.36,3.59
		c3.06,0.16,6.11-0.04,9.15-0.38c0.6-0.07,0.71,0.09,0.71,0.65c-0.02,3.73-0.02,7.45,0,11.18c0,0.47-0.05,0.73-0.62,0.79
		c-4.09,0.47-8.19,0.73-12.29,0.51c-4.25-0.24-8.19-1.41-11.29-4.56c-2.62-2.66-3.81-5.99-4.32-9.6
		C747.3,519.67,747.54,516.22,747.48,513.3z"/>
            <path className="st2" d="M588.39,491.36c2.04,0,4.08,0.03,6.12-0.02c0.64-0.01,0.88,0.21,1.08,0.79c3.29,9.94,6.61,19.87,9.92,29.8
		c0.02,0.05,0.02,0.12,0.04,0.17c0.15,0.33,0.19,0.8,0.69,0.78c0.44-0.02,0.51-0.43,0.61-0.75c0.67-2.04,1.34-4.08,2-6.12
		c2.61-7.97,5.22-15.93,7.81-23.91c0.18-0.54,0.37-0.77,1-0.77c4.05,0.04,8.1,0.03,12.15,0.01c0.58,0,0.85,0,0.57,0.73
		c-4.74,12.59-9.45,25.2-14.18,37.79c-0.52,1.39-1.2,2.7-2.09,3.9c-1.36,1.84-3.15,2.98-5.42,3.34c-1.89,0.3-3.78,0.31-5.65-0.07
		c-2.93-0.6-4.89-2.46-6.21-5.04c-1.47-2.87-2.42-5.96-3.56-8.97c-3.88-10.25-7.73-20.52-11.6-30.78c-0.34-0.91-0.34-0.91,0.61-0.91
		C584.31,491.36,586.35,491.36,588.39,491.36z"/>
            <path className="st2" d="M493.3,524.47c0-3.78-0.09-7.57,0.02-11.35c0.12-3.83,0.84-7.56,2.54-11.04c2.69-5.54,7.29-8.57,13.16-9.9
		c4.01-0.91,8.09-0.81,12.16-0.81c1.38,0,1.38,0,1.38,1.37c0,3.55-0.03,7.1,0.02,10.65c0.01,0.81-0.24,0.94-0.97,0.93
		c-2.21-0.02-4.44-0.21-6.63,0.17c-4.99,0.86-8.49,4.98-8.55,10.19c-0.08,7.1-0.05,14.2-0.03,21.31c0,0.77-0.18,0.95-0.95,0.95
		c-3.81-0.04-7.63-0.03-11.44-0.01c-0.6,0-0.77-0.14-0.77-0.76c0.03-3.9,0.02-7.8,0.02-11.7
		C493.27,524.47,493.28,524.47,493.3,524.47z"/>
            <path className="st2" d="M668.89,522.38c-0.35,0-0.5,0.15-0.67,0.43c-0.65,1.12-1.63,1.87-2.8,2.4c-1.58,0.72-3.27,1-4.99,1.13
		c-3.22,0.25-6.33-0.09-9.22-1.67c-1.36-0.74-2.5-1.7-3.09-3.19c-0.73-1.86-0.15-2.73,1.8-2.73c9.99,0,19.98,0,29.97,0.01
		c0.51,0,0.86,0,0.97-0.66c0.48-2.91,0.74-5.83,0.36-8.78c-0.91-7.04-4.34-12.44-10.58-15.91c-5.45-3.03-11.33-3.55-17.36-2.41
		c-6.37,1.2-11.54,4.4-15.06,9.94c-3.61,5.69-4.47,11.94-3.14,18.45c1.74,8.54,6.71,14.42,15.08,17.18
		c5.68,1.87,11.45,1.57,17.1-0.09c7.15-2.1,11.77-6.83,13.95-14.09C677.04,522.39,672.96,522.39,668.89,522.38z M647.92,508.06
		c1.26-3.36,3.76-5.31,7.15-6.15c3.43-0.85,6.82-0.7,10.02,0.94c1.77,0.91,3.16,2.19,3.54,4.26c0.25,1.32-0.14,1.79-1.48,1.8
		c-3.12,0.01-6.23,0-9.35,0c-3.09,0-6.17-0.02-9.26,0.02C647.8,508.93,647.66,508.77,647.92,508.06z"/>
          </g>
        </svg>

      </Box>

      // eslint-disable-next-line global-require
      // <img src={require('../images/Tryvest_logo.jpg')} width='100%' alt='Logo' />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
