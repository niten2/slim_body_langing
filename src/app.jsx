// import "babel-polyfill"

import React from 'react'

import router from 'lib/router'
import 'config'

import "../stylesheets/index.scss"

// Auth & User profile
// import auth from 'lib/auth'
// import userProfile from 'stores/user_profile'

// Routes
import AppRoutes from 'routes/app'

router(AppRoutes)

// auth.checkAuth()

// authProvider.checkAuth(
// 	// Success
// 	({profile}) => {
// 		userProfile.set(profile)
//     router(AppRoutes)
//     return null
// 	},
// 	// Fail
// 	() => router(AuthRoutes)
// )

