import React from 'react'
import { FlatList } from 'react-native'
import MainContainer from './MainContainer'
import TmbActivityIndicator from './TmbActivityIndicator'
import MainListItem from './MainListItem'

const TmbListComponent = ({ onItemPressed, loadItems, data, isProgress }) => {
    if (isProgress) return <TmbActivityIndicator  />
    return (
        <MainContainer>
            <FlatList
                data={data}
                renderItem={(item) => (
                    <MainListItem
                        title={item.item.title}
                        description={item.item.description}
                        onPress={() => onItemPressed(item.item)}
                    />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                // windowSize={10}
                onEndReached={loadItems}
                // since github is really slow
                onEndReachedThreshold={0.1}
                // removeClippedSubviews
                initialNumToRender={20}
            />
        </MainContainer>
    )
}

export default TmbListComponent