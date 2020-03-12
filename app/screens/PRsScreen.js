import React, { Component } from 'react'
import { connect } from 'react-redux'
import BaseScreen from './BaseScreen'
import TmbListComponent from '../components/TmbListComponent'
import { deriveTitleBody } from '../utils/utils'

export class PRsScreen extends BaseScreen {
    constructor(props) {
        super(props)
        this.state = {
            page: 1
        }
    }

    componentDidMount(){
        this.loadItems()
    }

    loadItems = () => {
        if(this.props.hasNext && !this.props.fetching){
            let query = {
                page: this.state.page,
                repo: this.props.title
            }
            this.dispatchAction(this.$().PRS_REQUEST, query)
            this.setState({ page: this.state.page + 1 })
        }
    }

    onItemPressed = (item) => {}

    render() {
        const { isProgress, prs } = this.props
        return <TmbListComponent
            onItemPressed={this.onItemPressed}
            loadItems={this.loadItems}
            data={deriveTitleBody(prs)}
            isProgress={isProgress}
        />
    }
}

const mapStateToProps = (state) => ({
    prs: state.prs.prs,
    title: state.detail.detail.title,
    isProgress: state.prs.isProgress,
    hasNext:state.prs.hasNext,
    fetching: state.prs.fetching
})

export default connect(mapStateToProps)(PRsScreen)
