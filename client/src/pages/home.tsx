import { useList } from "@pankod/refine-core"
import { Typography, Box, Stack } from "@pankod/refine-mui"
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from 'components'

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: 'properties',
    config: {
      pagination: {
        pageSize: 5
      }
    }
  })

  const latestProperties = data?.data ?? [];
  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Something went wrong</Typography>

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        {/* <PieChart title="Properties For Sale" value={684} series={[75, 25]} colors={['#875BE8','#D4E8EF']} /> */}
        <PieChart title="Properties For Rent" value={NaN} series={[60, 40]} colors={['#575BE8','#D4E8EF']} />
        <PieChart title="Total Customers" value={NaN} series={[75, 25]} colors={['#112BE8','#D4E8EF']} />
        <PieChart title="Total Cities" value={NaN} series={[75, 25]} colors={['#005BE8','#D4E8EF']} />
      </Box>

      <Stack mt="25px" gap={4} width="100%" direction={{ xs: 'column', lg: 'row' }}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="16px"
        padding="20px"
        bgcolor="#FCFCFC"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
        boxShadow="0px 0px 16px rgba(0,0,0,0.10)"
      >
        <Typography fontSize="18px" fontWeight={600} color="#11142D">
          Latest Properties
        </Typography>
        <Box
          mt="20px"
          sx={{ gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, display: 'grid', flexWrap: 'wrap', gap: 2 }}
        >
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>

    </Box>
  )
}

export default Home