import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Box, Typography, Stack } from '@pankod/refine-mui'
import { PieChartProps } from 'interfaces/home'

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box id="chart" flex={1} display="flex" bgcolor="#FCFCFC" flexDirection="row" justifyContent="space-between" alignItems="center" pl={2} py={2} gap={2} boxShadow="0px 0px 16px rgba(0,0,0,0.10)" borderRadius="16px" minHeight="110px" width="fit-content">
      <Stack direction="column">
        <Typography fontSize={14} color="#808191">
          {title}
        </Typography>
        
        <Typography fontSize={24} color="#11142D" fontWeight={700} mt={1}>
          {value}
        </Typography>
      </Stack>

      <ReactApexChart
        options={{
          chart: { type: 'donut' },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
          fill: {
            colors: undefined,
            opacity: 0.9,
            type: 'solid',
            gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: []
            }
          },
        }}
        series={series}
        type="donut"
        width="120px"
      />

    </Box>
  )
}

export default PieChart