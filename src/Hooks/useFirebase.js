import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initialAuthrentication from "../Firebase/firebase.init";

initialAuthrentication();
const useFirebase = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      // .then((result) => setUsers(result.user))
      // .catch((error) => setError(error.message));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      // setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    // setLoading(true);
    signOut(auth).then(() => {
      setUsers({});
    });
    // .finally(() => setLoading(false))
  };
  return {
    signInUsingGoogle,
    users,
    error,
    logOut,
    setUsers
  };
};

export default useFirebase;
