import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Menu } from 'antd';
import React from 'react';



const items = [
  {
    label: 'None',
    key: '0',
  },
  {
    label: 'High/Low blood pressure',
    key: '1',
  },
  {
    label: 'High cholesterol',
    key: '2',
  },
  {
    label: 'Diabetes',
    key: '3',
  },
  {
    label: 'Consumption of alcohol or drugs',
    key: '4',
  },
  {
    label: 'Stress or other mental health problems',
    key: '5',
  },
  {
    label: 'Other',
    key: '6',
  },
];

export default function DropDown({ onSelect, selectedValue }) {
  const onClick = ({ key }) => {
    const selectedItem = items.find(item => item.key === key);
    if (selectedItem) {
      onSelect(key);
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );


  const placeholder = selectedValue
    ? items.find(item => item.key === selectedValue)?.label
    : 'Current Medical Situation';


  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space wrap>
          <div style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', color: '#bfbfbf' }}>
            {placeholder}
          </div>
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
