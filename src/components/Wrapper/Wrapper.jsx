import PropTypes from 'prop-types';

import { Container } from './Wrapper.slyled';

const Wrapper = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
};
export default Wrapper;