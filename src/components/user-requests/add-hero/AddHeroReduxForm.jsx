import { reduxForm } from 'redux-form'

import Form from './AddHeroForm'
import validate from './validate'

const createReduxForm = heroes => (
  reduxForm({
    form: 'add-project',
    fields: ['hero', 'comment'],
    validate: validate(heroes)
  })(Form)
)

export default createReduxForm
