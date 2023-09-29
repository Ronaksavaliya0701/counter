import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import tv1 from '../../assets/images/tv-1.jpg'
import tv2 from '../../assets/images/tv-2.jpg'
import tv3 from '../../assets/images/tv-3.jpg'
import tv4 from '../../assets/images/tv-4.jpg'
import Counter from '../Counter/Counter';
import UseRef from '../UseRef/UseRef';

function Cart() {
    return (
        <Container>
            <Row xs={1} md={4} className="mt-3">
                <Card>
                    <Card.Img variant="top" src={tv1} />
                    <Card.Body>
                        <Card.Title>Sony Bravia XR series 4K Ultra HD</Card.Title>
                        <Card.Text>
                        Connectivity: 4 HDMI ports to connect set top box, Blu Ray players, gaming console | 3 USB ports to connect hard drives and other USB devices
                        </Card.Text>
                        <UseRef />

                        {/* <h5 style={{marginTop: 10}} id='rs'></h5> */}
                        {/* <Counter /> */}


                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={tv2} />
                    <Card.Body>
                        <Card.Title>OnePlus Y Series HD</Card.Title>
                        <Card.Text>
                        Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices,
                        </Card.Text>
                        <UseRef />

                        {/* <h5 style={{marginTop: 10}}>Price : 12,000</h5> */}
                        {/* <Counter /> */}
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={tv3} />
                    <Card.Body>
                        <Card.Title>Samsung Wondertainment</Card.Title>
                        <Card.Text>
                        Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices
                        </Card.Text>
                        <UseRef />

                        {/* <h5 style={{marginTop: 10}}>Price : 12,500</h5> */}
                        {/* <Counter /> */}
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={tv4} />
                    <Card.Body>
                        <Card.Title>Redmi Android 11 Series Full HD</Card.Title>
                        <Card.Text>
                        Connectivity: 2 HDMI ports to connect set top box, Blu-Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices
                        </Card.Text>
                        <UseRef />

                        {/* <h5 style={{marginTop: 10}}>Price : 21,000</h5> */}
                        {/* <Counter /> */}
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default Cart;