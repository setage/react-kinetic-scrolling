import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Scrolling from '../index'
import './styles.css'

storiesOf('Button', module)
    .add('default view', () => (
        <Scrolling horizontal snap={210}>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">7</div>
            <div className="item">8</div>
            <div className="item">9</div>
            <div className="item">10</div>
        </Scrolling>
    ))
    .add('vertical view', () => (
        <Scrolling>
            <div className="item item_horizontal">1</div>
            <div className="item item_horizontal">2</div>
            <div className="item item_horizontal">3</div>
            <div className="item item_horizontal">4</div>
            <div className="item item_horizontal">5</div>
            <div className="item item_horizontal">6</div>
            <div className="item item_horizontal">7</div>
            <div className="item item_horizontal">8</div>
            <div className="item item_horizontal">9</div>
            <div className="item item_horizontal">10</div>
        </Scrolling>
    ))
