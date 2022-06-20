import { LockTwoTone, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormItem from 'antd/lib/form/FormItem';
import { useAuthContext } from '../../contexts/AuthContext';
import { LoginParamsType } from '../../models/dtos/Auth.dto';
import styles from './index.module.less';

const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { logIn } = useAuthContext();

  const history = useHistory();

  const RedirectTo = () => {
    history.push('/');
  };

  const handleSubmit = async (values: LoginParamsType) => {
    setSubmitting(true);
    try {
      logIn(values).then((success) => {
        if (success) {
          setSubmitting(false);
          RedirectTo();
        } else {
          setSubmitting(false);
        }
      });
    } catch (error) {
      message.error('Error while trying to login');
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <div className={styles.logo} />
            </Link>
          </div>
          <div className={styles.desc}>Intelligencia Financial Softwares</div>
        </div>

        <div className={styles.main}>
          <Form
            initialValues={{
              autoLogin: true
            }}
            onFinish={async (values: LoginParamsType) => {
              handleSubmit(values);
            }}
          >
            <FormItem
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!'
                }
              ]}
            >
              <Input prefix={<UserOutlined className={styles.prefixIcon} />} size="large" placeholder={'Username'} />
            </FormItem>
            <FormItem
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}
            >
              <Input.Password
                prefix={<LockTwoTone className={styles.prefixIcon} />}
                size="large"
                placeholder={'Password'}
              />
            </FormItem>
            <Form.Item>
              <Form.Item name="rememberMe" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a style={{ float: 'right' }} href="">
                Forgot your password ?
              </a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" htmlType="submit" loading={submitting} style={{ width: '100%' }}>
                Connexion
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// const styles: {
//   container: CSSProperties;
//   content: CSSProperties;
//   top: CSSProperties;
//   header: CSSProperties;
//   logo: CSSProperties;
//   desc: CSSProperties;
//   main: CSSProperties;
//   prefixIcon: CSSProperties;
// } = {
//   container: { display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'auto' },
//   content: {},
//   top: {},
//   header: {},
//   logo: {},
//   desc: {},
//   main: {},
//   prefixIcon: {}
// };
