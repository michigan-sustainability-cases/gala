import React from 'react'
import { connect } from 'react-redux'
import {Trackable} from 'concerns/trackable.js'
import Animate from 'react-animate'
import { FormattedMessage } from 'react-intl'
import { EditableText } from '@blueprintjs/core'
import EditableAttribute from 'EditableAttribute.js'
import Statistics from 'Statistics.js'
import CardContents from 'CardContents.js'

function mapStateToProps(state, {id}) {
  return {
    podcast: state.podcastsById[id],
    editing: state.edit.inProgress,
    slug: state.caseData.slug,
  }
}

class Podcast extends React.Component {
  render() {
    let {podcast, slug, editing} = this.props
    let {cardId} = podcast

    return (
      <div className="Podcast">
        <PodcastPlayer editing={editing} slug={slug} {...podcast} />

        <div className="PodcastInfo">
          <CardContents id={cardId} nonNarrative />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Podcast)

let PodcastPlayer = Animate.extend(class PodcastPlayer extends Trackable {
  eventName() { return "visit_podcast" }

  trackableArgs() { return {
    case_slug: this.props.slug,
    podcast_id: this.props.id,
  } }

  newPropsAreDifferent(nextProps) {
    this.props.id !== nextProps.id
  }

  constructor() {
    super()
    this.state = {
      playing: false,
      creditsVisible: true,
    }
  }

  componentDidMount() {
    // Not calling super---overriding timer cues.
    window.addEventListener("beforeunload", this.log)
  }

  visibilityChange() {
    // Not calling super---overriding timer cues.
  }

  componentWillUnmount() {
    this.log()
    window.removeEventListener("beforeunload", this.log)
  }

  //showCredits() {
    //this[Animate['@animate']](
      //'podcast-hosts-fade', { maxHeight: 0 }, { maxHeight: 1000 }, 200,
      //{onComplete: () => {this.setState({creditsVisible: true})}}
    //)
  //}
  //hideCredits() {
    //this[Animate['@animate']](
      //'podcast-hosts-fade', { maxHeight: 1000 }, { maxHeight: 0 }, 200,
      //{onComplete: () => {this.setState({creditsVisible: false})}}
    //)
  //}
  toggleCredits() {
    //if (this.state.playing && this.state.creditsVisible) {
      //this.hideCredits()
    //} else if (!this.state.creditsVisible) {
      //this.showCredits()
    //}
  }

  setPlaying() {
    this.setState({
      playing: true,
      timeArrived: Date.now()
    })
    if (this.state.creditsVisible) {
      this.hideCredits()
    }
  }
  setPaused() {
    this.setState({
      playing: false,
      durationSoFar: this.timeSinceArrival(),
      timeArrived: Date.now()
    })
  }

  renderHosts() {
    if (!this.props.credits) { return }

    let {guests, hosts, hosts_string} = this.props.credits
    let guestList = guests.map((guest) => {
      return [<dt>{guest.name}</dt>, <dd>{guest.title}</dd>]
    })

    return <div style={this[Animate['@getAnimatedStyle']]('podcast-hosts-fade')}>
      <dl>{guestList}</dl>
      <em>
        <FormattedMessage id="podcast.hosts" values={{count: hosts.length}} />
        {" "}
        {hosts_string}
      </em>
    </div>
  }

  render() {
    let {id, title, artworkUrl, audioUrl, photoCredit, didSave, statistics, editing} = this.props
    return (
      <div className="PodcastPlayer" >

        <div className="artwork" style={{backgroundImage: `url(${artworkUrl})`}} >
          <EditableAttribute title="Artwork URL"
            value={artworkUrl}
            disabled={!editing} />

          <cite className="o-bottom-right c-photo-credit">
            <EditableText disabled={!editing} multiline value={photoCredit}
              placeholder="Photo credit" />
          </cite>
        </div>

        <div className="credits" onClick={this.toggleCredits.bind(this)} >
          <h1>
            <EditableText disabled={!editing} multiline value={title} />
          </h1>

          {this.renderHosts()}
        </div>

        <Statistics statistics={statistics} inline={true} />

        <audio
          src={audioUrl}
          controls="controls"
          preload="auto"
          onPlay={this.setPlaying.bind(this)}
          onPause={this.setPaused.bind(this)}
        />

      <div>
        <EditableAttribute disabled={!editing} title="Audio URL"
          value={audioUrl} />
      </div>

    </div>
    )
  }
})
