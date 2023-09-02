import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    ComPassIcon,
    ComPassActiveIcon,
} from '~/components/Icon';
import SuggestAccounts from '~/components/SuggestAccounts/SuggestAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />

                <MenuItem
                    title="Khám phá"
                    to={config.routes.explore}
                    icon={<ComPassIcon />}
                    activeIcon={<ComPassActiveIcon />}
                />

                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestAccounts label="Tài khoản đề xuất" />
            <SuggestAccounts label="Đang follow" />
        </aside>
    );
}

export default Sidebar;
