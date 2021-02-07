import client from './client';

const { REACT_APP_API_VERSION_URL: apiVersion } = process.env;

const mapAdvertId = advert => ({ ...advert, id: advert._id });

const formatFilters = ({ name, sale, price, tags }) => {
  const filters = {};
  if (name) {
    filters.name = name;
  }

  filters.sale = sale;

  if (price && price.length) {
    filters.price = price.join('-');
  }
  if (tags && tags.length) {
    filters.tags = tags.join(',');
  }

  return filters;
};

export const getTags = () => {
  const url = `${apiVersion}/adverts/tags`;
  return client.get(url);
};

export const getAdvert = advertId =>
  client
    .get(`${apiVersion}/adverts/${advertId}`)
    .then(advert => {
      if (!advert) {
        const error = 'Not found';
        throw error;
      }
      advert.photo = `images/anuncios/${advert.photo}`;
      return advert;
    })
    .then(mapAdvertId);

export const getAdvertsWithFilters = filters => {
  const url = `${apiVersion}/adverts`;
  console.log(url);
  return client
    .get(url, {
      params: filters ? formatFilters(filters) : filters,
    })
    .then(({ rows: adverts }) => adverts.map(mapAdvertId));
};

export const getAdvertDetail = advertId => {
  const url = `${apiVersion}/adverts/${advertId}`;
  return client.get(url);
};

export const createAdvert = advert => {
  const url = `${apiVersion}/adverts`;
  const resp = client.post(url, advert).then(mapAdvertId);
  console.log(resp);
  return resp;
};

export const deleteAdvert = advertId => {
  const url = `${apiVersion}/adverts/${advertId}`;
  return client.delete(url);
};
