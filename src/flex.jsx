import React, { Component } from 'react';

class Flex extends Component {
    render() { 
        return (
            <div class="d-flex justify-content-between bg-secondary mb-3">
            <div class="p-2 bg-info">Flex item 1</div>
            <div class="p-2 bg-warning">Flex item 2</div>
            <div class="p-2 bg-primary">Flex item 3</div>
          </div>
        );
    }
}
 
export default Flex;