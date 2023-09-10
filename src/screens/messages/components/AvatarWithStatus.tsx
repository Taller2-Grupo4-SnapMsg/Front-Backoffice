/*Codigo asociado al avartar*/

import * as React from 'react';
import Badge from '@mui/joy/Badge';
import Avatar, { AvatarProps } from '@mui/joy/Avatar';

type AvatarWithStatusProps = AvatarProps & {
  online?: boolean;
};

/*El componente AvatarWithStatus también acepta todas 
las propiedades que son válidas para el componente 
Avatar de Material-UI, ya que hereda de AvatarProps.
Con ...rest le indica que herede todas las propiedades*/
export default function AvatarWithStatus({
  online = false,
  ...rest
}: AvatarWithStatusProps) {
  return (
    <div>
      {/*Badge es el componente que me permite agregar el circulito para mostrar si esta online*/}
      <Badge
        color={online ? 'success' : 'neutral'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeInset="6px 6px"
      >
        <Avatar {...rest} />
      </Badge>
    </div>
  );
}
