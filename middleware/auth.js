export default function ({ store, redirect }) {
  // eslint-disable-next-line no-console
  console.log('mw');
  if (!store.getters['user/isAuthenticated']) {
    return redirect('/');
  }
}
