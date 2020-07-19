import React from 'react';
import {
    Row, 
    Col, 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardSubtitle,
    Button
} from 'reactstrap';

 function Products() {
    const products = [
        { id: 1, name: "CPU", price: 5000,  stock: 20 , photo:'./images/p1.jpg'},
        { id: 2, name: "Ram", price: 1500, stock: 10, photo:'./images/p2.jpg' },
        { id: 3, name: "Hardisk", price: 8000, stock: 5, photo:'./images/p1.jpg' },
        { id: 4, name: "CD-ROM", price: 2000, stock: 30, photo:'./images/p1.jpg' },
        { id: 5, name: "Monitor", price: 3000, stock: 5, photo:'./images/p2.jpg' },
    ]

    return (
        <Row>
            {products.map((item) => {
                return (
                    <Col key={item.id} md={3}>
                        <Card>
                            <CardImg top width="100%" src={item.photo} />
                            <CardBody>
                                <CardTitle>รหัสสินค้า: {item.id}  </CardTitle>
                                <CardSubtitle>ชื่ิสินค้า: {item.name}</CardSubtitle>
                                <CardSubtitle>ราคาสินค้า ${item.price}</CardSubtitle>
                                <CardSubtitle>จำนวน ${item.stock}</CardSubtitle>
                                <Button color="success">++Cart</Button>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}

export default Products;