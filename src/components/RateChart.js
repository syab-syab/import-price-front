import React from 'react';
import { ResponsiveLine } from '@nivo/line'

const RateChart = ({payCode, ratesArr, dateArr}) => {
  // rateArrにはfloat変換済みのレートの配列を入れる

  const returnData = (arrX, arrY) => {
    const tmp = []
    for(let i = 0, j = arrX.length - 1; i < arrX.length; i++, j--) {
      tmp.push({id: i, x: arrX[j], y: arrY[j]})
    }
    console.log(tmp)
    return tmp
  }
  // returnData(dateArr, ratesArr)

  const data = [{ "id": `JPY/${payCode}`,
    "color": "hsl(122, 70%, 50%)",
    "data": returnData(dateArr, ratesArr)
  }]

  return (
    <div className='
      h-96
    '>
      <p>RateChart</p>
      <ResponsiveLine
        data={data}
        // margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{
          type: 'point',

        }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}

        enablePoints={false}

        isInteractive={false}
        useMesh={false}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: -77,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

export default RateChart