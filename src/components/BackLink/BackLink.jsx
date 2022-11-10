import PropTypes from 'prop-types';
import { StyledLink } from './BackLink.styled';
import { HiArrowLeft } from 'react-icons/hi';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
};
