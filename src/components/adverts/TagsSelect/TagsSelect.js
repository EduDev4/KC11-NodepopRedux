import React, { useEffect } from 'react';
import { Select } from 'antd';
import T from 'prop-types';
const { Option } = Select;

const TagsSelect = ({ onLoad, tags, ...props }) => {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <Select
      allowClear
      disabled={!tags}
      mode="multiple"
      placeholder="Select tags"
      style={{ width: '100%' }}
      {...props}
    >
      {tags && tags.map(tag => <Option key={tag}>{tag}</Option>)}
    </Select>
  );
};
TagsSelect.propTypes = {
  onLoad: T.func.isRequired,
  tags: T.arrayOf(T.string.isRequired),
};

export default TagsSelect;
