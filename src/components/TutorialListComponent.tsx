import React, {Component} from 'react';
import ITutorialData from "../types/ITutorialData";

type Props = {};
type State = {
    tutorials: Array<ITutorialData>,
    currentTotal: ITutorialData | null,
    currentIndex: number,
    searchTitle: string
}

export default class TutorialListComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.state = {
            tutorials: [],
            currentTutorial: null,
            currentIndex: -1,
            searchTitle: "",
        }
    }

    setActiveTutorial(tutorial: ITutorialData, index: number) {
        this.setState({
            currentTutorial: tutorial,
            currentIndex: index
        });
    }

    render() {
        const {
            searchTitle,
            tutorials,
            currentTutorial,
            currentIndex,
        } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <ul className="list-group">
                        {tutorials &&
                        tutorials.map((tutorial: ITutorialData, index: number) => (
                            <li
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveTutorial(tutorial, index)}
                                key={index}
                            >
                                {tutorial.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

}
