import styles from './index.less';
import router from 'umi/router'
import 'antd-mobile/dist/antd-mobile.less'
import Link from 'umi/link';
export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
      <button onClick={()=>{router.push('/home')}}>Go Home</button>
    <Link to="/home">Go to list page</Link>
    </div>
  );
}
