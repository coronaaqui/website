import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import {
  ShareAltOutlined,
  WhatsAppOutlined,
  FacebookOutlined
} from '@ant-design/icons';

const SocialSharing = ({ message }) => {
  const handleWpSharing = () => {
    const url = `whatsapp://send?text=${encodeURIComponent(message())}`;
    window.open(url, '_blank');
  };

  const handleFbSharing = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${document.location.href}`;
    window.open(url, '_blank');
  };

  const menu = (
    <Menu>
      <Menu.Item key='1' onClick={handleWpSharing}>
        <WhatsAppOutlined /> Via WhatsApp
      </Menu.Item>
      <Menu.Item key='2' onClick={handleFbSharing}>
        <FacebookOutlined /> Via Facebook
      </Menu.Item>
    </Menu>
  );
  return (
    <div className='social-sharing'>
      <Dropdown overlay={menu} trigger={['click', 'hover']}>
        <Button>
          <ShareAltOutlined /> Compartilhar
        </Button>
      </Dropdown>
    </div>
  );
};

export default SocialSharing;
