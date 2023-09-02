import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/66b9f5ca1b7bf7f73c3b2823e630331b~c5_100x100.jpeg?x-expires=1693652400&x-signature=sTev2I0XZi29B41y38GdsNok1g8%3D"
                    alt=""
                />
                <div>
                    <Button className={cx('follow-btn')} primary>
                        Follow
                    </Button>
                </div>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>datvilla94</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Dat Villa</p>
            </div>

            <div className={cx('statistic')}>
                <strong className={cx('count')}>8.2M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('count')}>8.2M </strong>
                <span className={cx('label')}>Likes</span>
            </div>
        </div>
    );
}

export default AccountPreview;
