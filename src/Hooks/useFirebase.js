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
  // const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
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
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // setUsers({});
      })
      .finally(() => setIsLoading(false));
  };
  return {
    signInUsingGoogle,
    users,
    isLoading,
    setIsLoading,
    logOut,
    setUsers,
  };
};

export default useFirebase;
