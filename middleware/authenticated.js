export default (context) => {
    if (!context.app.context.app.$cookies.get('islogin')) {
        return context.redirect('/auth/login')
    }
  }