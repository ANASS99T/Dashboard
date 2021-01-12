import React from "react";
import { Bar, Line, Doughnut, Pie } from "react-chartjs-2";

export const Orders = () => {
  return (
    <Line
      data={{
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
        datasets:[
            {
                label: 'Total Orders',
                data: [40,30,20,60,20,90,20,30,40,30,20,60],
                // backgroundColor:'#fff', // it can be an array
                borderColor: '#fff',  // it can be an array
                borderWidth: 2,
                barPercentage: 0.4,
                // offset: false
                minBarLength:0,
                pointBackgroundColor:'#fff',
                pointBorderColor:'#fff',
                fill: false,
            }
        ]
      }}
      height={100}
      // width={700}
      
      options={{ 
          maintainAspectRatio: false,
          layout:{
            padding:{
                left: 5,
                right: 5,
                bottom: 5,
                top:5
            },
        },
          legend:{
              display: false,
              rtl:true
          },
          title:{
              display:false,
              text:'Total Profit',
          },
          scales:{
              yAxes:[{
                    display:false,
                    ticks:{
                        fontColor:'white',
                        beginAtZero:true
                    }
                }],
            xAxes:[{
                display:false,
                ticks:{
                    fontColor:'white',
                },
                gridLines: {
                  display: false,
                },
            }],
            
          }
        }}
        
    />
  );
};


export const Profit = () => {
    return (
      <Line
        data={{
          labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
          datasets:[
              {
                  label: 'Total Profit',
                  data: [7800, 6000,10000,7890,6540,1250,20000,15000,7800, 6000,10000,7890],
                //   backgroundColor:'#D7DAE3', // it can be an array
                  borderColor: '#D7DAE3',  // it can be an array
                  borderWidth: 2,
                  barPercentage: 0.4,
                  // offset: false
                  fill: false,
                  pointBackgroundColor:'white',
                  pointBorderColor:'#fff'
              }
          ]
        }}
        height={100}
        // width={700}
        
        options={{ 
            maintainAspectRatio: false,
            layout:{
                padding:{
                    left: 5,
                    right: 5,
                    bottom: 5,
                    top:5
                },
            },
            legend:{
                display: false,
                rtl:true,
            },
            title:{
                display:false,
                text:'Total Profit',
            },
            scales:{
                yAxes:[{
                      display:false,
                      ticks:{
                          fontColor:'white',
                          beginAtZero:true
                      },
                      
                  }],
              xAxes:[{
                  display:false,
                  ticks:{
                      fontColor:'white',
                  },
                  gridLines: {
                    display: false,
                  },
              }],
              
            },
            // stacked: true,
            
        }}
          
      />
    );
  };


  export const Feedbacks = () => {
    return (
      <Doughnut //Pie
        data={{
          labels: ["like", "love","happy","sad", "angry", "dislike"],
          datasets:[
              {
                    label: 'Total Feedback',
                    data: [120, 80, 30, 5, 25,30],
                    backgroundColor:[
                        '#2196f3',
                        '#ef5350',
                        '#43a047',
                        '#616161',
                        'rgb(255, 42, 0)',
                        '#bdbdbd'
                    ],
                    // borderJoinStyle: "miter",
                    // borderWidth: 0,
                    // indexLabelPlacement: "outside",
                    // weight:'30%',
             
              }
          ],
          
        }}
        // height={100}
        // width={100}
        options={{ 
            maintainAspectRatio: true,
            // responsive: true,
            // cutoutPercentage: 120,
            legend:{
                display: true,
                rtl:true,
                position:'left'
            },
            scales:{
                yAxes:[{
                      display:false,
                      ticks:{
                          fontColor:'white'
                      },
                      
                  }],
              xAxes:[{
                  display:false,
                  ticks:{
                      fontColor:'white',
                  },
                  gridLines: {
                    display: false,
                  },
              }],
              
            },
        }}
          
      />
    );
  };


  export const Customers = () => {
    return (
      <Bar
        data={{
          labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
          datasets:[
              {
                  label: 'Total Orders',
                  data: [5,15,25,40,30,50,20,15,5,15,25,40],
                  backgroundColor:'#fff', // it can be an array
                  borderColor: '#fff',  // it can be an array
                  borderWidth: 2,
                  barPercentage: 0.4,
                  // offset: false
                  minBarLength:0,
                  pointBackgroundColor:'#fff',
                  pointBorderColor:'#D7DAE3'
              }
          ]
        }}
        height={100}
        // width={700}
        
        options={{ 
            maintainAspectRatio: false,
            layout:{
              padding:{
                  left: 5,
                  right: 5,
                  bottom: 5,
                  top:5
              },
          },
            legend:{
                display: false,
                rtl:true
            },
            title:{
                display:false,
                text:'Total Profit',
            },
            scales:{
                yAxes:[{
                      display:false,
                      ticks:{
                          fontColor:'white',
                          beginAtZero:true
                      }
                  }],
              xAxes:[{
                  display:false,
                  ticks:{
                      fontColor:'white',
                  },
                  gridLines: {
                    display: false,
                  },
              }],
              
            }
          }}
          
      />
    );
  };


