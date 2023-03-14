import PropTypes from 'prop-types';
import { List } from 'components/ContactList/ContactList.styled';
import { ContactItemList } from 'components/ContactItemList/ContactItemList';

export const ContactList = ({ onFilterContacs, onDeleteContact }) => {
  return (
    <List>
      <ContactItemList
        onDeleteContact={onDeleteContact}
        onFilterContacs={onFilterContacs}
      />
    </List>
  );
};

ContactList.propTypes = {
  onFilterContacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
