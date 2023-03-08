import { getToken, userData, userEdit } from '../service/service';
import { saveLocal, clearStorage } from '../service/storage';

const checkCredentials = (email, password) => {
   return async (dispatch) => {
      try {
         dispatch({
            type: 'LOADING_IN_PROGRESS',
            payload: true,
         });
         // sent to axios
         const token = await getToken(email, password);
         saveLocal(token);

         dispatch({
            type: 'LOGIN_SUCEED',
            payload: { token },
            loader: true,
            error: false,
         });
      } catch (err) {
         clearStorage();
         console.error(err);
         dispatch({
            type: 'LOGIN_FAILED',
            payload: true,
         });
      }
   };
};

const getUserData = () => {
   return async (dispatch) => {
      try {
         dispatch({
            type: 'LOADING_IN_PROGRESS',
            payload: true,
         });
         const user = await userData();
         userEdit(user.firstName, user.lastName);
         dispatch({
            type: 'USER_PROFILE',
            payload: { user },
         });
      } catch (err) {
         console.log(err);
         dispatch({
            type: 'PROFILE_FAILED',
         });
      }
   };
};

const setUserData = (firstName, lastName) => {
   return async (dispatch) => {
      try {
         dispatch({
            type: 'SAVE_SUCCEED',
            payload: {
               user: { firstName, lastName },
            },
         });
         // sent to axios
         await userEdit(firstName, lastName);
      } catch (err) {
         console.error(err);
         dispatch({
            type: 'SAVE_FAILED',
         });
      }
   };
};

export { checkCredentials, getUserData, setUserData };
