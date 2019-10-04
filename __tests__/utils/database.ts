import mongoose from 'mongoose'
import User from '../../src/models/User'

function connect (): void {
  mongoose.connect(process.env.SANTANADER_DB_HOST)
}

async function clear (): Promise<void> {
  await User.remove({})
}

export default {
  connect,
  clear
}
