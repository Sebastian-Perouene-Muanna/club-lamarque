import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

export const registrarUsuario = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const iniciarSesion = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const cerrarSesion = () => {
  return signOut(auth);
};

export { auth };
