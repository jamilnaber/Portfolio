import React from 'react'
import githubLogo from '../Assets/github-logo.svg'
import selfPicture from '../Assets/selfPicture.jpg'
import andriodLogo from '../Assets/android-logo.svg'
import Card from '../Components/Card';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'My Github',
                    subTitle: 'Look at pinned projects',
                    imgSrc: githubLogo,
                    link: 'https://github.com/jamilnaber',
                    selected: false
                },
                {
                    id: 1,
                    title: 'My Linkedin',
                    subTitle: 'Connect with me',
                    imgSrc: selfPicture,
                    link: 'https://www.linkedin.com/in/jamil-naber/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Andriod Clip Application',
                    subTitle: 'An andriod I made that is a music service',
                    imgSrc: andriodLogo,
                    link: 'https://github.com/jamilnaber/ClipServicePlayer',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id,card) =>{
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className ="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel
