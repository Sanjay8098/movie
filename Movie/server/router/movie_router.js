import { Router } from 'express'

import MovieController from '../controller/movie_ctrl'

const router = Router()

router.post('/create', MovieController.createMovie)
router.put('/:id', MovieController.updateMovie)
router.delete('/:id', MovieController.deleteMovie)
router.get('/:id', MovieController.getMovieById)
router.get('/', MovieController.getMovies)

export default router