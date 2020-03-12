import React from 'react'
import { connect } from 'react-redux'
import BaseScreen from './BaseScreen'
import TmbListComponent from '../components/TmbListComponent'
import { deriveNameDescription } from '../utils/utils'

export class MainScreen extends BaseScreen {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
        }
    }

    componentDidMount() {
        this.loadItems()
    }

    loadItems = () => {
        if (this.props.hasNext && !this.props.fetching) {
            this.dispatchAction(this.$().REPOS_REQUEST, this.state.page)
            this.setState({ page: this.state.page + 1 })
        }
    }

    onItemPressed = (item) => {
        this.dispatchAction(this.$().SET_DETAIL_ITEM, item)
        this.navigate('Detail')
    }

    render() {
        const { isProgress, repos } = this.props
        console.log('repos', repos)
        return <TmbListComponent
            onItemPressed={this.onItemPressed}
            loadItems={this.loadItems}
            data={deriveNameDescription(repos)}
            isProgress={isProgress}
        />
    }
}

const mapStateToProps = (state) => ({
    repos: state.repos.repos,
    isProgress: state.repos.isProgress,
    page: state.repos.page,
    hasNext: state.repos.hasNext,
    fetching: state.repos.fetching
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)