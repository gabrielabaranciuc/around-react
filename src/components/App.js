import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App(props) {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({
    avatar: '',
    name: '',
    about: '',
  });

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser]);
  
  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
    <Header />
      <Main 
       onEditProfile={handleEditProfileClick}
       onAddPlace={handleAddPlaceClick}
       onEditAvatar={handleEditAvatarClick}
       onCardClick={handleCardClick}
       onClose={closeAllPopups}
       isEditProfilePopupOpen={isEditProfilePopupOpen}
       isAddPlacePopupOpen={isAddPlacePopupOpen}
       isEditAvatarPopupOpen={isEditAvatarPopupOpen}
       selectedCard={selectedCard}
      />
      <Footer />
    </CurrentUserContext.Provider>
    </>
  );
}

export default App;