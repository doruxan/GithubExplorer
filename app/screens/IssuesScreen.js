import React, { Component } from 'react'
import { connect } from 'react-redux'
import BaseScreen from './BaseScreen'
import TmbListComponent from '../components/TmbListComponent'
import { deriveTitleBody } from '../utils/utils'

export class IssuesScreen extends BaseScreen {
    constructor(props) {
        super(props)
        this.state = {
            page: 1
        }
    }

    componentDidMount() {
        this.loadItems()
    }

    loadItems = () => {
        if(this.props.hasNext && !this.props.fetching){
            let query = {
                page: this.state.page,
                repo: this.props.title
            }
            this.dispatchAction(this.$().ISSUES_REQUEST, query)
            this.setState({ page: this.state.page + 1 })
        }
    }

    onItemPressed = (item) => { }

    render() {
        const { isProgress, issues } = this.props
        return <TmbListComponent
            onItemPressed={this.onItemPressed}
            loadItems={this.loadItems}
            data={deriveTitleBody(issues)}
            isProgress={isProgress}
        />
    }
}

const mapStateToProps = (state) => ({
    issues: state.issues.issues,
    title: state.detail.detail.title,
    isProgress: state.issues.isProgress,
    hasNext:state.issues.hasNext,
    fetching: state.issues.fetching
})

export default connect(mapStateToProps)(IssuesScreen)
