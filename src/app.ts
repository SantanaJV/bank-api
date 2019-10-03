import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import routes from './routes'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect(process.env.SANTANADER_DB_HOST, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }, (err) => {
      if (err) throw err

      console.log('Connected to Database')
    })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
