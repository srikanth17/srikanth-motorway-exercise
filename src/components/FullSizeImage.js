import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import styled from 'styled-components';
import Button from './Button';

const CloseButton = styled(Button)`
  background-color: #e57373;
`;

const Image = styled.img`
  max-width: 400px;
  max-height: 600px;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

// binds modal to the appElement
Modal.setAppElement('#root');

const FullSizeImage = ({ created, alt, url, user }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={openModal}>More info</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Car Modal"
      >
        <div className="col s12 m12 l12">
          <Image src={url} alt={alt} />
          <h4>Car information</h4>
          <p>Created Date: {moment(created).format('DD/MM/YYYY')}</p>
          <p>Name: {user.name}</p>
          <CloseButton onClick={closeModal}>Close</CloseButton>
        </div>
      </Modal>
    </div>
  );
};

export default FullSizeImage;
