import './App.css';
import {getAllPlayers} from "./client";

import Container from './components/Container'

import React, {Component} from 'react';
import {Avatar, Spin, Table} from "antd";

class App extends Component {
    state = {
        players: [],
        isLoading: false
    }

    componentDidMount() {
        this.fetchAllPlayers();
    }

    fetchAllPlayers = () => {
        this.setState({isLoading: true});

        getAllPlayers().then(res => res.json()
            .then(players => {
                this.setState({players, isLoading: false})
            }));
    }

    render() {
        const {players, isLoading} = this.state;

        if (isLoading) {
            return (
                <div className="custom-spin">
                    <Spin size={"large"}/>
                </div>
            );
        }

        if (players && players.length) {
            const columns = [
                {
                    title: '',
                    dataIndex: 'avatar',
                    render: (text, player) => (
                        <Avatar size={"large"} style={{color: 'white', backgroundColor: 'green'}} alt={"avatar"}>
                            {`${player.name.charAt(0).toUpperCase()}`}
                        </Avatar>
                    )
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Marital Status',
                    dataIndex: 'martialStatus',
                    key: 'martialStatus',
                }
            ];
            return (
                <Container>
                    <Table dataSource={players} columns={columns} pagination={false}/>
                </Container>
            )
        }
        return (
            <div>
                <p>No Students</p>
            </div>
        );
    }
}

export default App;