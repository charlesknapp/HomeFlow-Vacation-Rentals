import { EmailOutlined, Info, LocationCity, Phone, Place } from '@mui/icons-material'
import { useGetIdentity } from '@pankod/refine-core/'
import { Box, Stack, Typography } from '@pankod/refine-mui'
import { Link } from '@pankod/refine-react-router-v6'

import { AgentCardProp, InfoBarProps } from 'interfaces/agent'

const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack minWidth={{ xs: '100%', sm: 300 }} alignItems="center" display="flex" flex={1} gap={1} flexDirection={{ xs: 'row', md: 'row' }}>
    {icon}
    <Typography fontSize={14} color="#818191">{name}</Typography>
  </Stack>
);

const AgentCard = ({ id, name, email, avatar, noOfProperties }: AgentCardProp ) => {
  const { data: currentUser } = useGetIdentity();
  const generateLink = () => {
    if(currentUser.email === email) return '/my-profile'
    return `/agents/show/${id}`;
  }

  return (
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        bgcolor: '#F8F8F8',
        display: 'flex',
        transition: '0.3s',
        flexDirection: { xs: 'row', sm: 'row' },
        gap: '20px',
        borderRadius: '16px',
        padding: '20px',
        '&:hover': {
          bgcolor: '#FFF',
          boxShadow: '0 22px 45px 2px rgba(176,176,176,0.1)'
        },
      }}
    >
      <img
        src={avatar}
        alt="user"
        width={90}
        height={90}
        style={{ borderRadius: 8, objectFit: 'cover' }}
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
          <Typography fontSize={22} fontWeight={600} color="#11142D">{name}</Typography>
          <Typography fontSize={14} color="#808191">Real-Estate Agent</Typography>
        </Stack>
        
        <Stack direction={{ xs: 'column', md: 'row' }} flexWrap="wrap" justifyContent="space-between" alignItems="flex-start" gap={2}>
          <InfoBar
            icon={<EmailOutlined sx={{ color: '#808191' }}/>}
            name={email}
          />
          <InfoBar
            icon={<Place sx={{ color: '#808191' }}/>}
            name="London"
          />
          <InfoBar
            icon={<Phone sx={{ color: '#808191' }}/>}
            name="+1 512-712-6551"
          />
          <InfoBar
            icon={<LocationCity sx={{ color: '#808191' }}/>}
            name={`${noOfProperties} Properties`}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default AgentCard