export default (context) => {
    if (!context.app.context.app.$cookies.get('goldlogin')) {
        return context.redirect('/auth/login')
    }
  }