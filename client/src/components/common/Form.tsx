import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from '@pankod/refine-mui'
import { FormProps } from 'interfaces/common'
import CustomButton from './CustomButton'

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage }: FormProps) => {
  return (
    <Box>
      <Typography marginLeft={1} fontSize={25} fontWeight={700} color="#11142D">
        {type} a Property
      </Typography>

      <Box mt={2.5} borderRadius="12px" padding="20px" bgcolor="#FCFCFC">
        <form style={{
          // marginTop: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 6,
          gap: '20px' }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          {/* PROPERTY TITLE CONTROL */}
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>
              Property Title
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              style={{ background: 'transparent', fontSize: '16px', borderWidth: 1, borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, color: '#919191' }}
              { ... register('title', { required: true }) }
            />
          </FormControl>

          {/* PROPERTY DESCRIPTION CONTROL */}
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>
              Property Description
            </FormHelperText>
            <TextareaAutosize 
              minRows={5}
              required
              id="outlined-basic"
              variant="outlined"
              color="info"
              style={{ width: '100%', background: 'transparent', fontSize: '16px', borderWidth: 1, borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, padding: 10, color: '#919191' }}
              { ... register('description', { required: true }) }
            />
          </FormControl>

          {/* PROPERTY TYPE CONTROL */}
          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>
                Select Property Type
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{  'aria-label': 'Without label' }}
                defaultValue = "apartment"
                { ... register('propertyType', { required: true }) }
              >
                <MenuItem value="studio">Studio</MenuItem>
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="condos">Condos</MenuItem>
                <MenuItem value="townhouse">Townhouse</MenuItem>
                <MenuItem value="chalet">Chalet</MenuItem>
                <MenuItem value="farmhouse">Farmhouse</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="duplex">Triplex</MenuItem>
                <MenuItem value="duplex">Quadplex</MenuItem>
              </Select>
            </FormControl>

          {/* PROPERTY PRICE CONTROL */}
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>
              Price (per night)
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              placeholder="e.g. 2295"
              type="number"
              variant="outlined"
              style={{ background: 'transparent', fontSize: '16px', borderWidth: 1, borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, color: '#919191' }}
              { ... register('price', { required: true }) }
            />
          </FormControl>
          </Stack>

          {/* PROPERTY PRICE CONTROL */}
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>
              Property Location
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              placeholder="e.g. Denver, Austin, Seattle, Phoenix ..."
              color="info"
              variant="outlined"
              style={{ background: 'transparent', fontSize: '16px', borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, color: '#919191' }}
              { ... register('location', { required: true }) }
            />
          </FormControl>

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography color="#11142D" fontSize={16} alignItems="center" borderRadius="16px" fontWeight={500} my="10px">
                Property Photo
              </Typography>
              <Button component="label" sx={{ width: "fit-content", color: '#475BE8', textTransform: 'capitalize', fontSize: 16 }}>
                Upload *
                <input 
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0])
                  }}
                />
              </Button>
            </Stack>
            <Typography fontSize={14} color="#808191" sx={{ wordBreadk: 'break-all' }}>
              {propertyImage?.name}
            </Typography>
          </Stack>

          <CustomButton 
            type="submit"
            title={formLoading ? 'Submitting...' : 'Submit'}
            backgroundColor='#475be8'
            color="#FCFCFC"
          />

        </form>
      </Box>
    </Box>
  )
}

export default Form