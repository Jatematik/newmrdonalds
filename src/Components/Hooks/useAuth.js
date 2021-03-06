import { useEffect, useState } from "react";

export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null);
    const auth = authFirebase();
    const provider = new authFirebase.GoogleAuthProvider();

    // console.log(auth);

    const logIn = () => auth.signInWithPopup(provider);

    const logOut = () => auth.signOut()
        .catch(err => console.error(err));

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            // console.log(user);
            if (user) {
                setAuthentication(user);
            } else {
                setAuthentication(null);
            }
        })
    }, [auth, authentication]);

    return {authentication, logIn, logOut};
}