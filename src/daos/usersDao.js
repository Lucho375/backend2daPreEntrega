import UserModel from '../models/user.model.js'

class UsersDao {
  create(user) {
    return UserModel.create(user)
  }

  getAll() {
    return UserModel.find()
  }

  getOne(id) {
    return UserModel.findOne(id)
  }

  updateOne(id, update) {
    return UserModel.findByIdAndUpdate({ _id: id }, update)
  }

  deleteOne(id) {
    return UserModel.findByIdAndUpdate({ _id: id }, { enabled: false })
  }
}

export default UsersDao
