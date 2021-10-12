import Chart from 'react-apexcharts';


let Apexsemidonut =()=>{

    return(
        <>
        <div >

            <div className="container border mt-4">
                <h5 className="p-2 graphs-fontsize">Containment</h5>
            </div>
            <div className="container border text-left">
                <h6 className="textalign-left p-1 graphs-subtitle">Total: 7,968</h6>
            </div>
            <div className="contianer border">
        <Chart type="donut" height={251} width={290}  className="m-0 p-0"  series={[100,200,210]} options={{
            labels:['Agent Help','Bot','Selp Service'],
            colors: ['#FFB6C1', '#FFAE42', '#008000'],
            stroke:{
                show:false
            },
            legend: {
                show: false,
                
             },
            
            plotOptions:{
                pie:{
                    startAngle:-90,
                    endAngle:90,
                    horizontalAlign: 'center', 
                    
      
                   
                },
                
            }
        }}  />
        <div className="container donutchart-contained">
            <p className="donutchart-margintop textalign-left">Contained; XXXX</p>
            <p className="textalign-left pb-3">NonContained; XXXX</p>
        </div>
        </div>
        </div>
        </>
    )
}

export default Apexsemidonut;