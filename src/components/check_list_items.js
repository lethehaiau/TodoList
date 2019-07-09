import React, { Component } from 'react';
import { View, Text, StyleSheet, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class CheckListItem extends Component {
    state = {
        checked: this.props.isCompleted,
    };
    render() {
        return (
            <View style={[this.state.checked?styles.itemContainerChecked:styles.itemContainer]}>
                <CheckBox
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                <Text style={{flex: 1, paddingLeft: 5, textDecorationLine: this.state.checked?'line-through':'none'}}>{this.props.children}</Text>
                <Icon name="calendar" size={15}/>
                <Text style={{fontSize: 10, paddingLeft: 5}}>Due today</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'pink',
        borderRadius: 5,
        elevation: 3,
    },
    itemContainerChecked: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'transparent',
    }
})