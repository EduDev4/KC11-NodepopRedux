import React from 'react';

import { connect } from 'react-redux';
import { Button, Input, Slider, Row, Col } from 'antd';

import FormField from '../../shared/FormField';

import { loadFilteredAdverts } from '../../../store/actions';
import { getFilters } from '../../../store/selectors';

import 'antd/dist/antd.css';
import './FilterBar.css';

const min_price = 0;
const max_price = 5000;

export class FiltersForm extends React.Component {
  state = {
    ...this.props.initialFilters,
  };

  handleNameChange = ev => this.setState({ name: ev.target.value });

  handlePriceChange = price => {
    const [min, max] = price;
    if (min === min_price && max === max_price) {
      return this.setState({ price: [] });
    }
    this.setState({ price });
  };

  handleSubmit = ev => {
    const { onSubmit } = this.props;
    ev.preventDefault();
    onSubmit(this.state);
  };

  render() {
    const { name, price } = this.state;
    const priceValue = price.length === 0 ? [min_price, max_price] : price;
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Col span={16}>
            <FormField label="Name">
              <Input
                type="text"
                name="name"
                value={name}
                onChange={this.handleNameChange}
                placeholder="i.e.: Bici"
              />
            </FormField>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <FormField label={<span>Price ({priceValue.join(' - ')})</span>}>
              <Slider
                range
                defaultValue={priceValue}
                min={min_price}
                max={max_price}
                onChange={this.handlePriceChange}
              />
            </FormField>
          </Col>
        </Row>
        <Row className="filterRow">
          <Col span={5}>
            <b>On Sale: </b>
          </Col>
          {/* <Col span={5}>
            <Switch
              size="small"
              checked={disabled}
              onChange={handleDisabledChange}
            />
          </Col> */}
        </Row>
        <Row>
          <Col span={16}></Col>
          <Col span={4}>
            <Button className="submit" type="primary" htmlType="submit">
              Search
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

const mapStateToProps = state => ({ initialFilters: getFilters(state) });

const mapDispatchToProps = dispatch => ({
  onSubmit: filters => dispatch(loadFilteredAdverts(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersForm);
