import { useState } from 'react';
import { ReactComponent as AddIcon } from './icons/add.svg';

import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import Modal from './components/Modal';
import IconButton from './components/IconButton';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = e => {
    setShowModal(prev => !prev);
  };
  return (
    <>
      <Section title="Phonebook">
        <IconButton
          type="button"
          onClick={onToggleModal}
          aria-label="Button to add new contact"
        >
          <AddIcon width="40" height="40" fill="#009933"></AddIcon>
        </IconButton>
        {showModal && (
          <Modal onToggleModal={onToggleModal}>
            <Form onSave={onToggleModal} />
          </Modal>
        )}
      </Section>

      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};

export default App;
