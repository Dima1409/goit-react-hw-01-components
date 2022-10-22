import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return  (<li className={css.item} key={id}>
    <span className={isOnline? `${css.status} ${css.online}`:`${css.status}`}></span>
    <img className={css.avatar} src={avatar} alt={name} width="68" />
    <p className={css.name}>{name}</p>
            </li>)
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}