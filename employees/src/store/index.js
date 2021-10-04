import { configureStore } from '@reduxjs/toolkit'
import personSlice from './person-reducer'

export default configureStore({
  reducer: {
      persons: personSlice,
  },
})
