import Chart from 'react-apexcharts';


let Apexpiecharts =()=>{

    return(
        <>
        <div >

            <div className="container border mt-4">
                <h5 className="p-2 graphs-fontsize">Agenttransfer - caller Intent</h5>
            </div>
            <div className="container border text-left">
                <h6 className="textalign-left p-1 graphs-subtitle">Total: 7,968</h6>
            </div>
            <div className="contianer border graph-piechart-spacing">
        <Chart type="pie" height={250} className="mb-3 mt-1 graph-piechart-spacing" width={313} series={[200,300,210]} options={{
            labels:['Agent Help','Bot','Selp Service'],
            colors: ['#FFB6C1', '#FFAE42', '#008000'],
            stroke:{
                show:false
            }
        }}  />
        </div>
        </div>
        </>
    )
}

export default Apexpiecharts;