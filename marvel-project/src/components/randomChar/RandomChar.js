import './randomChar.scss';
import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';
import { useEffect, useState, useCallback } from 'react';
import { MarvelService } from "../../services/MarvelService"

const RandomChar = () => {
    const initialState = {
        char: {
            name: null,
            description: null,
            thumbnail: null,
            homepage: null,
            wiki: null,
        }
    }
    const [state, setState] = useState(initialState)
    const marvelService = new MarvelService();

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        marvelService.getCharacter(id).then(res => {
            setState({ char:  res })
        })
    }

    const sliceString = (str) => {
        if( str ) {
            return str.slice(0, 200) + "...";
        }
        return "Sorry, no character information"
    }

    useEffect(() => {
        updateChar()
    }, [])

    const { name, description, thumbnail, homepage, wiki } = state.char

    return (
        <div className="randomchar">
            <div className="randomchar__block">
                <img src={ thumbnail } alt="Random character" className="randomchar__img"/>
                <div className="randomchar__info">
                    <p className="randomchar__name">{ name }</p>
                    <p className="randomchar__descr">
                        { sliceString(description) }
                    </p>
                    <div className="randomchar__btns">
                        <a href={ homepage } className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={ wiki } className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

export default RandomChar;