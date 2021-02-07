import React from 'react';
import { ConfirmationButton } from '../../shared';
import { DeleteOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import placeholder from '../../../assets/photo-default.png';
import Tags from '../Tags';
import { getAdvert } from '../../../store/selectors';
import { deleteAdvert } from '../../../store/actions';
import { loadAdvert } from '../../../store/actions';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withDataLoad from '../../../hoc/withDataLoad';

const AdvertData = ({ advert, onDelete }) => {
  const { name, sale, price, tags, photo } = advert;
  return (
    <article>
      <div className="left">
        {
          <Image
            src={photo ? photo : 'error'}
            alt={name}
            width={75}
            height={75}
            fallback={placeholder}
          />
        }
      </div>
      <div className="right">
        <div className="tweet-header">
          <span className="advert-name">Name: {name}</span>
          <span>
            <br />
            Price: {price} €
          </span>
          <span>
            <br />
            {sale ? '[Sale]' : '[Buying]'}
            <br />
          </span>
        </div>
        <div>
          <Tags tags={tags}></Tags>
          <div className="advert-actions">
            <ConfirmationButton
              danger
              icon={<DeleteOutlined />}
              confirmationButtonProps={{
                title: 'Delete advert?',
                content: 'This action can not be undone!',
                okText: 'Yes',
                cancelText: 'No',
                okButtonProps: {
                  danger: true,
                },
              }}
              onConfirm={onDelete}
              style={{ marginTop: 20 }}
              block
            >
              Delete Advert
            </ConfirmationButton>
          </div>
        </div>
      </div>
    </article>
  );
};
const mapStateToProps = (state, ownProps) => ({
  advert: getAdvert(ownProps.advertId)(state),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { advertId } = ownProps;
  return {
    onLoad: () => dispatch(loadAdvert(advertId)),
    onDelete: () => dispatch(deleteAdvert(advertId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withDataLoad({
    noRender: ({ advert }) => !advert,
    renderError: error => (
      <>
        <br />
        <span style={{ color: '#ff4d4f' }}>Unkown error: {`${error}`}</span>
      </>
    ),
  }),
)(AdvertData);
