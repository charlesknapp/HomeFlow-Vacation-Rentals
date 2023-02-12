import { Add, Scale } from '@mui/icons-material'
import { useTable } from '@pankod/refine-core'
import { Box, Stack, TextField, Typography, Select, MenuItem, Menu } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6'
import { useMemo } from 'react'

import { PropertyCard, CustomButton } from 'components'
import propertyDetails from './property-details'
import '../propertyScrollbar.css'

const AllProperties = () => {

  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter, setSorter,
    filters, setFilters,
  } = useTable();

  const allProperties = data?.data ?? [];
  const currentPrice = sorter.find((item) => item.field === 'price')?.order;
  
  // ==== filter logic
  const toggleSort = (field: string) => {
    setSorter([{ field, order: currentPrice === 'asc' ? 'desc' : 'asc' }])
  }

  const currentFilterValues = useMemo(() => {
    const logicalFilters = filters.flatMap((item) => ('field' in item ? item : []));

    return {
      title: logicalFilters.find((item) => item.field === 'title')?.value || '',
      propertyType: logicalFilters.find((item) => item.field === 'propertyType')?.value || '',
    }
  }, [filters])

  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Error...</Typography>

  return (
    <Box>

      <Box sx={{ margin: '0 6px', display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <Stack direction="column" width="100%">
          
          <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            {/* <Typography fontSize={25} fontWeight={700} color="#11142D">
              {!allProperties.length ? 'There are no properties' : `All Properties`}
            </Typography> */}

            {/* <Stack direction="row" justifyContent="space-between" alignItems="center">
              <CustomButton
                title="Add Property"
                handleClick={() => {navigate('/properties/create')}}
                backgroundColor="#475BE8"
                color="#FCFCFC"
                icon={<Add />}
              />
            </Stack> */}
          </Stack>

          <Box mb={2} display="flex" width="100%" justifyContent="space-between" flexWrap={{ xs: 'nowrap', md: 'wrap', }}>
            <Box display="flex" gap={2} width="100%" alignItems='center' justifyContent="flex-end" flexWrap="wrap" mb={{ xs: '20px', sm: 0 }}>
              
              <Box display="flex" marginRight="auto">
                <Typography display='flex' fontSize={25} fontWeight={700} color="#11142D">
                  {!allProperties.length ? 'No Results' : `All Properties`}
                </Typography>
              </Box>
              
              <Box display="flex" alignItems='center' marginLeft="auto" gap={1}>
                <CustomButton
                  title={`Sort price ${currentPrice === 'asc' ? '↑' : '↓'}`}
                  handleClick={() => toggleSort('price')}
                  backgroundColor="#475BE8"
                  color="#FCFCFC"
                />
                <TextField
                  variant="outlined"
                  color="info"
                  placeholder="Search by title..."
                  value={currentFilterValues.title}
                  onChange={(e) => {
                    setFilters([
                      {
                        field: 'title',
                        operator: 'contains',
                        value: e.currentTarget.value ? e.currentTarget.value : undefined
                      }
                    ])
                  }}
                  sx={{
                    maxWidth: "80%",
                  }}
                />
                <Select
                  variant="outlined"
                  color="info"
                  displayEmpty
                  required
                  inputProps={{ 'aria-label' : 'Without label' }}
                  defaultValue=""
                  value={currentFilterValues.propertyType}
                  onChange={(e) => {
                    setFilters([
                      {
                        field: 'propertyType',
                        operator: 'eq',
                        value: e.target.value,
                      }
                    ], 'replace')
                  }}
                >
                  <MenuItem value="">All</MenuItem>
                  {['Studio', 'Apartment', 'Condos',
                  'Townhouse', 'Chalet', 'Farmhouse',
                  'Villa', 'Duplex', 'Triplex', 'Quadplex'].map((type) =>  (
                    <MenuItem key={type} value={type.toLowerCase()}>{type}</MenuItem>
                  ))}
                </Select>
                <CustomButton
                  title="Add"
                  handleClick={() => {navigate('/properties/create')}}
                  backgroundColor="#475BE8"
                  color="#FCFCFC"
                  icon={<Add />}
                />                
              </Box>

            </Box>
          </Box>
        </Stack>
      </Box>

      {/* <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomButton
          title="Add Property"
          handleClick={() => {navigate('/properties/create')}}
          backgroundColor="#475BE8"
          color="#FCFCFC"
          icon={<Add />}
        />
      </Stack> */}

      {/* <Box mt="20px" sx={{ justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {allProperties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
          />
        ))}
      </Box> */}

      <Box sx={{ maxHeight: '72vh', overflowY: 'scroll', gridRowGap: '20px', justifyItems: 'center', display: 'grid', gridTemplateColumns: { sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)', },  }}>
        {allProperties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
          />
        ))}
      </Box>

      {allProperties.length > 0 && (
        <Box
          display="flex"
          gap={2}
          marginTop={3}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <CustomButton
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#475BE8"
            color="#FCFCFC"
            disabled={!(current > 1)}
          />
          <Box 
            display={{ xs: 'hidden', sm: 'flex' }}
            alignItems="center"
            gap="5px"
          >
            Page{' '}<strong>{current} of {pageCount}</strong>
          </Box>
          <CustomButton
            title="Next"
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#475BE8"
            color="#FCFCFC"
            disabled={current === pageCount}
          />
          <Select
            variant="outlined"
            color="info"
            displayEmpty
            required
            inputProps={{ 'aria-label' : 'Without label' }}
            defaultValue={10}
            onChange={(e) => setPageSize(e.target.value ? Number(e.target.value) : 10)}
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <MenuItem key={size} value={size}>Show {size}</MenuItem>
            ))}
          </Select>
        </Box>
      )}
    </Box>
  )
}

export default AllProperties