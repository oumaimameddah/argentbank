import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, setUserData } from '../redux/actions';

const Profil = () => {
   const store = useSelector((state) => state);
   const user = store.user;

   const firstName = user && user.firstName;
   const lastName = user && user.lastName;

   const [edit, setEdit] = useState(false);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getUserData());
   }, [dispatch]);

   // OPEN MODALE
   const openModale = () => {
      setEdit(true);
   };
   // CLOSE MODALE
   const cancelEdit = () => {
      setEdit(false);
   };

   // SAVE EDITION
   const onSave = (e) => {
      e.preventDefault();
      const editFirstName = document.querySelector('#editFirstName').value;
      const editLastName = document.querySelector('#editLastName').value;
      dispatch(setUserData(editFirstName ? editFirstName : firstName, editLastName ? editLastName : lastName));
      setEdit(false);
   };

   return (
      <div>
         {!edit ? (
            <div className="header">
               <h1>
                  Welcome back
                  <br />
                  {firstName}&nbsp;
                  {lastName}
               </h1>
               <button
                  className="edit-button sheen-btn sheen"
                  onClick={openModale}
               >
                  Edit Name
               </button>
            </div>
         ) : (
            <div className="header">
               <h1>
                  Welcome back
                  <br />
                  <div className="zone-edit">
                     <input
                        type="text"
                        placeholder={firstName}
                        id="editFirstName"
                     />
                     <input
                        type="text"
                        placeholder={lastName}
                        id="editLastName"
                     />
                  </div>
                  <div className="edit-btn">
                     <button
                        className="edit-button sheen-btn sheen"
                        onClick={onSave}
                     >
                        &nbsp;Save&nbsp;
                     </button>
                     <button
                        className="edit-button sheen-btn sheen"
                        onClick={cancelEdit}
                     >
                        Cancel
                     </button>
                  </div>
               </h1>
            </div>
         )}
      </div>
   );
};

export default Profil;
