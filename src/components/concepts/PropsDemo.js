import {userState, useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleFontColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    };

    const toggleBkColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('black') : setBackgroundColor('purple');
    };

    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('40%') : setBorderRadius('5px');
    };

    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('ridge') : setBorderStyle('dashed');
    };

    return(
        <div className='main'>
            <div className='mainDiv'>
                <div style= {styles}>
                    <FunctionalComponent string='Change Font Color' function={toggleFontColor} selectedStyle={color} />
                    {/* Testing the defaultProps below by removing the string, function and selectedStyle */}
                    {/* <FunctionalComponent /> */}
                    <FunctionalComponent string='Change Background Color' function={toggleBkColor} selectedStyle={backgroundColor} />
                    <FunctionalComponent string='Change Border Radius' function={toggleBorderRadius} selectedStyle={borderRadius}/>
                    <FunctionalComponent string='Change Border Style' function={toggleBorderStyle} selectedStyle={borderStyle}/>
                </div>
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    );
};

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('can I see this in the console?'),
    selectedStyle: 'what style?'
};

FunctionalComponent.propsTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
};

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is: {props.selectedStyle}</p>
        </div>
    );
};