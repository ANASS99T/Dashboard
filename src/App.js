import React from 'react'
import './App.css';
import {Orders, Profit, Feedbacks, Customers} from './comp/Charts'
import CountUp from 'react-countup';

import {TimeLine, TimeLineCards, VirtTimeline} from './comp/TimeLine'
import DenseTable from './comp/Table'



function App() {
  return (
    <div className="container dashboard my-3 py-2">
      <div className="header">
        <h1>Dashboard Ecommerce</h1>
        <div className="overView p-3 mb-2">Ecommerce Overview</div>
      </div>
      <div className="cards">
        <div className="row ">
          <div className="col-lg-4 col-md-6 my-2">
            <div className="card totalProfit">
              <div className="card-body">
              <div className="body">
                  <Profit />
                </div>
                <div className="row mt-1">
                  <div className="col-4 left-align">
                    <i className="fas fa-chart-pie logo"></i>
                    <h4 className='text-left'>Profit</h4>
                  </div>
                  <div className="col-8 right-align">
                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col-8"><h5 className='float-end'><CountUp start={0} end={7890} duration={2} separator=' ' /> DH</h5></div>
                    </div>
                    <div className="row">
                      <div className="col-4"><h5 className='float-end'>Total</h5></div>
                      <div className="col-8"><h5 className='float-end'><CountUp start={0} end={15000} duration={2} separator=' ' /> DH</h5></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 my-2">
          <div className="card orders">
              <div className="card-body">
                  <div className="body">
                    <Orders/>  
                  </div>
                  <div className="row mt-1">
                  <div className="col-4 left-align">
                  <i className="fas fa-shopping-cart logo"></i>
                    <h4 className='text-left'>Orders</h4>
                  </div>
                  <div className="col-8 right-align">
                    <div className="row">
                      <div className="col-6"></div>
                      <div className="col-6"><h5 className='float-end'><CountUp start={0} end={60} duration={2} separator=' ' /></h5></div>
                    </div>
                    <div className="row">
                      <div className="col-7"><h5 className='float-end'>Total</h5></div>
                      <div className="col-5"><h5 className='float-end'><CountUp start={0} end={250} duration={2} separator=' ' /></h5></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 my-2">
            <div className="card customers">
              <div className="card-body">
                <div className="body">
                <Customers/>
                </div>
                <div className="row mt-1">
                  <div className="col-6 left-align">
                    <i className="fas fa-users logo"></i>
                    <h4 className='text-left'>Customers</h4>
                  </div>
                  <div className="col-6 right-align">
                    <div className="row">
                      <div className="col-6"></div>
                      <div className="col-6"><h5 className='float-end'><CountUp start={0} end={40} duration={2} separator=' ' /></h5></div>
                    </div>
                    <div className="row">
                      <div className="col-7"><h5 className='float-end'>Total</h5></div>
                      <div className="col-5"><h5 className='float-end'><CountUp start={0} end={200} duration={2} separator=' ' /></h5></div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-6 my-2">
            <div className="card feedback">
              <div className="card-body">
                
                  <div className="body">
                    <Feedbacks/>  
                  </div>
                
                <div className="row mt-1">
                  <div className="col-6 left-align">
                  <i className="fas fa-thumbs-up logo"></i>
                    <h4 className='text-left'>Feedbacks</h4>
                  </div>
                  <div className="col-6 right-align">
                    
                    <div className="row">
                      <div className="col"><h5 className='float-end'>Total</h5></div>
                    </div>
                    <div className="row">
                      <div className="col"><h5 className='float-end'><CountUp start={0} end={300} duration={2} separator=' ' /></h5></div>                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
       
        <div className="row">
          <div className="col-lg-4 col-sm-12 my-2">
           <div className="card">
              <div className="card-header">
                <h4 className='text-left'>Feedbacks</h4>
                <i className="fas fa-thumbs-up logo"></i>
              </div>
              <div className="card timeline">
                <div className="card-body">
                  <Feedbacks/>
                </div>
              </div>
           </div>
            <div className="card TimeLine-box mt-2">
              <div className="card-body">
                <VirtTimeline/>
              </div>              
            </div> 
          </div>
          <div className="col-lg-8 col-sm-12 my-2">
            <div className="row test mb-2">
              <div className="col-4">
                <div className="card orderData ODCanceled">
                  <h4 >Orders Canceled</h4>
                  <h5><CountUp start={0} end={0} duration={2} separator=' ' /></h5>
                </div>             
              </div>
              <div className="col-4">
                <div className="card orderData ODPending">
                  <h4>Orders Pending</h4>
                  <h5><CountUp start={0} end={2} duration={2} separator=' ' /></h5>
                </div>
                
              </div>
              <div className="col-4">
                <div className="card orderData ODDelivered">
                  <h4>Orders Delivered</h4>
                  <h5><CountUp start={0} end={5} duration={2} separator=' ' /></h5>
                </div>
              </div>
            </div>
            <div className="card">
                <div className="card-header">
                  <h4>Recent Orders Data</h4>
                </div>
                {/* <div className="card table"> */}
                    <DenseTable />
                {/* </div> */}
            </div>
            {/* <h1>test</h1> */}
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
