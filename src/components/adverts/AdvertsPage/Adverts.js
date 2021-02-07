import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Empty, Button, List } from 'antd';

import { loadAdverts } from '../../../store/actions';
import {
  getAdvertsWithFilters,
  getAreAdvertsFiltered,
} from '../../../store/selectors';
import withDataLoad from '../../../hoc';

import Advert from './Advert';

const Adverts = ({ adverts, areAdvertsFiltered }) => {
  const renderEmpty = () => {
    return (
      <div>
        <br />
        <br />
        <img
          alt="X"
          height="50"
          height="50"
          src="https://img.icons8.com/ios/50/000000/filter--v2.gif"
        />
        <br />
        <span>No adverts :(</span>
        <br />
        <span>Refine your search</span>
      </div>
    );
  };

  const renderAdvert = advert => {
    return (
      <List.Item>
        <Link to={`/adverts/${advert.id}`}>
          <Advert {...advert} />
        </Link>
      </List.Item>
    );
  };

  if (!adverts.length) {
    return renderEmpty();
  }

  return (
    <List
      //grid={{ gutter: 16, column: 3 }}
      dataSource={adverts}
      renderItem={renderAdvert}
    />
  );
};

const mapStateToProps = state => ({
  adverts: getAdvertsWithFilters(state),
  areAdvertsFiltered: getAreAdvertsFiltered(state),
});

const mapDispatchToProps = {
  onLoad: loadAdverts,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withDataLoad({
    noRender: ({ adverts }) => !adverts,
    renderError: error => (
      <>
        <br />
        <span style={{ color: '#ff4d4f' }}>Unkown error: {`${error}`}</span>
      </>
    ),
  }),
)(Adverts);
