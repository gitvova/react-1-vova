import PropTypes from 'prop-types';

import {
  Container,
  Description,
  ProfileImage,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  Stats,
  StatsElement,
  SpanLabel,
  SpanQuantity,
} from 'components/Profile/Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Container>
      <Description>
        <ProfileImage src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </Description>

      <Stats>
        <StatsElement>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{stats.followers}</SpanQuantity>
        </StatsElement>
        <StatsElement>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{stats.views}</SpanQuantity>
        </StatsElement>
        <StatsElement>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{stats.likes}</SpanQuantity>
        </StatsElement>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
