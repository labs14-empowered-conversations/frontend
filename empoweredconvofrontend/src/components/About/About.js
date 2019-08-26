import React from 'react';
import { Link } from 'react-router-dom'
import './About.css';
import { Image, Icon, Container, Card, Responsive, Segment, Button, Header } from 'semantic-ui-react';
import Headshot from './Headshot';
import Parallax from 'react-rellax'


export default class About extends React.Component {
    constructor(props) {
        super();
        this.state = {
            mobileChange: false
        }
    }

    forceUpdate = () => {
        (window.innerWidth >= 500) ? this.setState({ mobileChange: false }) : this.setState({ mobileChange: true });
      } 
      
      resize = () => this.forceUpdate()
    
      componentDidMount() {
        window.addEventListener('resize', this.resize)
        this.forceUpdate();
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
      }

    render() {
    return (
        <Container fluid className="aboutContainer">
            {/* <Container fluid> */}
        {!this.state.mobileChange &&
        <div style={{ width: "100%" }}>
    <Parallax  speed={3} centered vertical={false} horizontal={true}>      
        <Segment.Group className="wwd-container" style={{backgroundColor: "white", zIndex: "1", margin: "0 auto"}} basic={true} raised fluid>
                <Segment className="wwd-header" basic={true} size={"huge"} padded={'very'} >
                <Header as="h1" size={'huge'} >What We Do </Header>
                </Segment>
                <Segment.Group style={{ border: "none"}} basic={true} horizontal size={'huge'} >
                    <Segment className="wwd-text" style={{ border: "none"}} basic={true} size={'big'} padded={'very'}>
                         <Header as="h2" >
                        A survivor-activated tool that educates and prepares the person they will disclose to before the conversation takes place.
                            Our tool takes the burden off of the survivor for having to *educate their loved ones about assault* during disclosure because we provide that training ahead of time.
                         </Header>
                    </Segment>
                    <Segment.Group style={{ border: "none", boxShadow: "none"}} basic={true}  size={'huge'}>

                    <Segment className="wwd-text" style={{ border: "none" }} basic={true}  size={'big'} padded={'very'}>
                        <Header as="h2" >
                       We have cultivated a unqiue framework for how to connect with those in your life by providing the coaching, space and time needed to increase your confidence to engage in these "harder" conversations. So that you can truly show up for the people you love.
                        </Header>
                    </Segment>
                        <Segment style={{ border: "none"}} basic={true}  floated="right" compact>
                        <button className="button wwd-button">Use The Tool </button>
                        </Segment>
                        </Segment.Group>
                </Segment.Group>
            </Segment.Group>
            </Parallax>  
            </div>
            }
            <Headshot url='./headShots/katherine.png' name="Katherine" position="Assistant Professor" desc="Katherine Lorenz is a sexual assault researcher focusing on the post-assault experiences of survivors.Her work in the community involves providing social support to sexual assault and domestic violence survivors, and advocating for social change surrounding the responses to sexual assault."/>
            <Headshot url='./headShots/Grace_Davis.png' name="Grace" position="Student at Stanford" desc="Grace Davis is currently a sophomore at Stanford University. She first started working in the area of sexual violence research during her gap year. Her academic interests lie in mental health, women’s history, and sexual violence prevention."/>
            <Headshot url='./headShots/Kathryn_Holland.png' name="Kathryn" position="Assistant Professor" desc="Dr. Holland is interested in the wellbeing around issues of sexual violence and sexual health, including: the implementation, use, and effectiveness of formal support systems for sexual assault survivors, and interpersonal reactions to sexual assault disclosures" />
            <Headshot url='./headShots/Louisa_Kornblatt.png' name="Louisa" position="Clinical Social Worker" desc="Louisa Kornblatt is an associate clinical social worker at an adolescent psychiatric hospital in the Bay Area and PhD student in Social Welfare at University of California, Berkeley. She is currently involved in qualitative research examining the perspectives of emergency department providers on responding to domestic violence."/>
            <Headshot url='./headShots/Sarah_Lime.png' name="Sarah" position="University of Michigan" desc="Sarah Lime is the current Director of Community Outreach and Activism for PPE, a role responsible for coordinating and hosting the annual Panhellenic Speak Out. In the future I hope to continue combining my interests in International and Women's Studies and develop research on sex, gender, and sexuality."/>
            <Headshot url='./headShots/elena.png' name="Elena" position="Founder/CEO" desc="Elena is driven by human connection. She is excited to announce the upcoming launch of her company, Empowered Conversation, a tool re-envisioning the future of social support by changing the way we have hard conversations."/>
            <Headshot url='./headShots/katherine.png' name="KatherineV2" position="Professor" desc="Nam massa tortor, pellentesque ac arcu ac, efficitur laoreet metus. Aliquam dapibus tempus lectus mattis sollicitudin. Sed placerat aliquet dui, id tristique nunc hendrerit vel. Nunc quis libero augue. Ultrices quis lectus ac, congue porttitor ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra."/>
            <Headshot url='./headShots/katherine.png' name="KatherineV3" position="Super Duper Lead Professor" desc="Donec malesuada dolor id risus convallis efficitur. Donec velit ipsum, pharetra sed sodales et, feugiat quis est. Quisque porta ante leo pretium augue, vitae interdum turpis orci vitae lacus. Aliquam fermentum tempor sem, mattis volutpat nulla commodo vitae. Cras tellus lacus, feugiat nec turpis in, consequat maximus diam." />
         </Container>
    )}
}