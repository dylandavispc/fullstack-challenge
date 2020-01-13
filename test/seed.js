export default function seed(models) {
    return models.User.create({
      firstName: 'Jared',
      lastName: 'Palmer',
      part: '15'
    })
  .catch(e => console.log(e))
}