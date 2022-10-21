import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
     return <ul className={css.friendList}>
     {friends.map(({avatar, name, isOnline, id}) => (
            <li key={id} className={css.item}>
            <span className={isOnline? `${css.status} ${css.online}`:`${css.status}`}></span>
            <img className={css.avatar} src={avatar} alt={name} width="68" />
            <p className={css.name}>{name}</p>
          </li>
        )        
        )}
   </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
}
