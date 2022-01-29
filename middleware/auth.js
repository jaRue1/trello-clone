export default function ({app,route,redirect}){
  if(route.path !== '/auth/signin'){
    // protected route
    if(!app.$fire.auth.currentUser){
      // force user to signIn page
      return redirect('/auth/signin')
    }
  } else if (route.path === 'auth/signin'){
    if(!app.$fire.auth.currentUser){
      // leave them on signin page
    } else{
      return redirect('/')
    }
  }
}