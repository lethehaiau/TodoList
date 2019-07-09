import React, { Component } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import ListItem from './check_list_items';
import todoData from '../../data/section_list_data';

export default class CheckList extends Component {

    renderSectionHeader = ({ section }) => {
        return (
            <Text style={styles.header}>
                {section.title}
            </Text>
        )
    }

    render() {
        return (
            <SectionList
                style={styles.container}
                sections={sections}
                //renderItem={this.renderItem}
                renderSectionHeader={this.renderSectionHeader}
                keyExtractor={keyExtractor}
            />
        );
    }
}

const keyExtractor = ({ id }) => id

const sections = [
    {
        id: 0,
        title: 'To Do',
        data: todoData,
        renderItem: ({ item }) => {
            return (
                <ListItem style={styles.row} isCompleted={false}>
                    {item.text}
                </ListItem>
            )
        }
    },
    {
        id: 1,
        title: 'Completed',
        data: [
            { id: 3, text: 'ScrollView' },
            { id: 4, text: 'ListView' },
        ],
        renderItem: ({ item }) =>
                <ListItem style={styles.rowDark} isCompleted={true}>
                    {item.text}
                </ListItem>
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
    },
    rowDark: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'steelblue',
    },
    header: {
        padding: 15,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: 'darkblue',
        color: 'white',
        fontWeight: 'bold',
    },
})