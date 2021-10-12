import Chart from 'react-apexcharts';


let Apexhorizontalbarcharts =()=>{

    return(
        <>
        <div >

            <div className="container border mt-4">
                <h5 className="p-2 graphs-fontsize">Applevel Containment</h5>
            </div>
            <div className="container border text-left">
                <h6 className="textalign-left p-1 graphs-subtitle" >Total: 7,968</h6>
            </div>
            <div className="contianer border">
        <Chart type="bar" className="mb-3 barchart-top-padding" height={243}  series={[
            {
                name:'company1',
                data:[1060,200,161,284,565,724,184,362],
                colors:['#00000','red']
            }
        ]} 
        options = {{
            
            chart: {
            type: 'bar',
            height: 350,
            
          },
          legend: {
            show: false,
            
         },
          plotOptions: {
            bar: {
              barHeight: '100%',
              distributed: true,
              horizontal: true,
              columnWidth:40,
             
              dataLabels: {
                position: 'center'
              },
            }
          },
          colors: ['#FFB6C1', '#FFAE42', '#008000'],
          dataLabels: {
            enabled: true,
            textAnchor: 'middle',
            style: {
              colors: ['#fff']
            },
            formatter: function (val, opt) {
              return val;
            },
           
            dropShadow: {
              enabled: true
            }
          },
          stroke: {
            width: 1,
            align:['center'],
            colors: ['#fff']
          },
          xaxis: {
            labels: {
                show: true,
                style: {
                    fontSize: '12px',
                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-title',
                },
              },
              
            categories: ['Refil', 'Order Status', 'balance & payment','Eligibility','pricing','Retail Pharmacy locator','SOBA & EOB','Supplies'],
          },
          yaxis: {
            labels: {
              show: true,
              style: {
                color: undefined,
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-title',
            },
            },
            show: true,
            showAlways: true,
            title: {
                text: 'calls',
                rotate: -90,
                offsetX: 0,
                offsetY: 0,
                style: {
                    color: undefined,
                    fontSize: '14px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-title',
                },
            },
            crosshairs: {
                show: true,
                position: 'back',
                stroke: {
                    color: '#b6b6b6',
                    width: 1,
                    dashArray: 0,
                },
            },
            tooltip: {
                enabled: true,
                offsetX: 0,
            },
            
          },
        //   title: {
        //       text: 'Custom DataLabels',
        //       align: 'center',
        //       floating: true
        //   },
        //   subtitle: {
        //       text: 'Category Names as DataLabels inside bars',
        //       align: 'center',
        //   },
          tooltip: {
            theme: 'dark',
            x: {
              show: true
            },
            y: {
              title: {
                formatter: function () {
                  return 'hello'
                }
              }
            }
          }
          }}
        />
        </div>
        </div>
        </>
    )
}

export default Apexhorizontalbarcharts;