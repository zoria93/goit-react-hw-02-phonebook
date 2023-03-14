import {
  ListContacts,
  Button,
} from 'components/ContactItemList/ContactItemList.styled';
import PropTypes from 'prop-types';

export const ContactItemList = ({ onFilterContacs, onDeleteContact }) => {
  return onFilterContacs.map(({ name, id, number }) => {
    return (
      <ListContacts key={id}>
        {name}: {number}
        <Button onClick={() => onDeleteContact(id)} type="button">
          <span>Delete</span>
        </Button>
      </ListContacts>
    );
  });
};

ContactItemList.propTypes = {
  onFilterContacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
