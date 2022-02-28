import React, { FunctionComponent } from 'react'

type TextProps = {
  label?: string,
  text: string
}

const Text: FunctionComponent<TextProps> = function ({ label, text }) {
  return <div>{label} {label && ":"} {text}</div>
}

export default Text