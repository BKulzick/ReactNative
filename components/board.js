import React from 'react';
import { Square } from '../components/square'
import { StyleSheet, Text, View, Button} from 'react-native';

export class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <View>
                <Text >{status}</Text>
                <View className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </View>
                <View className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </View>
                <View className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </View>
            </View>
        );
    }
}