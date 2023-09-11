import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';

function Logo({ sx, ...props }) {
  return (
    <AspectRatio
      ratio="1"
      variant="plain"
      {...props}
      sx={[
        {
          width: 36,
          // borderRadius: 'sm',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 36 32"
          fill="none"
        >
          <image
            xlinkHref="/small_logo.png"
            width="40"
            height="30"
            x="0"
            y="0"
          />
        </svg>
      </div>
    </AspectRatio>
  );
}

export default Logo;
