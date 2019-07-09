import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import todoData from '../../data/section_list_data';

export default class AddItem extends Component {
    state = {
        newTaskName: null,
    };
    
    render() {
        return (
            <View>
                <View style={[styles.container, { backgroundColor: '#F5B041', height: 50 }]}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ flex: 1 }} >
                            <Icon name="menufold" size={30} />
                        </TouchableOpacity>
                        <Icon name="antdesign" size={12} color="red" style={{ marginRight: 6 }} />
                        <Text style={{ fontSize: 20 }} >CHORES</Text>
                    </View>
                </View>
                <View style={[styles.container, { borderBottomWidth: 1.5, borderBottomColor: 'gray' }]}>
                    <View style={styles.sectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Add Item"
                            placeholderTextColor='#616161'
                            onChangeText={(text) => { this.setState({ newTaskName: text }) }}
                            value={this.state.newTaskName}
                        />
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                const newID = Object.keys(todoData).length + 4;
                                const newTask = {
                                    id: newID,
                                    text: this.state.newTaskName,
                                };
                                this.props.parentList.refreshSectionList(newID);
                                todoData.push(newTask);
                                console.log(todoData);
                            }}
                            >
                            <Icon name="pluscircle" size={30} color='#0277BD' style={{ marginRight: 12 }} />
                        </TouchableOpacity>
                </View>
            </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
    sectionStyle: {
        flex: 90,
        flexDirection: 'row',
        paddingLeft: 15,
        borderRadius: 40,
        borderWidth: 0,
        backgroundColor: '#E3F2FD',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    }
});