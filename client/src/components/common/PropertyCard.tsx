import { Place } from '@mui/icons-material'
import { Link } from '@pankod/refine-react-router-v6'
import { Typography, Box, Card, CardMedia, CardContent, Stack } from '@pankod/refine-mui'

import { PropertyCardProps } from 'interfaces/property'

const PropertyCard = ({ id, title, location, price, photo }: PropertyCardProps) => {
  return (
    <Card
      component={Link}
      to={`/properties/show/${id}`}
      sx={{
        bgcolor: '#F8F8F8',
        width: '96%',
        padding: '10px',
        borderRadius: '16px',
        transition: '0.3s',
        '&:hover': {
          bgcolor: '#FFF',
          boxShadow: '0 22px 45px 2px rgba(176,176,176,0.1)',
          // transform: 'Scale(1.02)'
        },
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        image={photo}
        alt="Card image"
        sx={{
          borderRadius: '10px',
          width: {
            xs: '100%',
            sm: '100%',
            md: '100%',
          },
          height: '190px',
        }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '10px', paddingX: '5px', }}>
        <Stack direction="column" gap={1}>
          <Typography sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '23ch', fontSize: 16, fontWeight: 500, color: "#11142D", }}>{title}</Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Place
              sx={{
                fontSize: 18,
                color: '#11142D',
                marginTop: 0.5,
              }}
            />
            <Typography fontSize={14} color='#808191'>{location}</Typography>           
          </Stack>  
        </Stack>     
        <Box px={1.5} py={0.5} borderRadius={1} bgcolor="#DADEFA" height="fit-content">
          <Typography fontSize={12} fontWeight={600} color="#475BE8">${price}</Typography>
        </Box> 
      </CardContent>
    </Card>
  )
}

export default PropertyCard