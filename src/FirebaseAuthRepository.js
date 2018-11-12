import firebase from 'firebase/app'

const getUser = async () =>
  await new Promise(resolve => {
    // user would be set asynchronously
    // ref: https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed_in_user
    firebase.auth().onAuthStateChanged(user => resolve(user))
  })

/**
 * return whether user signged in or not
 */
export const isSignedIn = async () => (await getUser()) != null

/**
 * return JWT token
 */
export const getToken = async () => {
  const user = await getUser()
  return user && (await user.getIdToken())
}

/**
 * sign out
 */
export const signOut = async () => await firebase.auth().signOut()
