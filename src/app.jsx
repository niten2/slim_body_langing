import React from 'react'

import router from 'lib/router'

import 'config'
import "../stylesheets/index.scss"

import AppRoutes from 'routes/app'
router(AppRoutes)


// Auth & User profile
// import auth from 'lib/auth'
// import userProfile from 'stores/user_profile'


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

