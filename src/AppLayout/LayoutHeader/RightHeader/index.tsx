import { Menu, Segmented } from 'antd';
import React from 'react';
import { GlobalOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useLanguageContext } from '../../../contexts/LanguageContext';
import { useThemeContext } from '../../../contexts/ThemeContext';
import { useAuthContext } from '../../../contexts/AuthContext';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RightHeaderProps {}

const RightHeader: React.FC<RightHeaderProps> = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useThemeContext();
  const { supportedLangauges } = useLanguageContext();
  const { logOut } = useAuthContext();
  const UserMenuItems: ItemType[] = [
    {
      label: (
        <Segmented
          block
          onChange={(e) => i18n.changeLanguage(e.toString())}
          style={{ fontVariant: 'small-caps', marginTop: '5px' }}
          options={[
            {
              label: 'fr',
              value: 'fr'
            },
            {
              label: 'en',
              value: 'en'
            }
          ]}
        />
      ),
      key: 'ChangeLanguage-item'
    },
    { label: t('Profile'), key: 'Profile-item', icon: <UserOutlined /> },
    { label: t('ChangePassword'), key: 'ChangePassword-item', icon: <UserOutlined /> },
    { label: t('Notifications'), key: 'Notifications-item', icon: <UserOutlined /> },
    { label: t('Exit'), key: 'Exit-item', icon: <UserOutlined />, danger: true, onClick: () => logOut() }
  ];
  return (
    <Menu
      mode="horizontal"
      theme={theme}
      style={{ width: 'fit-content' }}
      selectable={false}
      items={[
        {
          key: 0,
          icon: <UserOutlined />,
          children: UserMenuItems
        },
        {
          key: 1,
          icon: <GlobalOutlined />,
          children: supportedLangauges.map((el): ItemType => {
            return {
              label: el,
              key: el,
              onClick: () => i18n.changeLanguage(el),
              style: { fontVariant: 'small-caps', width: '100px' }
            };
          })
        }
      ]}
    />
  );
};

export default RightHeader;
