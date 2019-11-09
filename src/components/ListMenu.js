import React from 'react'
import PropTypes from 'prop-types'
import { Button, Menu, Row, Col, Typography } from 'antd'


function NumOfItemsLeft({ todos }) {
    const numOfItems = todos.filter((todo) => todo.isActive === true).length
    if (numOfItems === 1) {
        return (<Typography.Text>{numOfItems} item left</Typography.Text>)
    } else {
        return (<Typography.Text>{numOfItems} items left</Typography.Text>)
    }
}

NumOfItemsLeft.propTypes = {
    todos: PropTypes.array.isRequired,
}

function Filters({ onFilterChange }) {
    return (
        <Menu mode="horizontal" defaultSelectedKeys={['all']}>
            <Menu.Item key='all' onClick={() => { onFilterChange('all') }}>
                All
            </Menu.Item>
            <Menu.Item key='active' onClick={() => { onFilterChange('active') }}>
                Active
            </Menu.Item>
            <Menu.Item key='completed' onClick={() => { onFilterChange('completed') }}>
                Completed
            </Menu.Item>
        </Menu>
    )
}

Filters.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
}

function ClearCompleted({ todos, onClearCompleted }) {
    const todosCompleted = todos.filter((todo) => todo.isActive === false).length
    if (todosCompleted !== 0) {
        return (
            <Button
                onClick={() => { onClearCompleted() }}
            >
                Clear completed
            </Button>
        )
    }
    else {
        return null
    }
}

ClearCompleted.propTypes = {
    todos: PropTypes.array.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
}

export default function ListMenu({ todos, onFilterChange, onClearCompleted }) {
    if (todos.length === 0) {
        return null
    }

    return (
        <Row align='middle' justify='center'>
            <Col span={6}>
                <NumOfItemsLeft
                    todos={todos}
                />
            </Col>
            <Col span={12}>
                <Filters
                    onFilterChange={onFilterChange}
                />
            </Col>
            <Col span={6}>
                <ClearCompleted
                    todos={todos}
                    onClearCompleted={onClearCompleted}
                />
            </Col>
        </Row>
    )
}

ListMenu.propTypes = {
    todos: PropTypes.array.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
}