import React from 'react'
import { Flex, Box } from 'rebass'

import Chat from '../components/Chat'
import Jackpot from '../components/Jackpot'

class MainJackpot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // TODO: FIX THIS...
      // chat: props.chipsgg.state('chat') || props.chipsgg.state('chats')[0],
      // jackpot: props.chipsgg.state('jackpot'),
    }
  }

  componentDidMount() {
    // // console.log(this.props.chipsgg.state())
    // this.props.chipsgg.state.on('chat', chat => {
    //   if (!chat.messages) chat.messages = []
    //   this.setState({ chat })
    // })
    // this.props.chipsgg.state.on('jackpot', jackpot => {
    //   if (!jackpot) return
    //   this.setState({ jackpot })
    // })
  }

  render() {
    const { chat, jackpot } = this.state
    const { chipsgg } = this.props

    return (
      <Flex width={1}>
        <Jackpot {...chipsgg} />
        <Chat {...chipsgg} />
      </Flex>
    )
  }
}

export default MainJackpot
