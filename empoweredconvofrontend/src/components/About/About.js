import React from 'react';
import { Link } from 'react-router-dom'
import './About.css';
import { Image, Icon, Container, Card, Responsive } from 'semantic-ui-react';
import Headshot from './Headshot';


export default function About(){
    return (
        
        <Container fluid className="aboutContainer"> 
            <Headshot url='./headShots/katherine.JPG' name="Katherine" flip={false} desc="I hate my job."/>
            <Headshot url='./headShots/Grace_Davis.jpg' name="Grace" flip={true} desc="I hate my job."/>
            <Headshot url='./headShots/katherine.JPG' name="Katherine" flip={false} desc="I hate my job."/>
            <Headshot url='./headShots/katherine.JPG' name="Katherine" flip={false} desc="I hate my job."/>
            <Headshot url='./headShots/katherine.JPG' name="Katherine" flip={false} desc="I hate my job."/>
            <Headshot url='./headShots/katherine.JPG' name="Katherine" flip={false} desc="I hate my job."/>
            <Headshot url='./headShots/katherine.JPG' name="Katherine" flip={false} desc="I hate my job."/>
            <Headshot url='./headShots/katherine.JPG' name="Katherine" flip={false} desc="I hate my job."/>
         </Container>
    )
}