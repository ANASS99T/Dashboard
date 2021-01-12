import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ReactCardCarousel from 'react-card-carousel';
import './timeLine.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export  function TimeLine() {
  const classes = useStyles();
  return (
    <Timeline align="alternate">

      <TimelineItem >
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          10 minutes ago
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{background:'#1976d2'}}/>
          <TimelineConnector style={{background:'#1976d2'}} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography style={{fontSize:'14px', fontWeight:'700',textAlign:'left'}}>
                Ahemd BenArfa
            </Typography>
            <Typography style={{fontSize:'12px',textAlign:'left'}}>
                New order <a href='#'>#idCommande</a>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem >
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          20 minutes ago
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{background:'#4527a0'}}/>
          <TimelineConnector style={{background:'#4527a0'}} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography style={{fontSize:'14px', fontWeight:'700',textAlign:'left'}}>
                Ahemd BenArfa
            </Typography>
            <Typography style={{fontSize:'12px', textAlign:'left'}}>
                Shared a review on <a href='#'>#IdProduit</a>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem >
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          40 minutes ago
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{background:'#00e676'}}/>
          <TimelineConnector style={{background:'#00e676'}} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography style={{fontSize:'14px', fontWeight:'700',textAlign:'left'}}>
                Ahemd BenArfa
            </Typography>
            <Typography style={{fontSize:'12px',textAlign:'left'}}>
                New order <a href='#'>#idCommande</a>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem >
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          55 minutes ago
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{background:'#ef6c00'}}/>
          {/* <TimelineConnector style={{background:'#ef6c00'}} /> */}
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography style={{fontSize:'14px', fontWeight:'700',textAlign:'left'}}>
                Ahemd BenArfa
            </Typography>
            <Typography style={{fontSize:'12px', textAlign:'left'}}>
                Shared a review on <a href='#'>#IdProduit</a>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}


export const TimeLineCards = () =>{
    
   
    return(
        <div className="cards">
            <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
                <div className='card timeLine'>
                    <h5>Ahemd BenArfa</h5> <cite> 55 minutes ago</cite>
                    <br/>
                    <p>Shared a review on <a href='#'>#IdProduit</a></p>
                </div>
                <div className='card timeLine'>
                    <h5>Ahemd BenArfa</h5> <cite> 55 minutes ago</cite>
                    <br/>
                    <p>Shared a review on <a href='#'>#IdProduit</a></p>
                </div>
                <div className='card timeLine'>
                    <h5>Ahemd BenArfa</h5> <cite> 55 minutes ago</cite>
                    <br/>
                    <p>Shared a review on <a href='#'>#IdProduit</a></p>
                </div>
                <div className='card timeLine'>
                    <h5>Ahemd BenArfa</h5> <cite> 55 minutes ago</cite>
                    <br/>
                    <p>Shared a review on <a href='#'>#IdProduit</a></p>
                </div>
                <div className='card timeLine'>
                    <h5>Ahemd BenArfa</h5> <cite> 55 minutes ago</cite>
                    <br/>
                    <p>Shared a review on <a href='#'>#IdProduit</a></p>
                </div>
            </ReactCardCarousel>  
        </div>
    )
}


export const VirtTimeline = ()=>{
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='card-content'>
                        <div className="row">
                            <div className="col title">
                                <cite>55 minutes ago</cite>
                                <h5>Ahemd BenArfa</h5>
                            </div>
                            <div className="col">
                                <p>Shared a review on <a href='#'>#IdProduit</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='card-content'>
                        <div className="row">
                            <div className="col">
                                <cite>40 minutes ago</cite>
                                <h5>Ahemd BenArfa</h5>
                            </div>
                            <div className="col">
                                <p>Shared a review on <a href='#'>#IdProduit</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='card-content'>
                        <div className="row">
                            <div className="col">
                                <cite>20 minutes ago</cite>
                                <h5>Ahemd BenArfa</h5>
                            </div>
                            <div className="col">
                                <p>New order <a href='#'>#idCommande</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                <span className="visually-hidden">Next</span>
            </a>
        </div>
        
    )
}