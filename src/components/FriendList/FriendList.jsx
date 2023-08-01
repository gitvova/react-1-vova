import PropTypes from 'prop-types';
import {
  Friends,
  FriendListItem,
  FriendListSpan,
  FriendListName,
} from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <FriendListSpan status={friend.isOnline}></FriendListSpan>
          <img src={friend.avatar} alt={friend.name} width="48" />
          <FriendListName>{friend.name}</FriendListName>
        </FriendListItem>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
