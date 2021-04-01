import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App(props) {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
  return (
    <>
      <Header />
      <Main 
       onEditProfile={handleEditProfileClick}
       onAddPlace={handleAddPlaceClick}
       onEditAvatar={handleEditAvatarClick}
       onClose={closeAllPopups}
       isEditProfilePopupOpen={isEditProfilePopupOpen}
       isAddPlacePopupOpen={isAddPlacePopupOpen}
       isEditAvatarPopupOpen={isEditAvatarPopupOpen}
      />
      <Footer />
    </>
  );
}

export default App;