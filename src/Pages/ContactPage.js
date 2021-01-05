import React from 'react';
import Hero from '../Components/Hero'
import Content from '../Components/Content'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2'

class ContactPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disable: false,
            emailsent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {

        event.preventDefault();

        const templateId = 'portfolio-template'

        this.sendFeedback(templateId, {
            message: this.state.message, 
            name: this.state.name, 
            email: this.state.email
        })

        // this.setState({
        //     disable: true,
        //     // emailsent: false,
        // });

        // axios.post('http://localhost:3001/api/email', this.state)
        //     .then( res => {
        //         if(res.data.success) {
        //             this.setState({
        //                 disable: false,
        //                 emailsent: true
        //             });
        //         } else {
        //             this.setState({
        //                 disable: false,
        //                 emailsent: false
        //             });
        //         }
        //     })
        //     .catch(err => {
        //         this.setState({
        //             disable: false,
        //             emailsent: false
        //         });
        //     })
    }

    sendFeedback = (templateId, variables) => {
        emailjs.send(
          'Portfolio ', templateId,
          variables, 'user_FjuKAQoOKppKL7KZYUDC9'
          ).then(res => {
            Swal.fire({
              title: 'Email Successfully Sent',
              icon: 'success'
            })
          })
          .catch(err => {
            Swal.fire({
              title: 'Email Failed to Send',
              icon: 'error'
            })
            console.error('Email Error:', err)
          })
      }

    render(){
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}></Form.Control>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disable={this.state.disable}>
                            Send
                        </Button>


                        {this.state.emailsent === true && <p className="d-line success-msg"> Email Sent </p>}
                        {this.state.emailsent === false && <p className="d-line err-msg"> Email Not Sent </p>}
                    </Form>
                </Content>
            </div>
        );
    }

}

export default ContactPage;