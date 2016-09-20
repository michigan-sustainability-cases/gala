import React, {PropTypes} from 'react'

import {Orchard} from 'concerns/orchard.js'

export class Editable extends React.Component {
  prepareSave(e) {
    let newContent = this.props.html ? e.target.innerHTML : e.target.innerText

    let args = this.props.uri.split(':')
    if (args.length != 2) { throw URIError(`$(this.props.uri) is not a valid orchard reference`) }
    let endpoint = args[0]
    let attribute = args[1]

    let params = endpoint.split(/(.*)\//)
    let model = params[1].split('/').pop().slice(0, -1)

    let object = {
      [`${model}`]: {
        [`${attribute}`]: newContent
      }
    }

    Orchard.espalier(endpoint, object)
      .then((response) => { this.props.didSave(response) }) }

  render() {
    let editable = this.props.didSave !== null

    return ( this.props.children && React.cloneElement(this.props.children, {
      contentEditable: editable,
      onBlur: this.prepareSave.bind(this)
    }) )
  }
}

Editable.propTypes = {
  children: PropTypes.element.isRequired,
  didSave: PropTypes.func,
  html: PropTypes.bool,
  uri: PropTypes.string.isRequired
}

Editable.defaultProps = {
  html: false
}
