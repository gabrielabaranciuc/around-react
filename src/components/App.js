import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import ImagePopup from "./ImagePopup.js";
import DeleteConfirmationPopup from "./DeleteConfirmationPopup.js";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { submitSave, submitSaving, submitCreate, submitCreating, submitDelete, submitDeleting } from "../utils/constants.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [deletedCard, setDeletedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [submitText, setSubmitText] = React.useState("");

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards((cards) => [...cards, ...data]);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditProfileClick() {
    setSubmitText(submitSave);
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setSubmitText(submitCreate);
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setSubmitText(submitSave);
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function confirmDelete(card) {
    setDeletedCard(card);
    setSubmitText(submitDelete);
    setIsConfirmationPopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setSelectedCard(null);
  }



  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(deletedCard) {
    setSubmitText(submitDeleting);
    api
      .deleteCard(deletedCard._id)
      .then(() => {
        setCards(cards.filter((c) => c._id !== deletedCard._id));
        setIsConfirmationPopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser({ name, about }) {
    setSubmitText(submitSaving);
    api.updateProfile(name, about).then((updateProfile) => {
      setCurrentUser(updateProfile);
      setIsEditProfilePopupOpen(false);
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateAvatar({ avatar }) {
    setSubmitText(submitSaving);
    api.updateProfilePicture(avatar).then((updateProfile) => {
      setCurrentUser(updateProfile);
      setIsEditAvatarPopupOpen(false);
    }).catch((err) => {
      console.log(err);
    });
  }

  function handleAddPlace({ title, link }) {
    setSubmitText(submitCreating);
    api.addCard(title, link).then((newCard) => {
      setCards([newCard, ...cards]);
      setIsAddPlacePopupOpen(false);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={confirmDelete}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} submitText={submitText} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} submitText={submitText} onClose={closeAllPopups} onAddPlace={handleAddPlace} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} submitText={submitText} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <DeleteConfirmationPopup isOpen={isConfirmationPopupOpen} onClose={closeAllPopups} onConfirmation={handleCardDelete} confirmedObject={deletedCard} submitText={submitText} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;