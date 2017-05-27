# React Bootstrap Grid
```bash
npm install react-bs-grid
```

React components for declaratively constructing Bootstrap layout grids (Container, Row, Col).

## Example Usage

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bs-grid';

class MyComponent extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} sm={6} md={4} lg={2} offsetSm={3} offsetMd={2} offsetLg={5}>
            My content is resized and centered...
          </Col>
        </Row>
      </Container>
    );
  }
}
```

## License

MIT