// export const Feedbacks1 = () =>{

//   return(
//     <Bar
//       data={
//         {
//           labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
//           datasets:[
//             {
//                   label: 'Total Feedback',
//                   data: [120, 80, 30, 5, 25,30],
//                   backgroundColor:[
//                       '#2196f3',
//                       '#f44336',
//                       '#43a047',
//                       '#616161',
//                       '#d50000',
//                       '#bdbdbd'
//                   ],
//                   // borderWidth: 0,  
//             },
//             {
//               label: 'Total Feedback',
//               data: [30
//                 ,25
//                 ,80
//                 ,5
//                 ,120
//                 ,30],
//               backgroundColor:[
//                   '#2196f3',
//                   '#f44336',
//                   '#43a047',
//                   '#616161',
//                   '#d50000',
//                   '#bdbdbd'
//               ],
//               // borderWidth: 0,  
//             },
//             {
//               label: 'Total Feedback',
//               data: [80,
//                 5,
//                 120,
//                 30,
//                 30,
//                 25],
//               backgroundColor:[
//                   '#2196f3',
//                   '#f44336',
//                   '#43a047',
//                   '#616161',
//                   '#d50000',
//                   '#bdbdbd'
//               ],
//               // borderWidth: 0,  
//             },
//             {
//               label: 'Total Feedback',
//               data: [25,
//                 30,
//                 80,
//                 5,
//                 120,
//                 30],
//               backgroundColor:[
//                   '#2196f3',
//                   '#f44336',
//                   '#43a047',
//                   '#616161',
//                   '#d50000',
//                   '#bdbdbd'
//               ],
//               // borderWidth: 0,  
//             }
//         ]
//         }
//       } 
//       height={100}
//         // width={700}
        
//         options={{ 
//             maintainAspectRatio: false,
//             layout:{
//               padding:{
//                   left: 5,
//                   right: 5,
//                   bottom: 5,
//                   top:5
//               },
//           },
//             legend:{
//                 display: false,
//                 rtl:true
//             },
//             title:{
//                 display:false,
//                 text:'Total Profit',
//             },
//             scales:{
//                 yAxes:[{
//                       display:false,
//                       ticks:{
//                           fontColor:'white',
//                           beginAtZero:true,

//                       },
//                       stacked: true
//                   }],
//               xAxes:[{
//                   display:false,
//                   ticks:{
//                       fontColor:'white',
//                   },
//                   stacked:true,
//                   gridLines: {
//                     display: false,
//                   },
//               }],
              
//             }
//           }} 

    
    
    
    
    
    
    
    
//     />
//   )
// }