import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendsList } from './FriendList.styled';

export default function FriendList ({ friends }) {
    return (
        <FriendsList>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id}
                />
            ))}
        </FriendsList>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
    ).isRequired,

};